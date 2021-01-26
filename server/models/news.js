"use strict"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let News = new Schema({
    Headline: {
        type: String
    },
    Body: {
        type: String
    },
    comments: {
        type: String
    },
    likes: {
        type: String
    },
    
});
module.exports = mongoose.model("News", News);