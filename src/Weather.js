import React from "react";
import "./App.css";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "Lagos",
    dateTime: "7 Feb 04:30",
    description: "Cloudy",
    humidity: 71,
    wind: 6,
    Pressure: 1007,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };
  return (
    <div className="weather">
      <div className=" container main-container">
        <div className="all-forcast">
          <div className="row justify-content-evenly">
            <div className="col-4 current-day">
              <h1>{weatherData.city}</h1>
              <ul className="date-time text-center">
                <li>{weatherData.dateTime}</li>
                <li>Cloudy</li>
              </ul>

              <div className="current-temp">
                <strong>
                  <span></span>
                </strong>
                <span className="units">
                  <a href="/" className="active">
                    29°C|
                  </a>
                  <a href="/" className="">
                    84°F
                  </a>
                </span>
              </div>

              <img
                src={weatherData.imgUrl}
                alt=""
                width="50"
                className="icon-className"
              />

              <form className="row g-3 Location" id="current-location-button">
                <div className="col-2">
                  <button
                    className="btn btn-outline-secondary button w-200"
                    type="button"
                  >
                    Current
                  </button>
                </div>
              </form>
              <p></p>

              <form className="row g-3 form" id="search-form">
                <div className="col-4">
                  <input
                    type="search"
                    className="form-control shadow-sm"
                    placeholder="Enter a city..."
                    autofocus="on"
                    autocomplete="off"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm w-200"
                  />
                </div>
              </form>
              <br />
            </div>

            <div className="col-8 text-center">
              <div></div>

              <div className="d-flex justify-content-between">
                <div className=" element">
                  <div>Humidity</div>
                  <span>71</span>%
                </div>
                <div className=" element">
                  <div>Wind</div>
                  <span>6</span>
                  km/h
                </div>

                <div className=" element">
                  <div>Pressure</div>
                  <span>1007</span>
                  mmHg
                </div>
              </div>
            </div>
          </div>
          <div className="link">
            <small className="weather-app-wrapper">
              <a
                href="https://github.com/ohuobac/My-Awesome-Weather-App"
                target="_blank"
                rel="noreferrer"
                text-decoration="none"
              >
                Open-source code{" "}
              </a>
              by Chika Ohuoba
              <a
                href="https://dreamy-cassata-7a104d.netlify.app"
                target="_blank"
                rel="noreferrer"
                text-decoration="none"
              >
                Hosted on Netlify
              </a>
            </small>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
