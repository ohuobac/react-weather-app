import React from "react";

export default function CurrentDate(props) {
  let date = props.dateNow.getDate();
  let hour = props.dateNow.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let min = props.dateNow.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }

  let time = "am";
  if (hour < 12) {
    time = "am";
  } else {
    time = "pm";
  }

  let day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let currentDay = day[props.dateNow.getDay()];
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let currentMonth = month[props.dateNow.getMonth()];

  return (
    <div className="mt-0 pt-0 mb-0 pb-0">
      {currentDay}, {date} {currentMonth} <br />
      {hour}:{min} {time}
    </div>
  );
}
