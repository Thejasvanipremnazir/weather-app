import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "5fb210f2f83057772ea74e399544a039";

  const handleSearch = () => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // 🔍 Check API response
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
        setWeatherData(null);
      });
  };

  return (
    <div className="App">
      <h1>🌦️ Weather App</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Show weather card or error */}
      {weatherData && weatherData.cod === 200 ? (
        <WeatherCard weatherData={weatherData} />
      ) : weatherData && weatherData.cod === "404" ? (
        <p>❌ City not found</p>
      ) : null}
    </div>
  );
}

export default App;
