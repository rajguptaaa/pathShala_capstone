const Progress = require('../models/Progress');
const User = require('../models/User');

const TOTAL_LESSONS = 21; // 7 languages x 3 levels

exports.getProgress = async (req, res, next) => {
  try {
    const progress = await Progress.find({ user: req.user.id }).sort({ lastAccessed: -1 });
    res.status(200).json({ success: true, data: progress });
  } catch (error) {
    next(error);
  }
};

exports.updateProgress = async (req, res, next) => {
  try {
    const { lessonKey, lessonTitle, lessonLanguage, lessonLevel, progress, score, totalPoints, timeSpent, status } = req.body;

    if (!lessonKey) {
      return res.status(400).json({ success: false, message: 'lessonKey is required' });
    }

    let progressDoc = await Progress.findOne({ user: req.user.id, lessonKey });

    if (!progressDoc) {
      progressDoc = await Progress.create({
        user: req.user.id,
        lessonKey,
        lessonTitle: lessonTitle || '',
        lessonLanguage: lessonLanguage || '',
        lessonLevel: lessonLevel || '',
        progress: progress || 0,
        score: score || 0,
        totalPoints: totalPoints || 0,
        timeSpent: timeSpent || 0,
        attempts: 1,
        status: status || (progress >= 100 ? 'completed' : 'in-progress'),
        lastAccessed: Date.now()
      });
    } else {
      progressDoc.progress = progress || progressDoc.progress;
      progressDoc.score = score !== undefined ? score : progressDoc.score;
      progressDoc.totalPoints = totalPoints || progressDoc.totalPoints;
      progressDoc.timeSpent += (timeSpent || 0);
      progressDoc.attempts += 1;
      progressDoc.status = status || (progress >= 100 ? 'completed' : progressDoc.status);
      progressDoc.lastAccessed = Date.now();
      await progressDoc.save();
    }

    // Recompute user overall progress and stats
    const allProgress = await Progress.find({ user: req.user.id });
    const completedCount = allProgress.filter(p => p.status === 'completed').length;
    const overallPct = Math.round((completedCount / TOTAL_LESSONS) * 100);

    await User.findByIdAndUpdate(req.user.id, {
      totalLessonsCompleted: completedCount,
      progress: overallPct,
      $inc: { totalStudyTime: timeSpent || 0 }
    });

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
      .limit(5);

    // Shape recentLessons to match what Dashboard expects
    const recentLessons = recentProgress.map(p => ({
      lesson: { title: p.lessonTitle || p.lessonKey, level: p.lessonLevel },
      progress: p.progress,
      score: p.score,
      status: p.status
    }));

    const stats = {
      totalLessons: user.totalLessonsCompleted || 0,
      studyTime: Math.floor((user.totalStudyTime || 0) / 60),
      currentStreak: user.learningStreak || 0,
      overallProgress: user.progress || 0
    };

    res.status(200).json({ success: true, data: { stats, recentLessons } });
  } catch (error) {
    next(error);
  }
};
