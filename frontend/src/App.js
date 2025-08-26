import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-logo">🌦 WeatherApp</div>
        <div className="nav-links">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Search
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Dashboard
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
