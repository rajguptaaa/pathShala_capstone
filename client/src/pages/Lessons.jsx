import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Clock, Star, Filter, BookOpen, RotateCcw } from 'lucide-react';
import { lessonsData, LANGUAGES, LEVELS } from '../data/lessonsData';
import LessonModal from '../components/LessonModal';
import { useProgress } from '../hooks/useProgress';

const Lessons = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [activeLesson, setActiveLesson] = useState(null);
  const { progress, isCompleted, getLessonProgress } = useProgress();

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const langFlags = {
    Spanish: '🇪🇸', French: '🇫🇷', German: '🇩🇪',
    Hindi: '🇮🇳', Japanese: '🇯🇵', Chinese: '🇨🇳', Arabic: '🇸🇦'
  };

  const allLessons = [];
  for (const lang of LANGUAGES) {
    for (const lvl of LEVELS) {
      const lessonData = lessonsData[lang]?.[lvl];
      if (lessonData) allLessons.push({ language: lang, level: lvl, data: lessonData });
    }
  }

  const filteredLessons = allLessons.filter(l => {
    const langMatch = selectedLanguage === 'all' || l.language === selectedLanguage;
    const levelMatch = selectedLevel === 'all' || l.level === selectedLevel;
    return langMatch && levelMatch;
  });

  const completedCount = allLessons.filter(l => isCompleted(l.data.id)).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Language Lessons</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Choose from our adaptive lesson modules — vocabulary, grammar, and gamified quizzes!
          </p>
          {completedCount > 0 && (
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 max-w-xs">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.round((completedCount / allLessons.length) * 100)}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                />
              </div>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                {completedCount}/{allLessons.length} completed
              </span>
            </div>
          )}
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="text-gray-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
            <span className="text-sm text-gray-400 dark:text-gray-500">Showing {filteredLessons.length} lessons</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label>
              <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option value="all">All Levels</option>
                {LEVELS.map(level => <option key={level} value={level}>{level}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
              <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option value="all">All Languages</option>
                {LANGUAGES.map(language => <option key={language} value={language}>{langFlags[language]} {language}</option>)}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Lessons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map(({ language, level, data }, index) => {
            const completed = isCompleted(data.id);
            const lessonProg = getLessonProgress(data.id);
            const isQuizCompleted = completed && lessonProg?.type !== 'reading';
            const isReadingCompleted = completed && lessonProg?.type === 'reading';

            return (
              <motion.div key={`${language}-${level}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden relative ${completed ? 'ring-2 ring-green-400 dark:ring-green-500' : ''}`}>

                {/* Completed banner */}
                {completed && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500" />
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{langFlags[language]}</div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(level)}`}>{level}</span>
                      {completed && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold">
                          <CheckCircle size={11} /> Done
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{data.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{data.description}</p>

                  {/* Quiz score if completed */}
                  {isQuizCompleted && lessonProg?.bestScore !== undefined && (
                    <div className="mb-3 p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-between text-xs">
                      <span className="text-purple-600 dark:text-purple-400 font-medium">
                        🏅 Best: {lessonProg.bestScore}/{lessonProg.totalPoints || '?'} pts ({lessonProg.percentage || 0}%)
                      </span>
                      <span className="text-gray-400">×{lessonProg.attempts}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1"><Clock size={14} /><span>{data.duration}</span></div>
                    <div className="flex items-center gap-1"><BookOpen size={14} /><span>{data.vocabulary?.length || 0} words</span></div>
                    <div className="flex items-center gap-1"><Star size={14} className="text-yellow-400 fill-current" /><span>{data.rating}</span></div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-400 dark:text-gray-500">
                    <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700">{data.exercises?.length || 0} quiz questions</span>
                    <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700">{data.grammar?.length || 0} grammar rules</span>
                  </div>

                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveLesson({ language, level, data })}
                    className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                      completed
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}>
                    {completed ? (
                      <><RotateCcw size={16} /><span>Review / Re-attempt</span></>
                    ) : (
                      <><Play size={16} /><span>Start Lesson</span></>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredLessons.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No lessons found matching your filters.</p>
          </motion.div>
        )}
      </div>

      {activeLesson && (
        <LessonModal
          lesson={activeLesson.data}
          language={activeLesson.language}
          level={activeLesson.level}
          onClose={() => setActiveLesson(null)}
        />
      )}
    </div>
  );
};

export default Lessons;
