const Contacts = require("../../models/contacts");

exports.removeContact = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user.id;

  const result = await Contacts.findOneAndDelete({
    _id: contactId,
    owner: userId,
  });

  if (!result)
    return res.status(404).json({
      message: "There is no user with this id",
    });
  res.sendStatus(204);
};
