const Contacts = require("../../models/contacts");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const { createContactValidator } = require("../../utils/contacsValidators");

exports.checkContactInput = catchAsync(async (req, res, next) => {
  const { error, value } = createContactValidator(req.body);

  if (error) return next(new AppError(400, "Invalid contact data"));

  const userExists = await Contacts.exists({ email: value.email });

  if (userExists)
    return next(new AppError(400, "User with this email already exists"));

  req.body = value;

  next();
});
