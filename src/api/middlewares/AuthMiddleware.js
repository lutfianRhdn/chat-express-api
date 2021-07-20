const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const AuthMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader == null)
    return res.status(401).json({ message: "unautorized" });
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, data) => {
    if (err) return res.status(403).json(err);
    await User.find({ name: data.name, email: data.email }, (err, user) => {
      req.user = user[0];
      next();
    });
  });
};

module.exports = AuthMiddleware;
