const Contacts = require("../../models/contacts");

exports.updateContact = async (req, res) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const userId = req.user.id;

  const updatedContact = await Contacts.findOneAndUpdate(
    { _id: contactId, owner: userId },
    {
      name,
      email,
      phone,
    },
    { new: true }
  );

  if (!updatedContact)
    return res.status(404).json({
      message: "There is no user with this id",
    });

  return res.status(200).json({
    message: "Contact updated",
    updatedContact: updatedContact,
  });
};
