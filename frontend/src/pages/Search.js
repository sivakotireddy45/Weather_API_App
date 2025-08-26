import { useState } from "react";
import axios from "axios";

function Search() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Get backend URL from .env
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSearch = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/weather/search`, { city });
      setResult(res.data);
      setError("");
    } catch (err) {
      setError("City not found or API error");
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h1>Weather Search</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="card">
          <h2>{result.city}</h2>
          <p>Temperature: {result.temperature} °C</p>
          <p>Humidity: {result.humidity}%</p>
          <p>Condition: {result.condition}</p>
          <p>Wind Speed: {result.windSpeed} km/h</p>
        </div>
      )}
    </div>
  );
}

export default Search;
