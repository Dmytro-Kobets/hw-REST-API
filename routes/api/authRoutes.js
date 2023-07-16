const express = require("express");
const {
  signUp,
  getCurrentUser,
  logout,
  updateAvatar,
} = require("../../controllers/usersControllers/");
const { login } = require("../../controllers/usersControllers/");
const {
  checkSignup,
} = require("../../middlewares/usersMiddlewares/checkSignup");
const { protect } = require("../../middlewares/usersMiddlewares/protect");
const {
  uploadAvatar,
} = require("../../middlewares/usersMiddlewares/uploadAvatar");

const router = express.Router();

router.post("/register", checkSignup, signUp);
router.post("/login", login);
router.get("/current", protect, getCurrentUser);
router.post("/logout", protect, logout);
router.patch("/avatars", uploadAvatar, protect, updateAvatar);

module.exports = router;
