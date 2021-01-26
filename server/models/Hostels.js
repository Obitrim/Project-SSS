"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Hostel = new Schema({
  Name: {
    type: String,
  },
  Location: {
    type: String,
  },
  Distance_Campus: {
    type: String,
  },
  Picture: {
    type: Number,
  },
  Category: {
    type: String,
  },
  Rating: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  Facilities: {
    type: String,
  },
  roomtypes: {
    type: String,
  },
});
module.exports = mongoose.model("Hostels", Hostel);
