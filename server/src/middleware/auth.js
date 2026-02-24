const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  try {
    let token;
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized to access this route' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    
    if (!req.user) {
      return res.status(401).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({ 
      success: false, 
      message: 'Not authorized to access this route' 
    });
  }
};

// filepath: c:\Users\Lenovo\OneDrive\Desktop\pathShala-main\server\src\middleware\errorHandler.js
exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const error = {
    success: false,
    message: err.message || 'Server Error'
  };

  if (err.name === 'ValidationError') {
    error.message = Object.values(err.errors).map(e => e.message).join(', ');
    return res.status(400).json(error);
  }

  if (err.code === 11000) {
    error.message = 'Duplicate field value entered';
    return res.status(400).json(error);
  }

  if (err.name === 'CastError') {
    error.message = 'Resource not found';
    return res.status(404).json(error);
  }

  if (err.name === 'JsonWebTokenError') {
    error.message = 'Invalid token';
    return res.status(401).json(error);
  }

  res.status(err.statusCode || 500).json(error);
};
