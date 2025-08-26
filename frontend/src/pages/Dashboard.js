// import { useEffect, useState } from "react";
// import axios from "axios";

// function Dashboard() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/api/weather/results`)
//       .then(res => setData(res.data))
//       .catch(() => console.log("Error fetching results"));
//   }, []);

//   return (
//     <div className="container">
//       <h1>Weather History</h1>
//       {data.map((item, i) => (
//         <div key={i} className="card">
//           <h2>{item.city}</h2>
//           <p>Temperature: {item.temperature} °C</p>
//           <p>Humidity: {item.humidity}%</p>
//           <p>Condition: {item.condition}</p>
//           <p>Wind Speed: {item.windSpeed} km/h</p>
//           <p className="time">
//             Searched At: {new Date(item.createdAt).toLocaleString()}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Dashboard;



import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/weather/results`)
      .then(res => setData(res.data))
      .catch(() => console.log("Error fetching results"));
  }, []);

  return (
    <div className="container dashboard">
      <h2>Weather History</h2>
      <div className="dashboard-grid">
        {data.map((item, i) => (
          <div key={i} className="dashboard-card">
            <h3>{item.city}</h3>
            <p><strong>🌡 Temp:</strong> {item.temperature} °C</p>
            <p><strong>💧 Humidity:</strong> {item.humidity}%</p>
            <p><strong>☁ Condition:</strong> {item.condition}</p>
            <p><strong>🌬 Wind:</strong> {item.windSpeed} km/h</p>
            <p className="time">🕒 {new Date(item.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

