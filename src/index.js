import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import "./weather.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App defaultCity={"Lagos"} />
    <footer className="link text-center">
      <small className="weather-app-wrapper">
        <a
          href="https://github.com/ohuobac/react-weather-app"
          target="_blank"
          rel="noreferrer"
          text-decoration="none"
        >
          Open-source code{" "}
        </a>{" "}
        by Chika Ohuoba{" "}
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
  </React.StrictMode>
);
