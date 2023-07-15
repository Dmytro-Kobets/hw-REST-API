const catchAsync = require("../../utils/catchAsync");

exports.getCurrentUser = catchAsync(async (req, res) => {
  const { email, subscription } = req.user;

  return res.status(200).json({
    email,
    subscription,
  });
});
