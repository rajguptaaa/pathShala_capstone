const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  language: { type: String, required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  duration: { type: String, required: true },
  content: {
    vocabulary: [{ word: String, translation: String, pronunciation: String }],
    grammar: [{ rule: String, examples: [String] }],
    exercises: [{ 
      type: { type: String, enum: ['multiple-choice', 'fill-blank', 'translation', 'speaking'] },
      question: String,
      options: [String],
      correctAnswer: String,
      points: Number
    }]
  },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  totalRatings: { type: Number, default: 0 },
  prerequisites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  order: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);
