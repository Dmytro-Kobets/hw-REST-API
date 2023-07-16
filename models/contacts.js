const { Schema, Types, model } = require("mongoose");

const contactsSchema = Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Types.ObjectId,
    ref: "Users",
  },
});

const Contacts = model("Contacts", contactsSchema);

module.exports = Contacts;
