import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import "./weather.css";
import "./App.css";

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

        <div className="forcast-border"></div>
        <div>
          Mon <br /> icon
          <br />
          36<span>°</span>
        </div>
        <div className="forcast-border"></div>
        <div>
          Tue <br /> icon
          <br />
          37°
        </div>
        <div className="forcast-border"></div>

        <div>
          Wed <br /> icon
          <br />
          36°
        </div>
        <div className="forcast-border"></div>
        <div>
          Thur <br /> icon
          <br />
          36°
        </div>
        <div className="forcast-border"></div>
        <div>
          Fri <br /> icon
          <br />
          37°
        </div>
      </div>

      <div>
        <div className="d-flex justify-content-between mt-5">
          <h1>
            {props.data.city}, {props.data.country}
          </h1>
          <span className="date-time">
            {" "}
            <CurrentDate dateNow={props.data.date} />{" "}
          </span>
        </div>

        <ul>
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
