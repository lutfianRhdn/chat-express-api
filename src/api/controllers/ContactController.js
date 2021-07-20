const Contact = require("../models/Contact");
const ContactController = () => {
  const all = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
  };
  const store = async (req, res) => {
    try {
      const contacts = await Contact.collection.insertMany([
        {
          user_id: req.body.user_id,
          contact_id: req.body.contact_id,
          chats: [
            {
              is_me: true,
              message: "hello welcome to chat api",
            },
          ],
        },
        {
          user_id: req.body.contact_id,
          contact_id: req.body.user_id,
          chats: [
            {
              is_me: false,
              message: "hello welcome to chat api",
            },
          ],
        },
      ]);

      res.json(contacts);
    } catch (err) {
      res.json(err);
    }
  };
  const remove = async (req, res) => {
    // await Contact.collection.deleteMany([
    //   { user_id: req.body.user_id, contact_id: req.body.contact_id },
    //   { user_id: req.body.contact_id, contact_id: req.body.user_id },
    // ]);
    console.log(req.params.id);
    const contact = await Contact.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(contact);
  };
  const show = async (req, res) => {
    const contact = await Contact.find({ _id: req.params.id });
    res.json(contact);
  };
  return { all, store, remove, show };
};
module.exports = ContactController;
