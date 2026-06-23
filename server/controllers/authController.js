const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      password
    } = req.body;

    const exists =
      await User.findOne({ email });

    if (exists) {
      return res.json({
        message:
          "User already exists"
      });
    }

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(
        password,
        salt
      );

    const user =
      await User.create({
        name,
        email,
        password:
          hashedPassword
      });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.login = async (
  req,
  res
) => {
  try {
    const {
      email,
      password
    } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User Not Found"
      });
    }

    const valid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!valid) {
      return res.status(400).json({
        message:
          "Invalid Password"
      });
    }

    const token =
      jwt.sign(
        {
          id: user._id,
          role: user.role
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      );

    res.json({
      token,
      user
    });
  } catch (error) {
    res.status(500).json(error);
  }
};