const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const { protect } = require('../middleware/auth');

// All progress routes are protected
router.get('/', protect, progressController.getProgress);
router.put('/', protect, progressController.updateProgress);
router.get('/dashboard/stats', protect, progressController.getDashboardStats);

module.exports = router;