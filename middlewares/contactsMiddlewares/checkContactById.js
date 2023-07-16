const { Types } = require("mongoose");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");
const Contacts = require("../../models/contacts");

exports.checkContactById = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;
  const userId = req.user.id;

  const isIdValid = Types.ObjectId.isValid(contactId);

  if (!isIdValid) return next(new AppError(400, "Bad request.."));

  const contact = await Contacts.findOne({
    _id: contactId,
    owner: userId,
  }).select("-__v");

  if (!contact)
    return res.status(404).json({
      message: "There is no user with this id",
    });

  req.contact = contact;

  next();
});
