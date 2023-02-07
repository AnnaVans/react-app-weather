import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.desctiption}
                className="float-left"
              />
              <div className="float-start">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit"> °C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li> Feels like: {Math.round(weatherData.feelsLike)} °C</li>
              <li> Humidity: {weatherData.humidity} %</li>
              <li> Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5354b60afda2b7800186c06153932396";
    let city = "Boston";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
