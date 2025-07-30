function WeatherCard({ weatherData }) {
  if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
    return <p>City not found or loading...</p>;
  }

  return (
    <div className="card">
      <h2>{weatherData.name}</h2>
      <p>{weatherData.weather[0].main}</p>
      <p>{Math.round(weatherData.main.temp)}°C</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
}
export default WeatherCard;
