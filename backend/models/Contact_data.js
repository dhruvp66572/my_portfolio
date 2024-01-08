const mongoose = require("mongoose");
const { Schema } = mongoose;

const Contact_data = new Schema({
  cname: {
    type: String,
    required: true,
  },
  cemail: {
    type: String,
    require: true
  },
  csubject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("contact_us", Contact_data);
