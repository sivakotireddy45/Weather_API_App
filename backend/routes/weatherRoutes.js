const express = require("express");
const { searchWeather, getResults } = require("../controllers/weatherController");

const router = express.Router();

router.post("/search", searchWeather);
router.get("/results", getResults);

module.exports = router;
