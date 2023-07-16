const userSubscriptionsEnum = require("../../constants/userSubscriptionsEnum");
const Users = require("../../models/users");
const Email = require("../../services/emailService");
const catchAsync = require("../../utils/catchAsync");
const signToken = require("../../utils/signToken");

const uuid = require("uuid").v4;

exports.signUp = catchAsync(async (req, res) => {
  const verificationToken = uuid().toString();

  const verificationUrl = `/users/verify/${verificationToken}`;

  const newUserData = {
    ...req.body,
    subscription: userSubscriptionsEnum.STARTER,
    verificationToken,
  };
  const email = req.body.email;

  await new Email()._send(email, verificationUrl);

  const newUser = await Users.create(newUserData);
  const token = signToken(newUser.id);
  newUser.password = undefined;

  res.status(201).json({
    user: newUser,
    token,
  });
});
