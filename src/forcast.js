import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import apiKeys from "./apiKeys";

function Forcast(props) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    // Fetch weather data for the default city
    search("Delhi");
  }, []);

  const search = (city) => {
    axios
      .get(
        `${apiKeys.base}weather?q=${encodeURIComponent(
          city != "[object Object]" ? city : query
        )}&units=metric&APPID=${apiKeys.key}`
      )
      .then((response) => {
        setWeather(response.data);
        setQuery("");
      })
      .catch((error) => {
        console.log(error);
        setWeather("");
        setQuery("");
        setError({ message: "Not Found", query: query });
      });
  };

  return (
    <div className="forecast">
      <div className="forecast-icon">
        {typeof weather.weather !== "undefined" && (
          <ReactAnimatedWeather
            icon={getWeatherIcon(weather.weather[0].id)}
            color="#fff"
            size={props.size || 112}
            animate={true}
          />
        )}
      </div>
      <div className="today-weather">
        <h3>{props.weather}</h3>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div className="img-box">
            <img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              alt="Search"
              onClick={() => search(query)}
            />
          </div>
        </div>
        <ul>
          {typeof weather.main !== "undefined" ? (
            <div>
              <li className="cityHead">
                <p>
                  {weather.name}, {weather.sys.country}
                </p>
                <img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
              </li>
              <li>
                Temperature{" "}
                <span className="temp">
                  {Math.round(weather.main.temp)}°C
                </span>{" "}
                ({weather.weather[0].main})
              </li>
              <li>
                Humidity{" "}
                <span className="temp">
                  {Math.round(weather.main.humidity)}%
                </span>
              </li>
              <li>
                Visibility{" "}
                <span className="temp">{weather.visibility} mi</span>
              </li>
              <li>
                Wind Speed{" "}
                <span className="temp">
                  {Math.round(weather.wind.speed * 3.6)} km/h
                </span>
              </li>
            </div>
          ) : (
            <li>
              {error.query} {error.message}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

// Function to map weather condition IDs to animated weather icons
const getWeatherIcon = (id) => {
  if (id >= 200 && id < 300) {
    return "THUNDER";
  } else if (id >= 300 && id < 400) {
    return "SHOWERS_DAY";
  } else if (id >= 500 && id < 600) {
    return "RAIN";
  } else if (id >= 600 && id < 700) {
    return "SNOW";
  } else if (id >= 700 && id < 800) {
    return "FOG";
  } else if (id === 800) {
    return "CLEAR_DAY";
  } else if (id === 801) {
    return "PARTLY_CLOUDY_DAY";
  } else if (id > 801 && id < 805) {
    return "CLOUDY";
  } else {
    return "CLOUDY";
  }
};

export default Forcast;
