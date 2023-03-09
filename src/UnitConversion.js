import React, { useState } from "react";
import "./weather.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState(props.celcius);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div>
        <span>{Math.round(props.celcius)}°</span>

        <button className="btn btn-primary">
          <span>°C |</span>{" "}
          <a
            href="/"
            className="unit-color link  fw-bold"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(fahrenheit())}°</span>

        <button className="btn btn-primary">
          <a
            href="/"
            className="unit-color link  fw-bold"
            onClick={showCelcius}
          >
            °C{" "}
          </a>
          <span>| °F</span>
        </button>
      </div>
    );
  }
}
