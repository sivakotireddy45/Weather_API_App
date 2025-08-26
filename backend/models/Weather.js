const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  humidity: Number,
  condition: String,
  description: String,
  windSpeed: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Weather", weatherSchema);
