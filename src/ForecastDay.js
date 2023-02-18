import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()} </div>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt="/"
      ></img>
      <div className="ForecastTemperatures">
        <span className="TemperatureMax">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="TemperatureMin">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
