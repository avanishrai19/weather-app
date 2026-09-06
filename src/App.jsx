import { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import getWeather from "./services/weatherApi";
import Forecast from "./components/forcast";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (error) {
      setWeather(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b1020 0%, #132a43 35%, #1b3b6f 100%)",
        color: "#f4f7ff",
        py: 5,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Typography
              variant="overline"
              sx={{
                display: "block",
                letterSpacing: 2,
                color: "#8ec5ff",
                fontWeight: 700,
              }}
            >
              WEATHER DASHBOARD
            </Typography>
            <Typography variant="h3" fontWeight={700}>
              Weather App 🌤️
            </Typography>
          </Box>

          <SearchBox city={city} setCity={setCity} onSearch={handleSearch} />

          <WeatherCard weather={weather} loading={loading} error={error} />

          {weather && (
            <Box sx={{ width: "100%", mt: 2 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                5-Day Forecast
              </Typography>
              <Forecast forecast={weather.forecast} />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default App;