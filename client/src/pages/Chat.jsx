import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, MicOff, Volume2, Bot, User, AlertCircle, Crown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { chatService } from '../services/chatService';
import { useAuth } from '../context/AuthContext';

const Chat = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}`);
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');
  const [error, setError] = useState(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false); // voice-to-voice mode (premium)
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const langCodeMap = {
    Spanish: 'es-ES', French: 'fr-FR', German: 'de-DE',
    Hindi: 'hi-IN', Japanese: 'ja-JP', Chinese: 'zh-CN', Arabic: 'ar-SA'
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    setMessages([{
      id: 1,
      text: `Hello! I'm your AI language tutor. Let's practice ${selectedLanguage} together! Ask me anything or start a conversation.`,
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString()
    }]);
  }, [selectedLanguage]);

  const handleSendMessage = async (text) => {
    const msgText = text || inputText;
    if (!msgText.trim()) return;

    const userMessage = { id: Date.now(), text: msgText, sender: 'user', timestamp: new Date().toLocaleTimeString() };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setError(null);

    try {
      const response = await chatService.sendMessage(msgText, sessionId, selectedLanguage);
      const aiMsg = response.data.data.aiMessage.message;
      const aiMessage = { id: Date.now() + 1, text: aiMsg, sender: 'ai', timestamp: new Date().toLocaleTimeString() };
      setMessages(prev => [...prev, aiMessage]);

      // If voice mode is enabled (premium), speak the response
      if (voiceMode && user?.isPremium) {
        speakText(aiMsg);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to get AI response. Make sure Ollama is running.');
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); }
  };

  // Basic speech-to-text (available to all)
  const toggleRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError('Speech recognition is not supported in your browser. Try Chrome.');
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
      setInputText(transcript);
      setIsRecording(false);
    };
    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsRecording(false);
    };
    recognition.onend = () => setIsRecording(false);
    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  };

  // Voice-to-voice mode: premium only — records and sends directly
  const toggleVoiceMode = () => {
    if (!user?.isPremium) {
      setShowPremiumModal(true);
      return;
    }
    setVoiceMode(!voiceMode);
  };

  // Voice-to-voice recording: record → send → speak response
  const startVoiceConversation = () => {
    if (!user?.isPremium) { setShowPremiumModal(true); return; }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) { setError('Speech recognition not supported. Try Chrome.'); return; }
    if (isRecording) { recognitionRef.current?.stop(); setIsRecording(false); return; }

    const recognition = new SpeechRecognition();
    recognition.lang = langCodeMap[selectedLanguage] || 'en-US';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setIsRecording(false);
      handleSendMessage(transcript); // auto-send
    };
    recognition.onerror = (e) => { setError(`Voice error: ${e.error}`); setIsRecording(false); };
    recognition.onend = () => setIsRecording(false);
    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCodeMap[selectedLanguage] || 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">AI Conversation Practice</h1>
          <p className="text-gray-600 dark:text-gray-300">Practice your language skills with our intelligent AI tutor</p>
        </motion.div>

        {/* Premium voice mode banner */}
        {!user?.isPremium && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown size={20} className="text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">Unlock Voice-to-Voice AI Conversations</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400">Speak naturally and hear AI responses — Premium feature</p>
              </div>
            </div>
            <Link to="/premium">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-lg font-semibold flex items-center gap-1 whitespace-nowrap">
                <Crown size={14} /> Upgrade
              </motion.button>
            </Link>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold text-gray-900 dark:text-white">Practicing Language</h2>
              {voiceMode && user?.isPremium && (
                <span className="flex items-center gap-1 text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                  <Crown size={11} /> Voice Mode ON
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {user?.isPremium && (
                <motion.button whileHover={{ scale: 1.03 }} onClick={toggleVoiceMode}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    voiceMode
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200'
                  }`}>
                  <Crown size={13} /> {voiceMode ? 'Voice Mode ON' : 'Enable Voice Mode'}
                </motion.button>
              )}
              <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
                {Object.keys(langCodeMap).map(lang => <option key={lang}>{lang}</option>)}
              </select>
            </div>
          </div>

          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="p-4 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800 flex items-start space-x-3">
              <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </motion.div>
          )}

          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <motion.div key={message.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'}`}>
                    {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`rounded-lg p-3 ${message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'}`}>
                    <p className="text-sm">{message.text}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs ${message.sender === 'user' ? 'text-purple-200' : 'text-gray-500 dark:text-gray-400'}`}>
                        {message.timestamp}
                      </span>
                      {message.sender === 'ai' && (
                        <button onClick={() => speakText(message.text)} className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                          <Volume2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex space-x-1">
                      {[0, 0.1, 0.2].map((delay, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t dark:border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              {/* Basic mic: speech to text (all users) */}
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={voiceMode && user?.isPremium ? startVoiceConversation : toggleRecording}
                title={
                  voiceMode && user?.isPremium
                    ? isRecording ? 'Stop speaking' : 'Speak (voice mode — auto sends)'
                    : isRecording ? 'Stop recording' : `Speak in ${selectedLanguage} (speech-to-text)`
                }
                className={`p-3 rounded-full transition-colors flex-shrink-0 ${
                  isRecording
                    ? 'bg-red-500 text-white animate-pulse'
                    : voiceMode && user?.isPremium
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}>
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
              </motion.button>

              <div className="flex-1">
                <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyPress={handleKeyPress}
                  placeholder={isRecording ? 'Listening...' : voiceMode && user?.isPremium ? 'Voice mode ON — click mic to speak, or type...' : 'Type your message or click mic to speak...'}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  rows="1" />
              </div>

              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleSendMessage()}
                disabled={!inputText.trim() || isTyping}
                className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0">
                <Send size={20} />
              </motion.button>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
              {voiceMode && user?.isPremium
                ? '🎤 Voice Mode — click mic to speak, AI will respond aloud · Click 🔊 to replay'
                : 'Press Enter to send · Click 🎤 for speech-to-text · Click 🔊 on AI messages to hear them'
              }
            </div>
          </div>
        </motion.div>
      </div>

      {/* Premium Upsell Modal */}
      <AnimatePresence>
        {showPremiumModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPremiumModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
              <button onClick={() => setShowPremiumModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X size={20} /></button>
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <Crown size={40} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Premium Feature</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Voice-to-voice AI conversations are available exclusively for Premium members. Speak naturally and hear AI responses in real-time!
              </p>
              <div className="space-y-3">
                <Link to="/premium" onClick={() => setShowPremiumModal(false)}>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:opacity-90">
                    Upgrade to Premium — ₹499/year
                  </motion.button>
                </Link>
                <button onClick={() => setShowPremiumModal(false)}
                  className="w-full py-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
                  Maybe later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chat;
