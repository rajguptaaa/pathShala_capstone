import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Clock, Target, Calendar, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { progressService } from '../services/progressService';
import { useProgress } from '../hooks/useProgress';

const TOTAL_LESSONS = 21;

const Dashboard = () => {
  const { user } = useAuth();
  const userIdentifier = user?.id || user?._id || user?.email;
  const { progress: localProgress } = useProgress(userIdentifier);

  const [stats, setStats] = useState(null);
  const [recentLessons, setRecentLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isNewUser = user?.isNewUser === true || user?.isNewUser === 'true';
  const welcomeText = isNewUser ? 'Welcome' : 'Welcome back';

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user, localProgress]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await progressService.getDashboardStats();
      const { stats, recentLessons } = response.data.data;
      setStats(stats);
      setRecentLessons(recentLessons);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load dashboard');
      console.error('Dashboard error:', err);
    } finally {
      setLoading(false);
    }
  };

  const localCompletedCount = Object.values(localProgress || {}).filter((item) => item.status === 'completed').length;

  const effectiveStats = {
    totalLessons: stats?.totalLessons > 0 ? stats.totalLessons : localCompletedCount,
    studyTime: stats?.studyTime || 0,
    currentStreak: stats?.currentStreak || 0,
    overallProgress:
      stats?.overallProgress > 0
        ? stats.overallProgress
        : Math.round((localCompletedCount / TOTAL_LESSONS) * 100),
  };

  const localRecentLessons = Object.values(localProgress || {})
    .filter((item) => item.lessonTitle && item.progress != null)
    .sort((a, b) => new Date(b.completedAt || 0) - new Date(a.completedAt || 0))
    .slice(0, 3)
    .map((item) => ({
      lesson: {
        title: item.lessonTitle,
        level: item.lessonLevel,
      },
      progress: item.progress,
    }));

  const serverRecentLessons = Array.isArray(recentLessons)
    ? recentLessons.filter((lesson) => lesson?.lesson?.title && lesson?.progress != null)
    : [];

  const displayRecentLessons = serverRecentLessons.length > 0 ? serverRecentLessons : localRecentLessons;

  const statCards = [
    { icon: BookOpen, label: 'Lessons Completed', value: effectiveStats.totalLessons, color: 'bg-blue-500' },
    { icon: Clock, label: 'Study Time (hrs)', value: effectiveStats.studyTime, color: 'bg-green-500' },
    { icon: TrendingUp, label: 'Current Streak', value: effectiveStats.currentStreak, color: 'bg-purple-500' },
    { icon: Target, label: 'Overall Progress', value: `${effectiveStats.overallProgress}%`, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {welcomeText}, {user?.firstName}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Ready to continue your language learning journey?
          </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <stat.icon className="text-white" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Learning Progress</h2>
                  <TrendingUp className="text-green-500" size={24} />
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Overall Progress</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {effectiveStats.overallProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${effectiveStats.overallProgress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {displayRecentLessons.length > 0 ? (
                    displayRecentLessons.map((lesson, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {lesson.lesson?.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {lesson.lesson?.level || 'Level unknown'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {lesson.progress}%
                          </p>
                          <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full"
                              style={{ width: `${lesson.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      No recent lessons started yet.
                    </p>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Start</h2>
                  <Calendar className="text-purple-500" size={24} />
                </div>

                <div className="space-y-3">
                  <Link
                    to="/lessons"
                    className="block p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
                  >
                    Start a Lesson
                  </Link>
                  
                  <Link
                    to="/chat"
                    className="block p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
                  >
                    Practice with AI
                  </Link>
                  
                  <Link
                    to="/profile"
                    className="block p-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
                  >
                    View Profile
                  </Link>

                  {!user?.isPremium && (
                    <Link
                      to="/premium"
                      className="block p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Crown size={18} />
                        <span>Upgrade to Premium</span>
                      </div>
                      <p className="text-xs text-yellow-100 mt-1">Unlock voice AI conversations</p>
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
