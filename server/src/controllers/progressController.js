const Progress = require('../models/Progress');
const User = require('../models/User');
const Lesson = require('../models/Lesson');

exports.getProgress = async (req, res, next) => {
  try {
    const progress = await Progress.find({ user: req.user.id })
      .populate('lesson', 'title language level');

    res.status(200).json({ success: true, data: progress });
  } catch (error) {
    next(error);
  }
};

exports.updateProgress = async (req, res, next) => {
  try {
    const { lessonId, progress, score, timeSpent, completedExercises } = req.body;

    let progressDoc = await Progress.findOne({ user: req.user.id, lesson: lessonId });

    if (!progressDoc) {
      progressDoc = await Progress.create({
        user: req.user.id,
        lesson: lessonId,
        progress,
        score,
        timeSpent,
        completedExercises,
        status: progress >= 100 ? 'completed' : 'in-progress'
      });
    } else {
      progressDoc.progress = progress;
      progressDoc.score = score;
      progressDoc.timeSpent += timeSpent;
      progressDoc.completedExercises = completedExercises;
      progressDoc.status = progress >= 100 ? 'completed' : 'in-progress';
      progressDoc.lastAccessed = Date.now();
      await progressDoc.save();
    }

    if (progressDoc.status === 'completed') {
      const user = await User.findById(req.user.id);
      if (!user.completedLessons.includes(lessonId)) {
        user.completedLessons.push(lessonId);
        user.totalLessonsCompleted += 1;
        user.totalStudyTime += timeSpent;
        await user.save();
      }
    }

    res.status(200).json({ success: true, data: progressDoc });
  } catch (error) {
    next(error);
  }
};

exports.getDashboardStats = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const recentProgress = await Progress.find({ user: req.user.id })
      .sort({ lastAccessed: -1 })
      .limit(5)
      .populate('lesson', 'title level');

    const stats = {
      totalLessons: user.totalLessonsCompleted,
      studyTime: Math.floor(user.totalStudyTime / 60),
      currentStreak: user.learningStreak,
      overallProgress: user.progress
    };

    res.status(200).json({ 
      success: true, 
      data: { stats, recentLessons: recentProgress } 
    });
  } catch (error) {
    next(error);
  }
};
