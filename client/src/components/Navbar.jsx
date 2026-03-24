import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, User, LogOut, Languages, Crown, Loader2, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const TRANSLATE_LANGUAGES = [
  { code: 'es', name: 'Spanish' }, { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' }, { code: 'hi', name: 'Hindi' },
  { code: 'ja', name: 'Japanese' }, { code: 'zh', name: 'Chinese' },
  { code: 'ar', name: 'Arabic' }, { code: 'en', name: 'English' },
  { code: 'pt', name: 'Portuguese' }, { code: 'ru', name: 'Russian' },
];

const TranslatorPanel = ({ onClose }) => {
  const [inputText, setInputText] = useState('');
  const [targetLang, setTargetLang] = useState('es');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
    };
    setTimeout(() => document.addEventListener('mousedown', handleClick), 0);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=en|${targetLang}`);
      const data = await res.json();
      setResult({ translatedText: data.responseData?.translatedText || 'No translation found.' });
    } catch {
      setError('Translation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const langName = TRANSLATE_LANGUAGES.find(l => l.code === targetLang)?.name || targetLang;

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className="absolute right-0 top-12 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 z-50 overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Languages size={18} className="text-white" />
          <span className="text-white font-semibold text-sm">Language Translator</span>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white"><X size={16} /></button>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Translate to</label>
          <select value={targetLang} onChange={e => setTargetLang(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-purple-400 outline-none">
            {TRANSLATE_LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Enter text (English)</label>
          <textarea value={inputText} onChange={e => setInputText(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleTranslate(); }}}
            placeholder="Type a word, phrase, or sentence..." rows={3}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm resize-none focus:ring-2 focus:ring-purple-400 outline-none" />
        </div>
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleTranslate}
          disabled={loading || !inputText.trim()}
          className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {loading ? <><Loader2 size={14} className="animate-spin" /> Translating...</> : `Translate to ${langName}`}
        </motion.button>
        {error && <p className="text-xs text-red-500">{error}</p>}
        {result && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
              <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1">Translation in {langName}</p>
              <p className="text-gray-900 dark:text-white font-medium">{result.translatedText}</p>
            </div>
            <p className="text-xs text-gray-400 text-center">Powered by MyMemory API (Free)</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTranslator, setShowTranslator] = useState(false);
  const location = useLocation();
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard', protected: true },
    { name: 'Lessons', path: '/lessons', protected: true },
    { name: 'Chat', path: '/chat', protected: true },
    { name: 'Contact', path: '/contact' }
  ];

  const visibleNavItems = navItems.filter(item => !item.protected || user);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                पाठshala
              </motion.div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {visibleNavItems.map((item) => (
              <Link key={item.name} to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Translator */}
            <div className="relative">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => { setShowTranslator(!showTranslator); setShowUserMenu(false); }}
                title="Language Translator"
                className={`p-2 rounded-lg transition-colors flex items-center gap-1 ${
                  showTranslator
                    ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400'
                }`}>
                <Languages size={20} />
                <span className="text-xs font-medium hidden sm:block">Translate</span>
              </motion.button>
              <AnimatePresence>
                {showTranslator && <TranslatorPanel onClose={() => setShowTranslator(false)} />}
              </AnimatePresence>
            </div>

            {/* Theme */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* User */}
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <motion.button whileHover={{ scale: 1.03 }}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                  {user.isPremium && <Crown size={14} className="text-yellow-300 flex-shrink-0" />}
                  <User size={16} />
                  <span className="text-sm">{user.firstName}</span>
                  <ChevronDown size={13} />
                </motion.button>
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                      className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50">
                      {user.isPremium && (
                        <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700 mb-1">
                          <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                            <Crown size={14} />
                            <span className="text-xs font-bold uppercase tracking-wide">Premium Member</span>
                          </div>
                        </div>
                      )}
                      <Link to="/profile" onClick={() => setShowUserMenu(false)}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                        Profile
                      </Link>
                      {!user.isPremium && (
                        <Link to="/premium" onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 font-medium">
                          <Crown size={14} /> Upgrade to Premium
                        </Link>
                      )}
                      <button onClick={() => { logout(); setShowUserMenu(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                        <LogOut size={16} /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/auth">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  Login
                </motion.button>
              </Link>
            )}

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {visibleNavItems.map((item) => (
                <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                  {item.name}
                </Link>
              ))}
              {user && !user.isPremium && (
                <Link to="/premium" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 text-yellow-600 font-medium">
                  <Crown size={16} /> Upgrade to Premium
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
