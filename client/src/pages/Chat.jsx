import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mic, MicOff, Volume2, Bot, User, AlertCircle } from 'lucide-react';
import { chatService } from '../services/chatService';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}`);
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setError(null);

    try {
      const response = await chatService.sendMessage(inputText, sessionId, selectedLanguage);
      const aiMessage = {
        id: messages.length + 2,
        text: response.data.data.aiMessage.message,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message');
      console.error('Chat error:', err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement voice recording functionality with Web Speech API
  };

  const speakText = async (text) => {
    try {
      const response = await chatService.textToSpeech(text, 'es');
      // Play audio from response.data.data.audioUrl
      const audio = new Audio(`http://localhost:5000${response.data.data.audioUrl}`);
      audio.play();
    } catch (err) {
      console.error('Text-to-speech error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            AI Conversation Practice
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Practice your language skills with our intelligent AI tutor
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-6"
        >
          <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900 dark:text-white">Language</h2>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Hindi</option>
              <option>Japanese</option>
              <option>Chinese</option>
              <option>Arabic</option>
            </select>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800 flex items-start space-x-3"
            >
              <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </motion.div>
          )}

          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  
                  <div className={`rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs ${
                        message.sender === 'user' 
                          ? 'text-purple-200' 
                          : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {message.timestamp}
                      </span>
                      {message.sender === 'ai' && (
                        <button
                          onClick={() => speakText(message.text)}
                          className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <Volume2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t dark:border-gray-700 p-4">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleRecording}
                className={`p-3 rounded-full transition-colors ${
                  isRecording 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
              </motion.button>
              
              <div className="flex-1 relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message or question..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  rows="1"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </motion.button>
            </div>
            
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
              Press Enter to send, Shift+Enter for new line
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;
