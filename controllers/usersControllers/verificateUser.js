const Users = require("../../models/users");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

exports.verificateUser = catchAsync(async (req, res) => {
  const { verificationToken } = req.params;
  const user = await Users.findOneAndUpdate(
    { verificationToken },
    { verify: true, verificationToken: null }
  );

  if (!user) throw new AppError(404, "User not found");

  res.status(200).json({
    message: "Verification successful",
  });

  // if(verificationToken === user.verificationToken)
});
