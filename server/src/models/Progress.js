const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // lessonKey is a string like "es-beg", "fr-int" — matches static lesson data IDs
  lessonKey: { type: String, required: true },
  lessonTitle: { type: String, default: '' },
  lessonLanguage: { type: String, default: '' },
  lessonLevel: { type: String, default: '' },
  status: { type: String, enum: ['not-started', 'in-progress', 'completed'], default: 'not-started' },
  progress: { type: Number, default: 0, min: 0, max: 100 },
  score: { type: Number, default: 0 },
  totalPoints: { type: Number, default: 0 },
  timeSpent: { type: Number, default: 0 },
  attempts: { type: Number, default: 0 },
  lastAccessed: { type: Date, default: Date.now }
}, { timestamps: true });

progressSchema.index({ user: 1, lessonKey: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
