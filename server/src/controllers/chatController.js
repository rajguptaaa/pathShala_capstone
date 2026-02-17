const ChatMessage = require('../models/ChatMessage');
const { generateChatResponse, correctText, translateText } = require('../services/openaiService');
const { textToSpeech, speechToText } = require('../services/speechService');

exports.sendMessage = async (req, res, next) => {
  try {
    const { message, sessionId, language } = req.body;

    const userMessage = await ChatMessage.create({
      user: req.user.id,
      sessionId,
      sender: 'user',
      message,
      language
    });

    const conversationHistory = await ChatMessage.find({ 
      user: req.user.id, 
      sessionId 
    })
      .sort({ createdAt: 1 })
      .limit(10)
      .select('sender message');

    const history = conversationHistory.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.message
    }));

    const aiResponse = await generateChatResponse(message, language, history);

    const aiMessage = await ChatMessage.create({
      user: req.user.id,
      sessionId,
      sender: 'ai',
      message: aiResponse,
      language
    });

    res.status(200).json({ 
      success: true, 
      data: { 
        userMessage, 
        aiMessage 
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
      user: req.user.id, 
      sessionId 
    }).sort({ createdAt: 1 });

    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    next(error);
  }
};

exports.correctMessage = async (req, res, next) => {
  try {
    const { text, language } = req.body;
    const corrections = await correctText(text, language);

    res.status(200).json({ success: true, data: corrections });
  } catch (error) {
    next(error);
  }
};

exports.translateMessage = async (req, res, next) => {
  try {
    const { text, targetLanguage } = req.body;
    const translation = await translateText(text, targetLanguage);

    res.status(200).json({ success: true, data: { translation } });
  } catch (error) {
    next(error);
  }
};

exports.textToSpeech = async (req, res, next) => {
  try {
    const { text, languageCode } = req.body;
    const audioUrl = await textToSpeech(text, languageCode);

    res.status(200).json({ success: true, data: { audioUrl } });
  } catch (error) {
    next(error);
  }
};

exports.speechToText = async (req, res, next) => {
  try {
    const { languageCode } = req.body;
    const audioBuffer = req.file.buffer;
    
    const transcription = await speechToText(audioBuffer, languageCode);

    res.status(200).json({ success: true, data: { transcription } });
  } catch (error) {
    next(error);
  }
};
