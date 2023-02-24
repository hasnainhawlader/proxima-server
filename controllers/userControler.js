const User = require("../models/userModel");

// login user

const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

//sign up

const signupUser = async (req, res) => {
  res.json({ message: "signUp" });
};

module.exports = {
  loginUser,
  signupUser,
};
