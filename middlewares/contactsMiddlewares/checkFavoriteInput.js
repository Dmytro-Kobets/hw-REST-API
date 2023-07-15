const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const { favoriteValidator } = require("../../utils/contacsValidators");

exports.checkFavoriteInput = catchAsync(async (req, res, next) => {
  const { error, value } = favoriteValidator(req.body);
  console.log();

  if (error) return next(new AppError(400, error.message));

  req.body = value;

  next();
});
