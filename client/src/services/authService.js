import api from './api';

export const authService = {
  signup: (firstName, lastName, email, password) =>
    api.post('/auth/register', { firstName, lastName, email, password }),
  
  login: (email, password) =>
    api.post('/auth/login', { email, password }),
  
  getProfile: () =>
    api.get('/auth/me'),
  
  updateProfile: (data) =>
    api.put('/auth/profile', data)
};