import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import "./weather.css";
import "./App.css";
import Forcast from "./Forcast";

export default function SearchData(props) {
  return (
    <div className="SearchData">
      <div className="d-flex justify-content-between forcast mb-3">
        <div className="current-temp">
          <span>{Math.round(props.data.temperature)}° </span>
          <WeatherIcon code={props.data.icon} alt={props.data.description} />

          <br />
          <span className="text-capitalize current-description">
            {props.data.description}
          </span>
        </div>
        <Forcast coordinates={props.data.coordinates} />
      </div>

      <div className="mt-0 pt-0">
        <div className="d-flex justify-content-between mt-0 pt-0">
          <h1>
            {props.data.city}, {props.data.country}
          </h1>
          <span className="date-time">
            {" "}
            <CurrentDate dateNow={props.data.date} />{" "}
          </span>
        </div>

        <ul className="mb-3 pb-2">
          <li>
            Humidity <span className="ms-4 ps-5">{props.data.humidity}%</span>
          </li>
          <li>
            Wind{" "}
            <span className="ms-5 ps-5">{Math.round(props.data.wind)} mph</span>
          </li>
          <li>
            Pressure{" "}
            <span className="ms-4 ps-5">{props.data.pressure}mmHg</span>
          </li>
          <li>
            Feels like{" "}
            <span className="ms-4 ps-5">
              {Math.round(props.data.feels_like)}°C
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
