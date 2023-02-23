import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `The temperature in ${props.city} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);

  return;
  <h2>React Weather App</h2>;
}
