// Gemini-only AI service — OpenAI removed
const geminiService = require('./geminiService');

const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || '').trim();

if (!GEMINI_API_KEY) {
  console.error('[AI] FATAL: GEMINI_API_KEY missing in server/.env');
} else {
  console.log('[AI] Gemini service loaded. Model:', process.env.GEMINI_MODEL || 'gemini-1.5-flash');
}

module.exports = {
  generateChatResponse:  geminiService.generateChatResponse,
  correctText:           geminiService.correctText,
  translateText:         geminiService.translateText,
  generateLessonContent: geminiService.generateLessonContent,
  textToSpeech:  async (text, lang) => ({ text, lang, note: 'Use browser Web Speech API' }),
  speechToText:  async () => ({ note: 'Use browser Web Speech API' }),
};
