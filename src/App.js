import React, { useState } from "react";
import axios from "axios";

import SearchData from "./SearchData";
import UnitConversion from "./UnitConversion";
import Loading from "./Loading";
import "./App.css";
import "./weather.css";

export default function App(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showResponse(response) {
    setWeatherData({
      ready: true,
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
      <div className="App">
        <div className="Container app-body mt-5 pt-5 pb-5  ps-5 me-5 pe-5">
          <div>
            <SearchData data={weatherData} />
          </div>
          <div className="d-flex justify-content-between">
            <UnitConversion celcius={weatherData.temperature} />

            <form className="row g-3 form" onSubmit={handleSubmit}>
              <div className="col-6">
                <input
                  type="search"
                  className="form-control shadow-sm w-200"
                  placeholder="Enter a city..."
                  autofocus="on"
                  autocomplete="off"
                  onChange={updateCity}
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
    searchInfo();
    return <Loading />;
  }
}
