import { useState, useEffect, useCallback } from 'react';
import { progressService } from '../services/progressService';

const STORAGE_KEY = 'pathshala_progress';

// Read all progress from localStorage
const readLocal = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
};

// Write progress to localStorage
const writeLocal = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const useProgress = () => {
  const [progress, setProgress] = useState(readLocal);

  // Refresh state from localStorage (call after writes)
  const refresh = useCallback(() => {
    setProgress(readLocal());
  }, []);

  // Check if a lesson is completed
  const isCompleted = useCallback((lessonKey) => {
    const local = readLocal();
    return local[lessonKey]?.status === 'completed';
  }, []);

  // Get full progress record for a lesson
  const getLessonProgress = useCallback((lessonKey) => {
    return readLocal()[lessonKey] || null;
  }, []);

  // Mark reading material (vocab/grammar) as completed
  const markReadingCompleted = useCallback(async (lessonKey, lessonTitle, lessonLanguage, lessonLevel) => {
    const local = readLocal();
    const existing = local[lessonKey] || {};
    
    // Only update if not already completed (don't overwrite quiz score)
    const updated = {
      ...existing,
      lessonKey,
      lessonTitle,
      lessonLanguage,
      lessonLevel,
      status: 'completed',
      progress: 100,
      completedAt: existing.completedAt || new Date().toISOString(),
      type: existing.type || 'reading'
    };
    
    local[lessonKey] = updated;
    writeLocal(local);
    setProgress({ ...local });

    // Sync to server (fire and forget)
    try {
      await progressService.updateProgress(
        lessonKey, lessonTitle, lessonLanguage, lessonLevel,
        100, existing.score || 0, existing.totalPoints || 0, 1, 'completed'
      );
    } catch (e) {
      console.warn('Progress sync failed:', e.message);
    }
  }, []);

  // Save quiz result and mark as completed
  const saveQuizResult = useCallback(async (lessonKey, lessonTitle, lessonLanguage, lessonLevel, score, totalPoints) => {
    const local = readLocal();
    const existing = local[lessonKey] || {};
    const pct = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;

    const updated = {
      ...existing,
      lessonKey,
      lessonTitle,
      lessonLanguage,
      lessonLevel,
      status: 'completed',
      progress: 100,
      score,
      totalPoints,
      percentage: pct,
      attempts: (existing.attempts || 0) + 1,
      lastScore: score,
      bestScore: Math.max(score, existing.bestScore || 0),
      completedAt: existing.completedAt || new Date().toISOString(),
      lastAttemptAt: new Date().toISOString(),
      type: 'quiz'
    };

    local[lessonKey] = updated;
    writeLocal(local);
    setProgress({ ...local });

    // Sync to server
    try {
      await progressService.updateProgress(
        lessonKey, lessonTitle, lessonLanguage, lessonLevel,
        100, score, totalPoints, 1, 'completed'
      );
    } catch (e) {
      console.warn('Progress sync failed:', e.message);
    }

    return updated;
  }, []);

  return { progress, isCompleted, getLessonProgress, markReadingCompleted, saveQuizResult, refresh };
};
