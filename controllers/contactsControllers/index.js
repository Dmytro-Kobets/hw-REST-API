const { getContactsList } = require("./getContactsList");
const { getById } = require("./getById");
const { addContact } = require("./addContact");
const { removeContact } = require("./removeContact");
const { updateContact } = require("./updateContact");
const { isFavoriteById } = require("./isFavoriteById");
const { updateFavorite } = require("./updateFavorite");

module.exports = {
  getContactsList,
  getById,
  addContact,
  removeContact,
  updateContact,
  isFavoriteById,
  updateFavorite,
};
