const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  status: { type: String, enum: ['not-started', 'in-progress', 'completed'], default: 'not-started' },
  progress: { type: Number, default: 0, min: 0, max: 100 },
  score: { type: Number, default: 0 },
  timeSpent: { type: Number, default: 0 },
  completedExercises: [{ type: Number }],
  lastAccessed: { type: Date, default: Date.now }
}, { timestamps: true });

progressSchema.index({ user: 1, lesson: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
