import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Zap, CheckCircle, XCircle, Trophy, ArrowRight, RotateCcw } from 'lucide-react';

const LessonModal = ({ lesson, language, level, onClose }) => {
  const [activeTab, setActiveTab] = useState('vocab');
  const [quizState, setQuizState] = useState({ current: 0, score: 0, answered: null, completed: false, answers: [] });

  const exercises = lesson?.exercises || [];
  const vocabulary = lesson?.vocabulary || [];
  const grammar = lesson?.grammar || [];

  const currentExercise = exercises[quizState.current];

  const handleAnswer = (answer) => {
    if (quizState.answered !== null) return;
    const correct = answer === currentExercise.correctAnswer;
    setQuizState(prev => ({
      ...prev,
      answered: answer,
      score: correct ? prev.score + (currentExercise.points || 10) : prev.score,
      answers: [...prev.answers, { correct, answer, expected: currentExercise.correctAnswer }]
    }));
  };

  const nextQuestion = () => {
    if (quizState.current + 1 >= exercises.length) {
      setQuizState(prev => ({ ...prev, completed: true }));
    } else {
      setQuizState(prev => ({ ...prev, current: prev.current + 1, answered: null }));
    }
  };

  const resetQuiz = () => {
    setQuizState({ current: 0, score: 0, answered: null, completed: false, answers: [] });
  };

  const totalPoints = exercises.reduce((sum, ex) => sum + (ex.points || 10), 0);
  const percentage = totalPoints > 0 ? Math.round((quizState.score / totalPoints) * 100) : 0;

  const getExerciseTypeLabel = (type) => {
    const labels = {
      'multiple-choice': '🎯 Multiple Choice',
      'fill-blank': '✏️ Fill in the Blank',
      'translation': '🌐 Translation',
      'sentence-completion': '📝 Sentence Completion',
    };
    return labels[type] || '❓ Question';
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="text-white" size={20} />
                <span className="text-purple-200 text-sm font-medium">{language} · {level}</span>
              </div>
              <h2 className="text-xl font-bold text-white">{lesson?.title}</h2>
              <p className="text-purple-100 text-sm mt-1">{lesson?.description}</p>
            </div>
            <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors ml-4 flex-shrink-0">
              <X size={22} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b dark:border-gray-700 bg-white dark:bg-gray-900">
            {[
              { id: 'vocab', label: '📚 Vocabulary' },
              { id: 'grammar', label: '📖 Grammar' },
              { id: 'quiz', label: '🎮 Quiz' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); if (tab.id === 'quiz') resetQuiz(); }}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600 dark:text-purple-400 dark:border-purple-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">

            {/* Vocabulary Tab */}
            {activeTab === 'vocab' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Learn these key words and phrases</p>
                {vocabulary.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 dark:text-white text-lg">{item.word}</p>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{item.translation}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 dark:text-gray-500 italic">{item.pronunciation}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Grammar Tab */}
            {activeTab === 'grammar' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">Grammar rules and examples</p>
                {grammar.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                  >
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 border-b border-purple-100 dark:border-purple-800">
                      <p className="text-sm font-semibold text-purple-800 dark:text-purple-300">📌 Rule</p>
                      <p className="text-gray-800 dark:text-gray-200 mt-1">{item.rule}</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Examples</p>
                      <ul className="space-y-1">
                        {item.examples.map((ex, j) => (
                          <li key={j} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">›</span>
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Quiz Tab */}
            {activeTab === 'quiz' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {quizState.completed ? (
                  /* Results Screen */
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: percentage >= 70 ? 'linear-gradient(135deg,#7c3aed,#2563eb)' : 'linear-gradient(135deg,#f59e0b,#ef4444)' }}>
                      <Trophy className="text-white" size={44} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {percentage >= 70 ? '🎉 Great Job!' : '📚 Keep Practicing!'}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                      You scored <span className="font-bold text-purple-600">{quizState.score}</span> out of <span className="font-bold">{totalPoints}</span> points
                    </p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-4 rounded-full"
                        style={{ background: percentage >= 70 ? 'linear-gradient(90deg,#7c3aed,#2563eb)' : 'linear-gradient(90deg,#f59e0b,#ef4444)' }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">{percentage}% accuracy</p>

                    <div className="grid grid-cols-2 gap-3 mb-8 text-left">
                      {quizState.answers.map((ans, i) => (
                        <div key={i} className={`flex items-center gap-2 p-2 rounded-lg text-sm ${ans.correct ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'}`}>
                          {ans.correct ? <CheckCircle size={14} /> : <XCircle size={14} />}
                          <span>Q{i + 1}: {ans.correct ? 'Correct' : `Expected: ${ans.expected}`}</span>
                        </div>
                      ))}
                    </div>

                    <button onClick={resetQuiz} className="flex items-center gap-2 mx-auto px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                      <RotateCcw size={16} />
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  /* Question Screen */
                  <div>
                    {/* Progress bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Question {quizState.current + 1} of {exercises.length}</span>
                      <div className="flex items-center gap-2">
                        <Zap size={14} className="text-yellow-500" />
                        <span className="text-sm font-bold text-yellow-600">{quizState.score} pts</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                      <div
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300"
                        style={{ width: `${((quizState.current) / exercises.length) * 100}%` }}
                      />
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={quizState.current}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25 }}
                      >
                        {/* Type badge */}
                        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 mb-4">
                          {getExerciseTypeLabel(currentExercise?.type)}
                        </span>

                        {/* Question */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 leading-relaxed">
                          {currentExercise?.question}
                        </h3>

                        {/* Options */}
                        <div className="space-y-3">
                          {currentExercise?.options?.map((option, i) => {
                            let btnClass = 'border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:border-purple-400 dark:hover:border-purple-500';
                            if (quizState.answered !== null) {
                              if (option === currentExercise.correctAnswer) {
                                btnClass = 'border-2 border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300';
                              } else if (option === quizState.answered && option !== currentExercise.correctAnswer) {
                                btnClass = 'border-2 border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300';
                              } else {
                                btnClass = 'border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-500';
                              }
                            }
                            return (
                              <motion.button
                                key={i}
                                whileHover={quizState.answered === null ? { scale: 1.02 } : {}}
                                whileTap={quizState.answered === null ? { scale: 0.98 } : {}}
                                onClick={() => handleAnswer(option)}
                                disabled={quizState.answered !== null}
                                className={`w-full text-left p-4 rounded-xl font-medium transition-all ${btnClass} flex items-center justify-between`}
                              >
                                <span>{option}</span>
                                {quizState.answered !== null && option === currentExercise.correctAnswer && <CheckCircle size={18} className="text-green-500 flex-shrink-0" />}
                                {quizState.answered === option && option !== currentExercise.correctAnswer && <XCircle size={18} className="text-red-500 flex-shrink-0" />}
                              </motion.button>
                            );
                          })}
                        </div>

                        {/* Feedback & Next */}
                        {quizState.answered !== null && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                            <div className={`p-4 rounded-xl mb-4 ${quizState.answered === currentExercise.correctAnswer ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'}`}>
                              {quizState.answered === currentExercise.correctAnswer
                                ? `✅ Correct! +${currentExercise.points} points`
                                : `❌ Correct answer: "${currentExercise.correctAnswer}"`
                              }
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={nextQuestion}
                              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                            >
                              {quizState.current + 1 >= exercises.length ? 'See Results' : 'Next Question'}
                              <ArrowRight size={18} />
                            </motion.button>
                          </motion.div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LessonModal;
