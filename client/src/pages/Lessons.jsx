import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Lock, CheckCircle, Clock, Star, Filter } from 'lucide-react';
import { lessonService } from '../services/lessonService';

const Lessons = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLessons();
  }, [selectedLevel, selectedLanguage]);

  const fetchLessons = async () => {
    try {
      setLoading(true);
      const level = selectedLevel === 'all' ? '' : selectedLevel;
      const language = selectedLanguage === 'all' ? '' : selectedLanguage;
      
      const response = await lessonService.getAllLessons(level, language);
      setLessons(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load lessons');
      console.error('Lessons error:', err);
    } finally {
      setLoading(false);
    }
  };

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  const languages = ['all', 'Spanish', 'French', 'German', 'Hindi', 'Japanese', 'Chinese', 'Arabic'];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Language Lessons
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Choose from our adaptive lesson modules tailored to your learning pace
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="text-gray-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Levels' : level}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Language
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {languages.map(language => (
                  <option key={language} value={language}>
                    {language === 'all' ? 'All Languages' : language}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300"
          >
            {error}
          </motion.div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={lesson._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {lesson.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {lesson.description}
                        </p>
                      </div>
                      
                      {lesson.completed && (
                        <CheckCircle className="text-green-500 flex-shrink-0 ml-2" size={20} />
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(lesson.level)}`}>
                        {lesson.level}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {lesson.rating ? lesson.rating.toFixed(1) : 'N/A'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock size={16} />
                        <span>{lesson.duration}</span>
                      </div>
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {lesson.language}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        // Handle lesson click
                        console.log('Starting lesson:', lesson._id);
                      }}
                      disabled={lesson.locked}
                      className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                        lesson.locked
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                          : lesson.completed
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {lesson.locked ? (
                        <>
                          <Lock size={16} />
                          <span>Locked</span>
                        </>
                      ) : lesson.completed ? (
                        <>
                          <CheckCircle size={16} />
                          <span>Review</span>
                        </>
                      ) : (
                        <>
                          <Play size={16} />
                          <span>Start Lesson</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {lessons.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No lessons found matching your filters.
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Lessons;
