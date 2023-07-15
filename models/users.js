const { Schema, model } = require("mongoose");
const userSubscriptionsEnum = require("../constants/userSubscriptionsEnum");
const bcrypt = require("bcrypt");

const usersSchema = Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: Object.values(userSubscriptionsEnum),
    default: userSubscriptionsEnum.STARTER,
  },
  token: {
    type: String,
    default: null,
  },
});

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

usersSchema.methods.checkPassword = (candidate, hash) => {
  return bcrypt.compare(candidate, hash);
};

const Users = model("Users", usersSchema);

module.exports = Users;
