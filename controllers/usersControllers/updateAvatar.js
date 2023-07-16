const ImageService = require("../../services/imageService");
const catchAsync = require("../../utils/catchAsync");

exports.updateAvatar = catchAsync(async (req, res) => {
  const { user, file } = req;

  if (file) {
    user.avatarURL = await ImageService.save(file, "img", "users", user.id);
  }

  const updatedUser = await user.save();

  res.status(200).json({
    user: updatedUser,
  });
});
