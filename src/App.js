import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./weather.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showResponse(response) {
    setWeatherData({
      ready: true,
      date: "Monday 14:54",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="Container app-body mt-5 pt-5 pb-5  ps-5 me-5 pe-5">
          <div className="d-flex justify-content-between forcast mb-3">
            <div className="current-temp">
              <span>{Math.round(weatherData.temperature)}°C </span>
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                width="75"
                className="icon-className"
              />{" "}
              <br />
              <span className="text-capitalize">{weatherData.description}</span>
            </div>
            <div className="forcast-border"></div>
            <div>
              Mon <br /> icon
              <br />
              36°C
            </div>
            <div className="forcast-border"></div>
            <div>
              Tue <br /> icon
              <br />
              37°C
            </div>
            <div className="forcast-border"></div>

            <div>
              Wed <br /> icon
              <br />
              36°C
            </div>
            <div className="forcast-border"></div>
            <div>
              Thur <br /> icon
              <br />
              36°C
            </div>
            <div className="forcast-border"></div>
            <div>
              Fri <br /> icon
              <br />
              37°C
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between">
              <h1>
                {weatherData.city}, {weatherData.country}
              </h1>
              <span className="date-time"> {weatherData.date} </span>
            </div>

            <ul>
              <li>
                Humidity{" "}
                <span className="ms-4 ps-5">{weatherData.humidity}%</span>
              </li>
              <li>
                Wind{" "}
                <span className="ms-5 ps-5">
                  {Math.round(weatherData.wind)} mph
                </span>
              </li>
              <li>
                Pressure{" "}
                <span className="ms-4 ps-5">{weatherData.pressure}mmHg</span>
              </li>
              <li>
                Feels like{" "}
                <span className="ms-4 ps-5">
                  {Math.round(weatherData.feels_like)}°C
                </span>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <button className="btn btn-primary">
                <a href="/" className="active text-white ">
                  °C /{" "}
                </a>
                <a href="/" className=" text-white">
                  °F
                </a>
              </button>
            </div>

            <form className="row g-3 form">
              <div className="col-6">
                <input
                  type="search"
                  className="form-control shadow-sm w-200"
                  placeholder="Enter a city..."
                  autofocus="on"
                  autocomplete="off"
                />
              </div>
              <div className="col-6">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm w-50"
                />
              </div>
            </form>

            <span>Forcast toggle</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);

    return "Loading...";
  }
}
