import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>{props.data.date}</li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.desctiption}
              className="float-left"
            />
            <div className="float-start">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit"> °C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li> Feels like: {Math.round(props.data.feelsLike)} °C</li>
            <li> Humidity: {props.data.humidity} %</li>
            <li> Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
