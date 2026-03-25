import api from './api';

export const progressService = {
  getProgress: () =>
    api.get('/progress'),

  updateProgress: (lessonKey, lessonTitle, lessonLanguage, lessonLevel, progress, score, totalPoints, timeSpent, status) =>
    api.put('/progress', { lessonKey, lessonTitle, lessonLanguage, lessonLevel, progress, score, totalPoints, timeSpent, status }),

  getDashboardStats: () =>
    api.get('/progress/dashboard/stats')
};
