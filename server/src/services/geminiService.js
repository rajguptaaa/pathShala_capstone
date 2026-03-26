const axios = require('axios');

const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || '').trim();

// Use model from .env or default — do NOT encodeURIComponent the model name
const GEMINI_MODEL = (process.env.GEMINI_MODEL || '').trim() || 'gemini-2.5-flash';

// Build URL without encoding the model name (hyphens must stay as hyphens)
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

const buildSystemPrompt = (language) => {
  const langDetails = {
    Spanish:  { script: 'Latin',       example: '"Hola" (Oh-lah) = Hello | "Gracias" (Grah-syahs) = Thank you' },
    French:   { script: 'Latin',       example: '"Bonjour" (Bon-zhoor) = Hello | "Merci" (Mehr-see) = Thank you' },
    German:   { script: 'Latin',       example: '"Hallo" (Hah-loh) = Hello | "Danke" (Dahn-keh) = Thank you' },
    Hindi:    { script: 'Devanagari',  example: '"नमस्ते" (Namaste) = Hello | "धन्यवाद" (Dhanyavaad) = Thank you' },
    Japanese: { script: 'Japanese',    example: '"こんにちは" (Konnichiwa) = Hello | "ありがとう" (Arigatou) = Thank you' },
    Chinese:  { script: 'Chinese',     example: '"你好" (Nǐ hǎo) = Hello | "谢谢" (Xièxiè) = Thank you' },
    Arabic:   { script: 'Arabic',      example: '"مرحبا" (Marhaba) = Hello | "شكرا" (Shukran) = Thank you' },
  };
  const lang = langDetails[language] || { script: 'native script', example: '' };

  return `You are PathShala, a friendly AI language tutor helping a student learn ${language}.

STRICT RESPONSE FORMAT — follow for every reply:
1. For non-Latin scripts (Hindi/Japanese/Chinese/Arabic): always write the word in native ${lang.script} script THEN romanization in brackets THEN English meaning.
   Format: नमस्ते (Namaste) = Hello
2. For Latin-script languages (Spanish/French/German): write the word then English meaning.
   Format: "Hola" = Hello
3. Keep responses SHORT — 3 to 5 sentences only. Never write long paragraphs.
4. Always end with ONE short practice question or phrase for the student to try.
5. Be warm, encouraging, and fun.

EXAMPLES for ${language}:
${lang.example}

TEACHING RULES:
- Student is learning ${language}. Weave ${language} words into your replies naturally.
- If student writes in English, respond with ${language} words with romanization + meaning.
- If student tries ${language} (even badly), praise the effort, gently correct mistakes.
- Teach through conversation, not lectures.`;
};

const callGemini = async (contents, systemPrompt = null, temperature = 0.75, maxOutputTokens = 350) => {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY missing in server/.env');
  }

  const payload = {
    contents,
    generationConfig: { temperature, maxOutputTokens, topP: 0.9 },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
    ],
  };

  if (systemPrompt) {
    payload.system_instruction = { parts: [{ text: systemPrompt }] };
  }

  console.log('[Gemini] Calling model:', GEMINI_MODEL);

  let resp;
  try {
    resp = await axios.post(GEMINI_URL, payload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 30000,
    });
  } catch (error) {
    const status = error.response?.status;
    const geminiMsg = error.response?.data?.error?.message || error.message;
    console.error('[Gemini] HTTP error:', status, geminiMsg);

    if (status === 400) throw new Error(`Gemini bad request: ${geminiMsg}`);
    if (status === 401 || status === 403) throw new Error(`Gemini auth failed (${status}): ${geminiMsg}`);
    if (status === 404) throw new Error(`Gemini model not found: "${GEMINI_MODEL}" — check GEMINI_MODEL in .env`);
    if (status === 429) throw new Error(`Gemini rate limit hit — please wait and try again`);
    if (error.code === 'ECONNABORTED') throw new Error('Gemini request timed out');
    throw new Error(`Gemini request failed (${status || error.code}): ${geminiMsg}`);
  }

  const text = resp.data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    const reason = resp.data?.candidates?.[0]?.finishReason || 'unknown';
    console.error('[Gemini] Empty response, finishReason:', reason, JSON.stringify(resp.data));
    throw new Error(`Gemini returned empty response (finishReason: ${reason})`);
  }
  return text;
};

exports.generateChatResponse = async (message, language, conversationHistory = []) => {
  const contents = [];
  const recentHistory = conversationHistory.slice(-16);
  for (const msg of recentHistory) {
    contents.push({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    });
  }
  contents.push({ role: 'user', parts: [{ text: message }] });
  return await callGemini(contents, buildSystemPrompt(language), 0.75, 350);
};

exports.correctText = async (text, language) => {
  const contents = [{
    role: 'user',
    parts: [{ text: `Correct this ${language} text and explain what was wrong. Show: Corrected version (with native script + romanization if needed), Issues found, One grammar tip.\n\nText: "${text}"` }],
  }];
  return await callGemini(contents, null, 0.3, 300);
};

exports.translateText = async (text, targetLanguage) => {
  const contents = [{
    role: 'user',
    parts: [{ text: `Translate to ${targetLanguage}. If non-Latin script, show: native script (romanization) = English meaning. Only give the translation, no extra text.\n\nText: "${text}"` }],
  }];
  return await callGemini(contents, null, 0.2, 200);
};

exports.generateLessonContent = async (topic, level, language) => {
  const contents = [{
    role: 'user',
    parts: [{ text: `Create a ${level} ${language} lesson on "${topic}". Return JSON only (no markdown backticks): { "vocabulary": [{"word":"","romanization":"","meaning":""}], "grammar": [{"rule":"","example":""}], "sentences": [] }` }],
  }];
  const raw = await callGemini(contents, null, 0.6, 800);
  try {
    return JSON.parse(raw.replace(/```json|```/g, '').trim());
  } catch {
    return { raw };
  }
};
