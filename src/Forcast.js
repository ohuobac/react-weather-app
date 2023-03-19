import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import WeatherForcastDay from "./WeatherForcastDay";

export default function Forcast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forcast, setForcast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showForcast(response) {
    setLoaded(true);
    setForcast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="row">
        {forcast.map(function (dailyForcast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForcastDay data={dailyForcast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForcast);
  }
}
