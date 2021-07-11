const User = require("../models/User");
const ApiController = () => {
  const all = async (req, res) => {
    const users = await User.find({});
    res.json(users);
  };

  return { all };
};
module.exports = ApiController;
