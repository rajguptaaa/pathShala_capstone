const textToSpeech = require('@google-cloud/text-to-speech');
const speech = require('@google-cloud/speech');
const fs = require('fs').promises;
const path = require('path');

const ttsClient = new textToSpeech.TextToSpeechClient();
const sttClient = new speech.SpeechClient();

exports.textToSpeech = async (text, languageCode = 'en-US') => {
  try {
    const request = {
      input: { text },
      voice: { languageCode, ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' }
    };

    const [response] = await ttsClient.synthesizeSpeech(request);
    const audioFileName = `speech_${Date.now()}.mp3`;
    const audioPath = path.join(__dirname, '../uploads/audio', audioFileName);
    
    await fs.writeFile(audioPath, response.audioContent, 'binary');
    return `/audio/${audioFileName}`;
  } catch (error) {
    console.error('Text-to-Speech Error:', error);
    throw new Error('Failed to convert text to speech');
  }
};

exports.speechToText = async (audioBuffer, languageCode = 'en-US') => {
  try {
    const audio = {
      content: audioBuffer.toString('base64')
    };

    const config = {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode
    };

    const request = { audio, config };
    const [response] = await sttClient.recognize(request);
    
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');

    return transcription;
  } catch (error) {
    console.error('Speech-to-Text Error:', error);
    throw new Error('Failed to convert speech to text');
  }
};
