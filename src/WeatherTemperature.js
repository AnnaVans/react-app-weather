import React, { useState } from "react";

export default function WeatherTemperautre(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit"> °C </span>{" "}
        <span className="unit">
          |{" "}
          <a href="/" onClick={convertToFar}>
            F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCel}>
            °C
          </a>
        </span>
        <span className="unit"> | F</span>
      </div>
    );
  }
}
