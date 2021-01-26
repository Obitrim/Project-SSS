"use strict"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Whistle_blow = new Schema({
    Report_discribtion: {
        type: String
    }
    
});
module.exports = mongoose.model("Whistle_blow", Whistle_blow);