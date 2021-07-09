import "./App.css";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherSearch />
        <p>
          <a>Open source code</a> by Rebecca Yates
        </p>
      </div>
    </div>
  );
}

export default App;
