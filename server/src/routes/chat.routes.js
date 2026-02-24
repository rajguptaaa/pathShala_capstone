const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { protect } = require('../middleware/auth');
const multer = require('multer');

// Multer configuration for audio uploads
const upload = multer({ storage: multer.memoryStorage() });

// All chat routes are protected
router.post('/message', protect, chatController.sendMessage);
router.get('/history/:sessionId', protect, chatController.getChatHistory);
router.post('/correct', protect, chatController.correctMessage);
router.post('/translate', protect, chatController.translateMessage);
router.post('/text-to-speech', protect, chatController.textToSpeech);
router.post('/speech-to-text', protect, upload.single('audio'), chatController.speechToText);

module.exports = router;