const axios = require("axios");
const Weather = require("../models/Weather");

exports.searchWeather = async (req, res) => {
  try {
    const { city } = req.body;
    const apiKey = process.env.OPENWEATHER_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;
    const record = new Weather({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      condition: data.weather[0].main,
      description: data.weather[0].description,
      windSpeed: data.wind.speed
    });

    await record.save();
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: "City not found or API error" });
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await Weather.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Error fetching results" });
  }
};
