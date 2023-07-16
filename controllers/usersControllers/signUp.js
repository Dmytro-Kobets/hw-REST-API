const userSubscriptionsEnum = require("../../constants/userSubscriptionsEnum");
const Users = require("../../models/users");
const catchAsync = require("../../utils/catchAsync");
const signToken = require("../../utils/signToken");

exports.signUp = catchAsync(async (req, res) => {
  const newUserData = {
    ...req.body,
    subscription: userSubscriptionsEnum.STARTER,
  };
  const newUser = await Users.create(newUserData);
  const token = signToken(newUser.id);
  newUser.password = undefined;

  res.status(201).json({
    user: newUser,
    token,
  });
});
