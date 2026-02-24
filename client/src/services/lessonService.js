import api from './api';

export const lessonService = {
  getAllLessons: (level = '', language = '') =>
    api.get('/lessons', { params: { level, language } }),
  
  getLessonById: (id) =>
    api.get(`/lessons/${id}`),
  
  createLesson: (data) =>
    api.post('/lessons', data),
  
  updateLesson: (id, data) =>
    api.put(`/lessons/${id}`, data),
  
  rateLesson: (id, rating) =>
    api.post(`/lessons/${id}/rate`, { rating })
};