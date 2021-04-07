const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  wines: String,
  reviews: String,
}, { timestamps: true});


module.exports = mongoose.model('Wine', wineSchema);