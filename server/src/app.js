const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/api/auth', require('./routes/user.routes'));
app.use('/api/lessons', require('./routes/lesson.routes'));
app.use('/api/progress', require('./routes/progress.routes'));
app.use('/api/chat', require('./routes/chat.routes'));

// Welcome route
app.get('/', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Welcome to PathShala Language Learning API',
    version: '1.0.0'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;
