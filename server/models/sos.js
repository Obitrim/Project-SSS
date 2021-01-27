"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let sos = new Schema({
  sosSignal: {
    type: String,
  },
});
module.exports = mongoose.model("sos", sos);
