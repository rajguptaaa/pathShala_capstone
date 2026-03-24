const Razorpay = require('razorpay');
const crypto = require('crypto');
const User = require('../models/User');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create order
exports.createOrder = async (req, res, next) => {
  try {
    const options = {
      amount: 49900, // ₹499 in paise
      currency: 'INR',
      receipt: `rcpt_${Date.now()}`,
      notes: { userId: req.user.id }
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json({ success: true, data: order });
  } catch (error) {
    console.error('Razorpay order error:', error);
    next(error);
  }
};

// Verify payment and upgrade to premium
exports.verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Invalid payment signature' });
    }

    // Upgrade user to premium
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        isPremium: true,
        premiumSince: new Date(),
        razorpayPaymentId: razorpay_payment_id
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: user, message: 'Premium activated successfully!' });
  } catch (error) {
    next(error);
  }
};
