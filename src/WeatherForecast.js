import React from "react";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
