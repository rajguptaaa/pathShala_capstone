import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, Award, TrendingUp, Edit3 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/authService';

const Profile = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    bio: '',
    nativeLanguage: 'English',
    targetLanguages: []
  });
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (user) {
      fetchProfileData();
    }
  }, [user]);

  const fetchProfileData = async () => {
    try {
      const response = await authService.getProfile();
      const data = response.data.data;
      setProfileData({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        bio: data.bio || '',
        nativeLanguage: data.nativeLanguage || 'English',
        targetLanguages: data.targetLanguages || []
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load profile');
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    try {
      await authService.updateProfile({
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        bio: profileData.bio,
        nativeLanguage: profileData.nativeLanguage,
        targetLanguages: profileData.targetLanguages
      });
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {profileData.firstName[0]}{profileData.lastName[0]}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{user?.level} Learner</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Mail size={16} />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Edit3 size={16} />
                <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  logout();
                  window.location.href = '/';
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </motion.button>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300"
            >
              {error}
            </motion.div>
          )}

          {isEditing ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  disabled={loading}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <div>
              <p className="text-gray-600 dark:text-gray-300">{profileData.bio || 'No bio added yet'}</p>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Learning Statistics</h2>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{user?.progress || 0}%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Overall Progress</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{user?.totalLessonsCompleted || 0}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lessons Completed</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">Weekly Progress</h3>
              <div className="h-32 flex items-end justify-between space-x-2">
                {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-purple-500 rounded-t flex-1"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Target Languages</h2>
            
            <div className="space-y-2">
              {user?.targetLanguages && user.targetLanguages.length > 0 ? (
                user.targetLanguages.map((lang, index) => (
                  <div key={index} className="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                    <p className="font-medium text-purple-700 dark:text-purple-300">{lang}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 dark:text-gray-400 text-sm">No target languages set</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
