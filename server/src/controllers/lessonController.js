const Lesson = require('../models/Lesson');
const Progress = require('../models/Progress');

exports.getAllLessons = async (req, res, next) => {
  try {
    const { level, language } = req.query;
    const filter = { isPublished: true };
    
    if (level) filter.level = level;
    if (language) filter.language = language;

    const lessons = await Lesson.find(filter).sort({ order: 1 });
    
    const lessonsWithProgress = await Promise.all(lessons.map(async (lesson) => {
      const progress = await Progress.findOne({ user: req.user.id, lesson: lesson._id });
      return {
        ...lesson.toObject(),
        completed: progress?.status === 'completed',
        progress: progress?.progress || 0,
        locked: false // Implement logic based on prerequisites
      };
    }));

    res.status(200).json({ success: true, data: lessonsWithProgress });
  } catch (error) {
    next(error);
  }
};

exports.getLessonById = async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id).populate('prerequisites');
    
    if (!lesson) {
      return res.status(404).json({ success: false, message: 'Lesson not found' });
    }

    const progress = await Progress.findOne({ user: req.user.id, lesson: lesson._id });

    res.status(200).json({ 
      success: true, 
      data: { 
        ...lesson.toObject(), 
        userProgress: progress 
      } 
    });
  } catch (error) {
    next(error);
  }
};

exports.createLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json({ success: true, data: lesson });
  } catch (error) {
    next(error);
  }
};

exports.updateLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!lesson) {
      return res.status(404).json({ success: false, message: 'Lesson not found' });
    }

    res.status(200).json({ success: true, data: lesson });
  } catch (error) {
    next(error);
  }
};

exports.rateLesson = async (req, res, next) => {
  try {
    const { rating } = req.body;
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({ success: false, message: 'Lesson not found' });
    }

    lesson.rating = ((lesson.rating * lesson.totalRatings) + rating) / (lesson.totalRatings + 1);
    lesson.totalRatings += 1;
    await lesson.save();

    res.status(200).json({ success: true, data: lesson });
  } catch (error) {
    next(error);
  }
};
