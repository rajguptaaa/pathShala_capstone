import { useState, useEffect, useCallback } from 'react';
import { progressService } from '../services/progressService';
import { useAuth } from '../context/AuthContext';

const STORAGE_KEY = 'pathshala_progress';
const TOTAL_LESSONS = 21;

const getStorageKey = (userIdentifier) => `${STORAGE_KEY}_${userIdentifier || 'guest'}`;

const readLocal = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch {
    return {};
  }
};

const writeLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const useProgress = (userIdentifier) => {
  const { user, setUser } = useAuth();
  const storageKey = getStorageKey(userIdentifier);
  const guestKey = getStorageKey('guest');

  const [progress, setProgress] = useState(() => readLocal(storageKey));

  useEffect(() => {
    setProgress(readLocal(storageKey));
  }, [storageKey]);

  useEffect(() => {
    if (!userIdentifier) return;

    const guestProgress = readLocal(guestKey);
    const userProgress = readLocal(storageKey);

    if (Object.keys(guestProgress).length > 0 && Object.keys(userProgress).length === 0) {
      writeLocal(storageKey, guestProgress);
      localStorage.removeItem(guestKey);
      setProgress(guestProgress);
    }
  }, [userIdentifier, storageKey, guestKey]);

  const refresh = useCallback(() => {
    setProgress(readLocal(storageKey));
  }, [storageKey]);

  const saveLocal = useCallback(
    (data) => {
      writeLocal(storageKey, data);
      setProgress(data);
    },
    [storageKey]
  );

  const updateUserProgress = useCallback(
    (completedCount) => {
      if (user && setUser) {
        setUser((prev) => ({
          ...prev,
          totalLessonsCompleted: completedCount,
          progress: Math.round((completedCount / TOTAL_LESSONS) * 100),
        }));
      }
    },
    [setUser, user]
  );

  const isCompleted = useCallback(
    (lessonKey) => readLocal(storageKey)[lessonKey]?.status === 'completed',
    [storageKey]
  );

  const getLessonProgress = useCallback(
    (lessonKey) => readLocal(storageKey)[lessonKey] || null,
    [storageKey]
  );

  const markReadingCompleted = useCallback(
    async (lessonKey, lessonTitle, lessonLanguage, lessonLevel) => {
      const local = readLocal(storageKey);
      const existing = local[lessonKey] || {};

      const updated = {
        ...existing,
        lessonKey,
        lessonTitle,
        lessonLanguage,
        lessonLevel,
        status: 'completed',
        progress: 100,
        completedAt: existing.completedAt || new Date().toISOString(),
        type: existing.type || 'reading',
      };

      local[lessonKey] = updated;
      saveLocal(local);

      try {
        await progressService.updateProgress(
          lessonKey,
          lessonTitle,
          lessonLanguage,
          lessonLevel,
          100,
          existing.score || 0,
          existing.totalPoints || 0,
          1,
          'completed'
        );
      } catch (e) {
        console.warn('Progress sync failed:', e);
      }

      const completedCount = Object.values(local).filter((item) => item.status === 'completed').length;
      updateUserProgress(completedCount);
    },
    [saveLocal, storageKey, updateUserProgress]
  );

  const saveQuizResult = useCallback(
    async (lessonKey, lessonTitle, lessonLanguage, lessonLevel, score, totalPoints) => {
      const local = readLocal(storageKey);
      const existing = local[lessonKey] || {};
      const percentage = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;

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
        percentage,
        attempts: (existing.attempts || 0) + 1,
        lastScore: score,
        bestScore: Math.max(score, existing.bestScore || 0),
        completedAt: existing.completedAt || new Date().toISOString(),
        lastAttemptAt: new Date().toISOString(),
        type: 'quiz',
      };

      local[lessonKey] = updated;
      saveLocal(local);

      try {
        await progressService.updateProgress(
          lessonKey,
          lessonTitle,
          lessonLanguage,
          lessonLevel,
          100,
          score,
          totalPoints,
          1,
          'completed'
        );
      } catch (e) {
        console.warn('Progress sync failed:', e);
      }

      const completedCount = Object.values(local).filter((item) => item.status === 'completed').length;
      updateUserProgress(completedCount);

      return updated;
    },
    [saveLocal, storageKey, updateUserProgress]
  );

  return {
    progress,
    isCompleted,
    getLessonProgress,
    markReadingCompleted,
    saveQuizResult,
    refresh,
  };
};
