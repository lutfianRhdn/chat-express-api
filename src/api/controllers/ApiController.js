const User = require("../models/User");
const Contact = require("../models/Contact");
const ApiController = () => {
  const all = async (req, res) => {
    const users = await User.find();
    res.json(users);
  };
  const getChat = async (req, res) => {
    console.log(req.body);
    const contact = await Contact.find({
      $or: [
        { user_id: req.body.user_id, contact_id: req.body.contact_id },
        { user_id: req.body.contact_id, contact_id: req.body.user_id },
      ],
    });
    res.json(contact);
  };
  const addChat = async (req, res) => {
    const chatUpdated = await Contact.findOneAndUpdate(
      { user_id: req.body.user_id, contact_id: req.body.contact_id },
      {
        $push: {
          chats: [
            {
              user_id: req.body.user_id,
              message: req.body.message,
            },
          ],
        },
      }
    );
    res.json(chatUpdated);
    // const contact = await Contact.find({user_id:req.body.user_id,contact_id:req.body.contact_id})[0]
  };
  return { all, getChat, addChat };
};
module.exports = ApiController;
