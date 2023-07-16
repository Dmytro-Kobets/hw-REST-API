const Contacts = require("../../models/contacts");
const catchAsync = require("../../utils/catchAsync");

exports.isFavoriteById = catchAsync(async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user.id;

  const isFavorite = await Contacts.findOne({
    _id: contactId,
    owner: userId,
  }).select("name favorite -_id ");

  if (!isFavorite)
    return res.status(404).json({
      message: "There is no user with this id",
    });

  return res.status(200).json({
    isFavorite,
  });
});
