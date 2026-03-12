import { useEffect, useState } from "react";

function App(){
  const[weather, setweather] = useState();
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=12.87&longitude=74.88&current_weather=true").then((response) => response.json()).then((data) => {
      setweather(data);
    })
  }, [])
  return(
    <div>
      <h1>Weather Dashboard</h1>
      {weather ? (
        <div>
          <h2>Current Weather:</h2>
          <h3>Time: {weather.current_weather.time}</h3>
          <h3>Temperature: {weather.current_weather.temperature}°C</h3>
          <h3>Wind Speed: {weather.current_weather.windspeed} km/h</h3>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default App;