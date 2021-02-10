"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Hostel = new Schema({
  name: String,
  location: String,
  distanceFromCampus: String,
  images: Array,
  category: String,
  rating: Number,
  phone: {
    type: String,
    validate: {
      validator: value => /^(\+233|0)[52][04567]{1}[0-9]{7}/g.test(value),
      message: props => `${props.Phone} is invalid`
    }
  },
  facilities: Array,
  roomtypes: Array,
  bookingPortal: String
});

module.exports = mongoose.model("Hostels", Hostel);
