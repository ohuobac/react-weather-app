import React, { useState } from "react";
import "./weather.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState(props.celcius);
  function showFarenheit(event) {
    event.preventDefault();
    setUnit((props.celcius * 9) / 5 + 32);
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit(props.celcius);
  }

  return (
    <div>
      <span>{Math.round(unit)}°</span>

      <button className="btn btn-primary">
        <a href="/" className="link text-white fw-bold" onClick={showCelcius}>
          °C |{" "}
        </a>
        <a
          href="/"
          className=" link text-white fw-bold"
          onClick={showFarenheit}
        >
          °F
        </a>
      </button>
    </div>
  );
}
