const axios = require('axios');

const OLLAMA_API = process.env.OLLAMA_API_URL || 'http://localhost:11434';
const MODEL = process.env.OLLAMA_MODEL || 'mistral';

exports.generateChatResponse = async (message, language, conversationHistory = []) => {
  try {
    const messages = [
      {
        role: 'system',
        content: `You are a helpful language learning tutor specializing in ${language}. Provide clear, encouraging responses. Correct mistakes gently and explain grammar when needed. Keep responses conversational and educational.`
      },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await axios.post(`${OLLAMA_API}/api/chat`, {
      model: MODEL,
      messages: messages,
      stream: false
    });

    return response.data.message.content;
  } catch (error) {
    console.error('Local LLM Error:', error.message);
    throw new Error('Failed to generate chat response');
  }
};

exports.correctText = async (text, language) => {
  try {
    const prompt = `Correct the ${language} text and explain the corrections:\n"${text}"\n\nProvide in format:\nCorrected: [text]\nExplanation: [explanation]`;
    
    const response = await axios.post(`${OLLAMA_API}/api/generate`, {
      model: MODEL,
      prompt: prompt,
      stream: false
    });

    return response.data.response;
  } catch (error) {
    console.error('Correction Error:', error.message);
    throw new Error('Failed to correct text');
  }
};

exports.translateText = async (text, targetLanguage) => {
  try {
    const prompt = `Translate the following text to ${targetLanguage}:\n"${text}"\n\nProvide only the translation.`;
    
    const response = await axios.post(`${OLLAMA_API}/api/generate`, {
      model: MODEL,
      prompt: prompt,
      stream: false
    });

    return response.data.response;
  } catch (error) {
    console.error('Translation Error:', error.message);
    throw new Error('Failed to translate text');
  }
};

exports.generateLessonContent = async (topic, level, language) => {
  try {
    const prompt = `Create a ${language} lesson on "${topic}" at ${level} level.\n\nInclude:\n1. Key vocabulary (5-10 words)\n2. Grammar explanation\n3. Example sentences (3-5)\n4. Practice exercise\n\nKeep it concise and educational.`;
    
    const response = await axios.post(`${OLLAMA_API}/api/generate`, {
      model: MODEL,
      prompt: prompt,
      stream: false
    });

    return response.data.response;
  } catch (error) {
    console.error('Lesson Generation Error:', error.message);
    throw new Error('Failed to generate lesson content');
  }
};