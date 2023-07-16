const Users = require("../../models/users");
const Email = require("../../services/emailService");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

exports.reverify = catchAsync(async (req, res) => {
  const { email } = req.body;

  if (!email) throw new AppError(400, "missing required field email");

  const user = await Users.findOne({ email });
  console.log(user);

  if (!user) throw new AppError(404, "User with this email wasn't found");

  if (user.verificationToken === null)
    throw new AppError(400, "Verification has already been passed");

  if (user.verify === false) {
    await new Email()._send(email, `/users/verify/${user.verificationToken}`);
    return res.status(200).json({
      message: "Verification email sent",
    });
  }
});
