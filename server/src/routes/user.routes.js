const authController = require('../controllers/authController');
const auth = require("../middleware/auth");
const errorMiddleware = require("../middleware/errorHandler");

const Router = require("express");
const router = Router();

router("/register", authController.signup);
router("/login", auth.protect, errorMiddleware.errorHandler , authController.login);

module.exports = router;