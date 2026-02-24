const ChatMessage = require('../models/ChatMessage');
const aiService = require('../services');

exports.sendMessage = async (req, res, next) => {
  try {
    const { message, sessionId, language } = req.body;

    if (!message || !sessionId || !language) {
      return res.status(400).json({ 
        success: false, 
        message: 'Message, sessionId, and language are required' 
      });
    }

    // Get conversation history
    const history = await ChatMessage.find({ sessionId }).sort({ createdAt: 1 });
    const conversationHistory = history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.message
    }));

    // Save user message
    const userMessage = await ChatMessage.create({
      user: req.user.id,
      sessionId,
      sender: 'user',
      message,
      language
    });

    // Generate AI response
    const aiResponse = await aiService.generateChatResponse(message, language, conversationHistory);

    // Save AI message
    const aiMsg = await ChatMessage.create({
      user: req.user.id,
      sessionId,
      sender: 'ai',
      message: aiResponse,
      language
    });

    res.status(201).json({ 
      success: true, 
      data: { 
        userMessage, 
        aiMessage: aiMsg 
      } 
    });
  } catch (error) {
    next(error);
  }
};

exports.getChatHistory = async (req, res, next) => {
  try {
    const { sessionId } = req.params;
    const messages = await ChatMessage.find({ 
      sessionId, 
      user: req.user.id 
    }).sort({ createdAt: 1 });

    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    next(error);
  }
};

exports.correctMessage = async (req, res, next) => {
  try {
    const { message, language } = req.body;

    if (!message || !language) {
      return res.status(400).json({ 
        success: false, 
        message: 'Message and language are required' 
      });
    }

    const correction = await aiService.correctText(message, language);

    res.status(200).json({ success: true, data: { correction } });
  } catch (error) {
    next(error);
  }
};

exports.translateMessage = async (req, res, next) => {
  try {
    const { message, targetLanguage } = req.body;

    if (!message || !targetLanguage) {
      return res.status(400).json({ 
        success: false, 
        message: 'Message and targetLanguage are required' 
      });
    }

    const translation = await aiService.translateText(message, targetLanguage);

    res.status(200).json({ success: true, data: { translation } });
  } catch (error) {
    next(error);
  }
};

exports.textToSpeech = async (req, res, next) => {
  try {
    const { text, languageCode } = req.body;

    if (!text) {
      return res.status(400).json({ 
        success: false, 
        message: 'Text is required' 
      });
    }

    const audioUrl = await aiService.textToSpeech(text, languageCode || 'en');

    res.status(200).json({ success: true, data: { audioUrl } });
  } catch (error) {
    next(error);
  }
};

exports.speechToText = async (req, res, next) => {
  try {
    // Speech-to-Text is client-side with Web Speech API
    // This endpoint just returns instructions
    res.status(200).json({ 
      success: true, 
      message: 'Use Web Speech API on client side',
      docs: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API'
    });
  } catch (error) {
    next(error);
  }
};
