const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, "process.env.SECRAT", { expiresIn: "7d" });
};

// login user

const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create token

    const token = createToken(user._id);
    res.status(200).json({ email, token });

    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
