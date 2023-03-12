import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import "./weather.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App defaultCity={"Lagos"} />
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
        <span className="author-name">by Chika Ohuoba</span>{" "}
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
