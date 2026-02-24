const fs = require('fs').promises;
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');

const execFileAsync = promisify(execFile);

// Text-to-Speech using espeak (Free, Offline)
exports.textToSpeech = async (text, languageCode = 'en') => {
  try {
    // Map language codes
    const languageMap = {
      'en': 'en',
      'es': 'es',
      'fr': 'fr',
      'de': 'de',
      'hi': 'hi',
      'ja': 'ja',
      'zh': 'zh',
      'ar': 'ar'
    };

    const lang = languageMap[languageCode] || 'en';
    const audioFileName = `speech_${Date.now()}.wav`;
    const audioDir = path.join(__dirname, '../uploads/audio');
    
    // Create directory if it doesn't exist
    await fs.mkdir(audioDir, { recursive: true });
    
    const audioPath = path.join(audioDir, audioFileName);

    // Use espeak to generate speech
    await execFileAsync('espeak', [
      '-v', lang,
      '-w', audioPath,
      text
    ]);

    return `/audio/${audioFileName}`;
  } catch (error) {
    console.error('Text-to-Speech Error:', error.message);
    throw new Error('Failed to generate speech');
  }
};

// Speech-to-Text using Web Speech API (Client-side, no backend needed)
exports.speechToText = async (audioBuffer, languageCode = 'en-US') => {
  try {
    // Note: This is handled on frontend with Web Speech API
    // Backend just returns instruction for client-side implementation
    return {
      message: 'Use Web Speech API on client side',
      instruction: 'navigator.mediaDevices.getUserMedia() + SpeechRecognition API'
    };
  } catch (error) {
    console.error('Speech-to-Text Error:', error.message);
    throw new Error('Failed to process speech');
  }
};