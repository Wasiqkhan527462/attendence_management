const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
