import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // On mount: verify token and load full profile
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authService.getProfile()
        .then(res => setUser(res.data.data))
        .catch(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.login(email, password);
      const { token } = response.data;
      localStorage.setItem('token', token);
      // Fetch full profile to get createdAt etc.
      const profileRes = await authService.getProfile();
      const fullUser = profileRes.data.data;
      localStorage.setItem('user', JSON.stringify(fullUser));
      setUser(fullUser);
      return response.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.signup(firstName, lastName, email, password);
      const { token } = response.data;
      localStorage.setItem('token', token);
      const profileRes = await authService.getProfile();
      const fullUser = profileRes.data.data;
      localStorage.setItem('user', JSON.stringify(fullUser));
      setUser(fullUser);
      return response.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Signup failed';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, signup, logout, isLoading, error }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
