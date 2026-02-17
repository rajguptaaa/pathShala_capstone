const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

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

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate AI response');
  }
};

exports.correctText = async (text, language) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'system',
        content: `You are a ${language} language expert. Analyze the text and provide corrections with explanations in JSON format: {"corrections": [{"original": "text", "corrected": "text", "explanation": "reason"}]}`
      }, {
        role: 'user',
        content: text
      }],
      temperature: 0.3
    });

    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    console.error('OpenAI Correction Error:', error);
    throw new Error('Failed to correct text');
  }
};

exports.translateText = async (text, targetLanguage) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'system',
        content: `Translate the following text to ${targetLanguage}. Provide only the translation.`
      }, {
        role: 'user',
        content: text
      }],
      temperature: 0.3
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI Translation Error:', error);
    throw new Error('Failed to translate text');
  }
};

exports.generateLessonContent = async (topic, level, language) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'system',
        content: `Generate a ${level} level ${language} lesson about "${topic}". Include vocabulary, grammar points, and practice exercises in JSON format.`
      }],
      temperature: 0.7,
      max_tokens: 1500
    });

    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    console.error('OpenAI Lesson Generation Error:', error);
    throw new Error('Failed to generate lesson content');
  }
};
