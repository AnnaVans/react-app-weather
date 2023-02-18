import React from "react";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "5354b60afda2b7800186c06153932396";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu </div>
          <img src="/" alt="/" />
          <div className="ForecastTemperatures">
            <span className="TemperatureMax">19°</span>
            <span className="TemperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
