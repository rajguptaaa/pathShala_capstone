import api from './api';

export const progressService = {
  getProgress: () =>
    api.get('/progress'),
  
  updateProgress: (lessonId, progress, score, timeSpent, completedExercises) =>
    api.put('/progress', { lessonId, progress, score, timeSpent, completedExercises }),
  
  getDashboardStats: () =>
    api.get('/progress/dashboard/stats')
};