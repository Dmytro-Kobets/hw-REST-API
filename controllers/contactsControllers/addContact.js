const Contacts = require("../../models/contacts");

exports.addContact = async (req, res) => {
  const newContact = await Contacts.create({ ...req.body, owner: req.user.id });
  console.log(req.user);

  res.status(201).json({
    contact: newContact,
  });
};
