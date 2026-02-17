const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sessionId: { type: String, required: true },
  sender: { type: String, enum: ['user', 'ai'], required: true },
  message: { type: String, required: true },
  language: { type: String, required: true },
  translation: { type: String },
  audioUrl: { type: String },
  corrections: [{
    original: String,
    corrected: String,
    explanation: String
  }]
}, { timestamps: true });

chatMessageSchema.index({ user: 1, sessionId: 1 });

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
