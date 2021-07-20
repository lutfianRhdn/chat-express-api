const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const AuthController = () => {
  const register = async (req, res) => {
    try {
      const user = await new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        phone: req.body.phone,
      });
      user.save();

      const accessToken = generateToken(user);
      res.json({ data: user, meta: { access_token: accessToken } });
    } catch (error) {
      res.json(error);
    }
  };
  const login = async (req, res) => {
    try {
      const user = await User.find({ email: req.body.email });
      console.log(user[0].password, req.body.password);
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (!result) res.json(err);
        // res.json({ message: "email / password is wrong" });
        const accessToken = generateToken(user);
        res.json({ data: user, meta: { access_token: accessToken } });
      });
    } catch (err) {
      res.json(err);
    }
  };
  const generateToken = (data) => {
    return jwt.sign(
      { name: data["name"], email: data["email"] },
      process.env.ACCESS_TOKEN_SECRET
    );
  };
  return { register, login };
};
module.exports = AuthController;
