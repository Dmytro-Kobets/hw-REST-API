const { login } = require("./login");
const { signUp } = require("./signUp");
const { getCurrentUser } = require("./getCurrentUser");
const { logout } = require("./logout");
const { updateAvatar } = require("./updateAvatar");

module.exports = {
  signUp,
  login,
  getCurrentUser,
  logout,
  updateAvatar,
};
