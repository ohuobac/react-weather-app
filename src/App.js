import React, { useState } from "react";
import axios from "axios";

import SearchData from "./SearchData";
import Loading from "./Loading";
import "./App.css";

export default function App(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
    });
  }
  function searchInfo() {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchInfo();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="App app-body">
          <div className="container  mt-5 pt-5 pb-5  ps-5 me-5 pe-5">
            <div className="mb-3 mt-0 pt-0">
              <form
                className="row g-3 form search-form"
                onSubmit={handleSubmit}
              >
                <div className="col-6">
                  <input
                    type="search"
                    className="form-control shadow-sm w-200 input"
                    placeholder="Enter city"
                    autofocus="on"
                    autocomplete="off"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="submit"
                    value="Search"
                    className="search-input form-control btn btn-primary shadow-sm w-50"
                  />
                </div>
              </form>
            </div>
            <div>
              <SearchData data={weatherData} />
            </div>
          </div>
        </div>
        <footer className="link text-center mb-0 pb-0 mt-0 pt-0">
          <small className="weather-app-wrapper mb-0 pb-0 mt-0 pt-0">
            <a
              href="https://github.com/ohuobac/react-weather-app"
              target="_blank"
              rel="noreferrer"
              text-decoration="none"
            >
              Open-source code{" "}
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/ohuoba-chika-79b942121/"
              target="_blank"
              rel="noreferrer"
              text-decoration="none"
              className="author-name"
            >
              by Chika Ohuoba
            </a>{" "}
            <a
              href="https://gleeful-cannoli-b65da1.netlify.app/"
              target="_blank"
              rel="noreferrer"
              text-decoration="none"
            >
              Hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    );
  } else {
    searchInfo();
    return <Loading />;
  }
}
