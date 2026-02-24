import api from './api';

export const chatService = {
  sendMessage: (message, sessionId, language) =>
    api.post('/chat/message', { message, sessionId, language }),
  
  getChatHistory: (sessionId) =>
    api.get(`/chat/history/${sessionId}`),
  
  correctMessage: (message, language) =>
    api.post('/chat/correct', { message, language }),
  
  translateMessage: (message, targetLanguage) =>
    api.post('/chat/translate', { message, targetLanguage }),
  
  textToSpeech: (text, languageCode = 'en') =>
    api.post('/chat/text-to-speech', { text, languageCode }),
  
  speechToText: (audioBuffer, languageCode = 'en-US') =>
    api.post('/chat/speech-to-text', { audioBuffer, languageCode })
};