import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, MicOff, Volume2, VolumeX, Bot, User, AlertCircle, Crown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { chatService } from '../services/chatService';
import { useAuth } from '../context/AuthContext';

const Chat = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}`);
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');
  const [error, setError] = useState(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);

  const langCodeMap = {
    Spanish: 'es-ES', French: 'fr-FR', German: 'de-DE',
    Hindi: 'hi-IN', Japanese: 'ja-JP', Chinese: 'zh-CN', Arabic: 'ar-SA'
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Reset chat when language changes
  useEffect(() => {
    setMessages([{
      id: 1,
      text: getWelcomeMessage(selectedLanguage),
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString()
    }]);
    setError(null);
  }, [selectedLanguage]);

  // Stop any ongoing speech when unmounting
  useEffect(() => {
    return () => { synthRef.current?.cancel(); };
  }, []);

  const getWelcomeMessage = (lang) => {
    const welcomes = {
      Spanish:  'Hola! 👋 I\'m your PathShala AI tutor. Let\'s practice Spanish together! "Hola" (Oh-lah) means Hello. Type anything in English or try saying something in Spanish!',
      French:   'Bonjour! 👋 I\'m your PathShala AI tutor. Let\'s practice French! "Bonjour" (Bon-zhoor) means Hello/Good morning. Try typing something!',
      German:   'Hallo! 👋 I\'m your PathShala AI tutor. Let\'s practice German! "Hallo" (Hah-loh) means Hello. Type anything to get started!',
      Hindi:    'नमस्ते (Namaste)! 👋 I\'m your PathShala AI tutor. Let\'s practice Hindi! "नमस्ते" (Namaste) means Hello/Greetings. Type anything to begin!',
      Japanese: 'こんにちは (Konnichiwa)! 👋 I\'m your PathShala AI tutor. Let\'s practice Japanese! "こんにちは" (Konnichiwa) means Hello. Type anything to start!',
      Chinese:  '你好 (Nǐ hǎo)! 👋 I\'m your PathShala AI tutor. Let\'s practice Mandarin! "你好" (Nǐ hǎo) means Hello. Type anything to begin!',
      Arabic:   'مرحبا (Marhaba)! 👋 I\'m your PathShala AI tutor. Let\'s practice Arabic! "مرحبا" (Marhaba) means Hello. Type anything to start!',
    };
    return welcomes[lang] || `Hello! Let's practice ${lang} together. Type anything to get started!`;
  };

  const handleSendMessage = async (text) => {
    const msgText = (text || inputText).trim();
    if (!msgText) return;

    const userMessage = {
      id: Date.now(), text: msgText, sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setError(null);
    synthRef.current?.cancel(); // stop any current speech

    try {
      const response = await chatService.sendMessage(msgText, sessionId, selectedLanguage);
      const aiText = response.data.data.aiMessage.message;

      const aiMessage = {
        id: Date.now() + 1, text: aiText, sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiMessage]);

      // Voice mode — auto-speak AI reply (premium only)
      if (voiceMode && user?.isPremium) {
        speakText(aiText, true);
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to get AI response.';
      setError(msg);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); }
  };

  // Speak text using browser TTS
  const speakText = (text, autoMode = false) => {
    if (!window.speechSynthesis) return;
    synthRef.current.cancel();

    // Strip emojis and markdown for cleaner TTS
    const cleanText = text.replace(/[^\w\s\u00C0-\u024F\u0600-\u06FF\u0900-\u097F\u3040-\u30FF\u4E00-\u9FFF\u3400-\u4DBF.,!?;:()\-'"]/g, ' ');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langCodeMap[selectedLanguage] || 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      // In voice mode, after AI finishes speaking, auto-start listening again
      if (autoMode && voiceMode && user?.isPremium) {
        setTimeout(() => startListening(true), 500);
      }
    };
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    synthRef.current?.cancel();
    setIsSpeaking(false);
  };

  // Start speech recognition
  const startListening = (autoSend = false) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError('Speech recognition is not supported in your browser. Please use Chrome.');
      return;
    }
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = langCodeMap[selectedLanguage] || 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setIsRecording(false);
      if (autoSend) {
        // Voice mode: auto-send without putting in text box
        handleSendMessage(transcript);
      } else {
        setInputText(transcript);
      }
    };

    recognition.onerror = (e) => {
      if (e.error !== 'no-speech') setError(`Speech error: ${e.error}. Try Chrome.`);
      setIsRecording(false);
    };

    recognition.onend = () => setIsRecording(false);

    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  };

  // Toggle voice-to-voice mode (premium only)
  const toggleVoiceMode = () => {
    if (!user?.isPremium) { setShowPremiumModal(true); return; }
    const next = !voiceMode;
    setVoiceMode(next);
    if (!next) {
      synthRef.current?.cancel();
      recognitionRef.current?.stop();
      setIsRecording(false);
      setIsSpeaking(false);
    }
  };

  // Mic button handler — behavior differs based on mode
  const handleMicClick = () => {
    if (voiceMode && user?.isPremium) {
      // Voice mode: stop any speaking, start listening, auto-send
      synthRef.current?.cancel();
      setIsSpeaking(false);
      startListening(true);
    } else {
      // Normal mode: speech-to-text into input box
      startListening(false);
    }
  };

  const micTitle = isRecording
    ? 'Stop listening'
    : voiceMode && user?.isPremium
    ? `Speak in ${selectedLanguage} (voice mode — auto sends)`
    : `Speak in ${selectedLanguage} (speech-to-text)`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">AI Conversation Practice</h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Chat with your AI tutor — it responds in {selectedLanguage} with pronunciation help!
          </p>
        </motion.div>

        {/* Premium voice banner (for non-premium users) */}
        {!user?.isPremium && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mb-5 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Crown size={20} className="text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">Unlock Voice-to-Voice AI Conversations</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400">Speak → AI responds → AI speaks back → you speak again. Premium only.</p>
              </div>
            </div>
            <Link to="/premium" className="flex-shrink-0">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-lg font-semibold flex items-center gap-1">
                <Crown size={14} /> Upgrade
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Chat card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">

          {/* Chat header */}
          <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold text-gray-900 dark:text-white text-sm">
                  AI Tutor — {selectedLanguage}
                </span>
              </div>
              {voiceMode && user?.isPremium && (
                <span className="flex items-center gap-1 text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold">
                  <Crown size={11} /> Voice Mode ON
                </span>
              )}
              {isSpeaking && (
                <span className="flex items-center gap-1 text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold animate-pulse">
                  🔊 Speaking...
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Voice mode toggle (premium) */}
              {user?.isPremium && (
                <motion.button whileHover={{ scale: 1.03 }} onClick={toggleVoiceMode}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    voiceMode
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200'
                  }`}>
                  <Crown size={12} /> {voiceMode ? 'Voice ON' : 'Voice Mode'}
                </motion.button>
              )}

              {/* Language selector */}
              <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
                {Object.keys(langCodeMap).map(lang => <option key={lang}>{lang}</option>)}
              </select>
            </div>
          </div>

          {/* Error banner */}
          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="px-4 py-3 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800 flex items-start gap-3">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                {error.includes('API key') && (
                  <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                    Make sure OPENAI_API_KEY is set correctly in <code>server/.env</code>
                  </p>
                )}
              </div>
              <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600 flex-shrink-0">
                <X size={16} />
              </button>
            </motion.div>
          )}

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-5 space-y-4 bg-gray-50/50 dark:bg-gray-800/50">
            {messages.map((message) => (
              <motion.div key={message.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${message.sender === 'user' ? 'bg-purple-600' : 'bg-gradient-to-br from-blue-500 to-indigo-600'}`}>
                    {message.sender === 'user' ? <User size={15} /> : <Bot size={15} />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${message.sender === 'user' ? 'bg-purple-600 text-white rounded-tr-sm' : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm rounded-tl-sm'}`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <div className="flex items-center justify-between mt-1.5 gap-3">
                      <span className={`text-xs ${message.sender === 'user' ? 'text-purple-200' : 'text-gray-400 dark:text-gray-500'}`}>
                        {message.timestamp}
                      </span>
                      {message.sender === 'ai' && (
                        <button
                          onClick={() => isSpeaking ? stopSpeaking() : speakText(message.text)}
                          title={isSpeaking ? 'Stop speaking' : 'Listen to this message'}
                          className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"
                        >
                          {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                    <Bot size={15} />
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex space-x-1 items-center h-4">
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
            <div className="flex items-end gap-3">
              {/* Mic button */}
              <motion.button
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                onClick={handleMicClick}
                title={micTitle}
                className={`p-3 rounded-full transition-colors flex-shrink-0 ${
                  isRecording
                    ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-200'
                    : voiceMode && user?.isPremium
                    ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}>
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
              </motion.button>

              {/* Text input */}
              <div className="flex-1">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    isRecording ? '🎤 Listening... speak now'
                    : voiceMode && user?.isPremium ? 'Voice mode on — click mic or type here...'
                    : `Message your ${selectedLanguage} AI tutor...`
                  }
                  rows={1}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white resize-none outline-none transition-all text-sm"
                  style={{ minHeight: '46px', maxHeight: '120px' }}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                  }}
                />
              </div>

              {/* Send button */}
              <motion.button
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim() || isTyping}
                className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 shadow-md"
              >
                <Send size={20} />
              </motion.button>
            </div>

            {/* Hint bar */}
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
              {voiceMode && user?.isPremium
                ? '🎤 Tap mic → speak → AI responds aloud → tap mic again to reply'
                : 'Enter to send · Mic for speech-to-text · 🔊 on AI messages to hear them'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Premium upsell modal */}
      <AnimatePresence>
        {showPremiumModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPremiumModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
              <button onClick={() => setShowPremiumModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <X size={20} />
              </button>
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <Crown size={40} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Premium Feature</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Voice-to-voice AI conversations are a Premium feature. You speak, the AI responds in {selectedLanguage} — and speaks the answer back to you in real time!
              </p>
              <Link to="/premium" onClick={() => setShowPremiumModal(false)}>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:opacity-90 flex items-center justify-center gap-2">
                  <Crown size={18} /> Upgrade to Premium — ₹499/year
                </motion.button>
              </Link>
              <button onClick={() => setShowPremiumModal(false)} className="mt-3 text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                Maybe later
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chat;
