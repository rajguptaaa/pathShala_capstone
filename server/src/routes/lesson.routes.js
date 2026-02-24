const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');
const { protect } = require('../middleware/auth');

// Public routes
router.get('/', protect, lessonController.getAllLessons);
router.get('/:id', protect, lessonController.getLessonById);

// Admin/Protected routes
router.post('/', protect, lessonController.createLesson);
router.put('/:id', protect, lessonController.updateLesson);
router.post('/:id/rate', protect, lessonController.rateLesson);

module.exports = router;