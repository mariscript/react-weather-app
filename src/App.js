import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a href="https://marison.me" target="_blank">
            Marison Munoz
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mariscript/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
