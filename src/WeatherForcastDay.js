import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let currentDay = dayOfTheWeek[day];

    return currentDay;
  }

  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);
  let avgTemp = (maxTemp + minTemp) / 2;

  return (
    <div className="forcast  mb-3">
      <div className="forcast-border">
        <div>{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
        <div>{Math.round(avgTemp)}°</div>
      </div>
    </div>
  );
}
