const Contacts = require("../../models/contacts");

const catchAsync = require("../../utils/catchAsync");

exports.getContactsList = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const contacts = await Contacts.find({ owner: userId }).select("-__v");
  res.status(200).json({ contacts });
});
