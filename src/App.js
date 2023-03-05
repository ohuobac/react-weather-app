import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container app-body mt-5 pt-5 pb-5  ps-5 me-5 pe-5">
        <div className="d-flex justify-content-between forcast">
          <div>
            36°C <br /> <span>SUN / DEC 01</span>
          </div>

          <div>
            ICON
            <br /> <span>CLOUDY</span>
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
            <h1>Lagos,NG</h1>
            <span>Forcast toggle</span>
          </div>

          <ul>
            <li>
              Humidity <span className="ms-4 ps-5">67%</span>
            </li>
            <li>
              Wind <span className="ms-5 ps-5">5mph</span>
            </li>
            <li>
              Pressure <span className="ms-4 ps-5">1008mmHg</span>
            </li>
            <li>
              Feels like <span className="ms-4 ps-5">41°C</span>
            </li>
          </ul>
        </div>

        <footer className="row ">
          <div className="col-4">
            <button>
              <span>°C / </span>
              <span>°F</span>
            </button>
          </div>

          <div className="col-4">
            <form>
              <input
                type="search"
                autoFocus={true}
                autocomplete="off"
                placeholder="Enter a city..."
                className="form-control shadow-sm me-0"
              />
              <span>
                <button
                  type="submit"
                  value="Search"
                  className=" btn btn-primary ms-2"
                >
                  Search
                </button>
              </span>
            </form>
          </div>
          <div className="col-4"> current time </div>
        </footer>
      </div>
    </div>
  );
}
