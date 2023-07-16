const { login } = require("./login");
const { signUp } = require("./signUp");
const { getCurrentUser } = require("./getCurrentUser");
const { logout } = require("./logout");
const { updateAvatar } = require("./updateAvatar");
const { verificateUser } = require("./verificateUser");
const { reverify } = require("./reverify");

module.exports = {
  signUp,
  login,
  getCurrentUser,
  logout,
  updateAvatar,
  verificateUser,
  reverify,
};
