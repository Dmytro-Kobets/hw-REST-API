const express = require("express");

const {
  getContactsList,
  getById,
  addContact,
  removeContact,
} = require("../../controllers/contactsControllers.js");

const router = express.Router();

router.get("/", getContactsList);

router.get("/:contactId", getById);

router.post("/", addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
