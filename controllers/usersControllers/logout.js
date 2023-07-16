const Users = require("../../models/users");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

exports.logout = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const unathorizedUser = Users.findByIdAndUpdate(userId, { token: null });

  if (!unathorizedUser) throw new AppError(401, "Not Authorized");

  res.status(204).end();
});
