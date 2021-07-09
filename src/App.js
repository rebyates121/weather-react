import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherSearch />
        <br />
        <footer>
          <p>
            <a
              className="code-link"
              href="https://github.com/rebyates121/weather-react"
              target="_blank"
            >
              Open source code
            </a>{" "}
            by Rebecca Yates
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
