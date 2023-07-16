const Users = require("../../models/users");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const { signupUserValidator } = require("../../utils/userValidators");

exports.checkSignup = catchAsync(async (req, res, next) => {
  const { error, value } = signupUserValidator(req.body);

  if (error) throw new AppError(400, "Joi or other validation library error");

  const userExists = await Users.exists({ email: value.email });

  if (userExists) throw new AppError(409, "Email is already in use");

  req.body = value;

  next();
});
