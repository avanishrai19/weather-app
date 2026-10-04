import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/forcast";
import WeatherDetails from "./components/WeatherDetails";
import getWeather from "./services/weatherApi";

const popularCities = ["New York", "London", "Tokyo", "Mumbai"];

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("C");

  const handleSearch = async (query = city) => {
    if (!query.trim()) {
      setError("Enter a city to see its forecast.");
      return;
    }

    setCity(query);
    setLoading(true);
    setError("");

    try {
      setWeather(await getWeather(query));
    } catch (searchError) {
      setWeather(null);
      setError(searchError.message || "Weather data could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  const displayTemp = (value) => {
    if (value == null) return "—";
    return `${Math.round(unit === "F" ? (value * 9) / 5 + 32 : value)}°`;
  };

  return (
    <Box className="app-shell" id="top">
      <Navbar unit={unit} onUnitChange={setUnit} />

      <Container maxWidth="lg" className="dashboard">
        <Box className="page-heading">
          <Typography className="eyebrow">YOUR WEATHER, AT A GLANCE</Typography>
          <Typography component="h1" className="page-title">
            Forecast that fits your day.
          </Typography>
          <Typography className="page-subtitle">
            Live conditions and a five-day outlook for wherever you are.
          </Typography>
        </Box>

        <SearchBox
          city={city}
          setCity={setCity}
          onSearch={() => handleSearch()}
          loading={loading}
        />

        <Box className="city-shortcuts" aria-label="Popular cities">
          <span>Try:</span>
          {popularCities.map((name) => (
            <button key={name} onClick={() => handleSearch(name)}>
              {name}
            </button>
          ))}
        </Box>

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        {loading && (
          <div className="loading-message" role="status">
            Finding your forecast…
          </div>
        )}

        {weather && !loading && (
          <>
            <section className="overview-section" id="today">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">RIGHT NOW</span>
                  <h2>Today in {weather.city}</h2>
                </div>
                <span className="updated-label">
                  Local time · {weather.timezone || weather.country}
                </span>
              </div>
              <WeatherCard weather={weather} unit={unit} displayTemp={displayTemp} />
            </section>

            <section className="details-section" id="details">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">CONDITIONS</span>
                  <h2>Weather details</h2>
                </div>
              </div>
              <WeatherDetails weather={weather} unit={unit} displayTemp={displayTemp} />
            </section>

            <section className="forecast-section" id="forecast">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">PLAN AHEAD</span>
                  <h2>5-day forecast</h2>
                </div>
              </div>
              <Forecast forecast={weather.forecast} unit={unit} displayTemp={displayTemp} />
            </section>
          </>
        )}

        {!weather && !loading && !error && (
          <div className="welcome-panel">
            <span className="welcome-icon">✳</span>
            <div>
              <h2>Where are you headed?</h2>
              <p>
                Search for a city to get current conditions and the five-day forecast.
              </p>
            </div>
          </div>
        )}

        <footer className="app-footer">
          Weather data by Open-Meteo · Free weather forecast API
        </footer>
      </Container>
    </Box>
  );
}

export default App;

