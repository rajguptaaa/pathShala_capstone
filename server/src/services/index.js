// Choose between paid and free services based on .env

const useLocalLLM = process.env.USE_LOCAL_LLM === 'true';

let aiService;
let speechService;

if (useLocalLLM) {
  aiService = require('./localLLMService');
  speechService = require('./offlineSpeechService');
} else {
  // Fallback to original services if needed
  aiService = require('./openaiService');
  speechService = require('./speechService');
}

module.exports = {
  generateChatResponse: aiService.generateChatResponse,
  correctText: aiService.correctText,
  translateText: aiService.translateText,
  generateLessonContent: aiService.generateLessonContent,
  textToSpeech: speechService.textToSpeech,
  speechToText: speechService.speechToText
};