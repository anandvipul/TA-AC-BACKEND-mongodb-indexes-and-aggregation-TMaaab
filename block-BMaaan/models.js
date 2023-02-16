const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  user: { type: String, required: true, index: 1 },
  questions: [{ type: String }],
  answers: [{ type: String }],
  reply: [{ type: String }],
  vote: { type: Number },
  tags: [{ type: String, index: 1 }],
  views: { type: Number },
  reputation: { type: String },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
