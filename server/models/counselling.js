"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Counselling = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  programStudy: {
    type: String,
  },
  level: {
    type: Number,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  description: {
    type: String,
  },
});
module.exports = mongoose.model("counselling", Counselling);
