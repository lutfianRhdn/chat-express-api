const mongoose = require("mongoose");

const Contact = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  contact_id: {
    type: String,
    required: true,
  },
  chats: {
    Type: Array,
  },
});
module.exports = mongoose.model("contact", Contact);
