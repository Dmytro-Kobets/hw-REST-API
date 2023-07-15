const Users = require("../../models/users");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const signToken = require("../../utils/signToken");

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email }).select("+password");
  console.log(user);

  if (!user) throw new AppError(401, "Not authorized");

  const passwordIsValid = await user.checkPassword(password, user.password);

  if (!passwordIsValid) throw new AppError(401, "Not authorized");

  user.password = undefined;

  const token = signToken(user.id);

  res.status(200).json({
    user,
    token,
  });
});
