const Contacts = require("../../models/contacts");

exports.updateFavorite = async (req, res) => {
  const { favorite } = req.body;
  const { contactId } = req.params;
  const userId = req.user.id;

  const updatedFavorite = await Contacts.findOneAndUpdate(
    { _id: contactId, owner: userId },
    {
      favorite: favorite,
    },
    { new: true }
  );

  if (!updatedFavorite)
    return res.status(404).json({
      message: "There is no user with this id",
    });

  return res.status(200).json({
    updatedFavorite,
  });
};
