const { login } = require("./login");
const { signUp } = require("./signUp");
const { getCurrentUser } = require("./getCurrentUser");
const { logout } = require("./logout");

module.exports = {
  signUp,
  login,
  getCurrentUser,
  logout,
};
