import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, Mic, Brain, Zap, CheckCircle, Star, Volume2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const Premium = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Redirect to login if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Please log in to view Premium</h2>
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigate('/auth')}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
            Go to Login
          </motion.button>
        </div>
      </div>
    );
  }
  const [error, setError] = useState(null);

  const features = [
    { icon: Mic, title: 'Voice-to-Voice AI Conversations', description: 'Have real conversations with AI in your target language — speak and hear responses aloud.' },
    { icon: Brain, title: 'Advanced AI Tutor', description: 'Personalized feedback, pronunciation correction, and adaptive learning paths.' },
    { icon: Volume2, title: 'AI Speech Recognition', description: 'Accurate multilingual speech-to-text powered by advanced models.' },
    { icon: Zap, title: 'Unlimited Practice Sessions', description: 'No limits on chat sessions, quizzes, or lesson replays.' },
    { icon: Star, title: 'Priority Support', description: 'Get help faster with premium member priority support.' },
  ];

  const handlePayment = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);

    try {
      // Load Razorpay script
      if (!window.Razorpay) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      // Create order
      const orderRes = await api.post('/payment/create-order');
      const order = orderRes.data.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'PathShala',
        description: 'Premium Membership',
        order_id: order.id,
        handler: async (response) => {
          try {
            const verifyRes = await api.post('/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            // Update user context
            setUser(verifyRes.data.data);
            alert('🎉 Welcome to Premium! You now have access to all exclusive features.');
          } catch (err) {
            setError('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
        },
        theme: { color: '#7c3aed' },
        modal: {
          ondismiss: () => setLoading(false)
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to initiate payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (user?.isPremium) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', duration: 0.6 }}>
            <div className="w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Crown size={56} className="text-white" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">You're Already Premium! 👑</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              You have full access to all premium features including voice conversations.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Premium since: {user.premiumSince ? new Date(user.premiumSince).toLocaleDateString() : 'Active'}
            </p>
            <motion.a
              href="/chat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Start Voice Conversation →
            </motion.a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-sm font-semibold mb-6">
            <Crown size={16} />
            PathShala Premium
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Unlock Your Full<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Language Potential</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get access to AI voice conversations, advanced tutoring, and unlimited practice — everything you need to become fluent.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden mb-10 border border-purple-100 dark:border-purple-900"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Crown size={24} />
              <span className="text-lg font-semibold">Premium Membership</span>
            </div>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-2xl font-bold">₹</span>
              <span className="text-6xl font-extrabold">499</span>
              <span className="text-xl text-purple-200 mb-2">/year</span>
            </div>
            <p className="text-purple-200">One-time annual payment · No hidden fees</p>
          </div>

          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{feature.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </div>
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-1 ml-auto" />
                </motion.li>
              ))}
            </ul>

            {error && (
              <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-sm">
                {error}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePayment}
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
            >
              <Crown size={22} />
              {loading ? 'Processing...' : 'Upgrade to Premium — ₹499/year'}
            </motion.button>

            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
              Secured by Razorpay · SSL Encrypted · Instant Activation
            </p>
          </div>
        </motion.div>

        {/* Compare */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Free vs Premium</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-gray-500 dark:text-gray-400 font-medium pb-4">Feature</th>
                  <th className="text-center text-gray-500 dark:text-gray-400 font-medium pb-4">Free</th>
                  <th className="text-center text-purple-600 dark:text-purple-400 font-bold pb-4">👑 Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  ['Language Lessons', '✅', '✅'],
                  ['Gamified Quizzes', '✅', '✅'],
                  ['AI Text Chat', '✅', '✅'],
                  ['Language Translator', '✅', '✅'],
                  ['Speech-to-Text (basic)', '✅', '✅'],
                  ['Voice-to-Voice AI Conversations', '❌', '✅'],
                  ['Advanced AI Pronunciation Feedback', '❌', '✅'],
                  ['Unlimited Chat Sessions', '❌', '✅'],
                  ['Priority Support', '❌', '✅'],
                ].map(([feature, free, premium], i) => (
                  <tr key={i}>
                    <td className="py-3 text-gray-700 dark:text-gray-300 text-sm">{feature}</td>
                    <td className="py-3 text-center text-lg">{free}</td>
                    <td className="py-3 text-center text-lg">{premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Premium;
