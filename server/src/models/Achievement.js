const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'award' },
  category: { type: String, enum: ['lessons', 'streak', 'practice', 'mastery'], required: true },
  requirement: { type: Number, required: true },
  points: { type: Number, default: 10 }
}, { timestamps: true });

module.exports = mongoose.model('Achievement', achievementSchema);
