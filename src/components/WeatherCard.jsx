import { Card, CardContent, Stack, Typography } from "@mui/material";
import { conditionFor } from "./WeatherDetails";

function WeatherCard({ weather, unit, displayTemp }) {
  const condition = conditionFor(weather.weatherCode);
  const Icon = condition.Icon;

  return (
    <Card className="current-card">
      <CardContent className="current-card-content">
        <div className="current-location">
          <div>
            <Typography className="location-name">{weather.city}</Typography>
            <Typography className="location-country">{weather.country}</Typography>
          </div>
          <span className="live-pill">
            <i /> LIVE
          </span>
        </div>

        <div className="current-main">
          <div>
            <div className="current-temperature">{displayTemp(weather.temperature)}</div>
            <Typography className="feels-label">Current temperature ° {unit}</Typography>
          </div>

          <div className="condition-block">
            <Icon className="condition-icon" sx={{ color: condition.color }} />
            <span>{condition.label}</span>
          </div>
        </div>

        <div className="card-divider" />

        <Stack direction="row" className="quick-stats">
          <div>
            <span>Humidity</span>
            <strong>{weather.humidity}%</strong>
          </div>
          <div>
            <span>Wind speed</span>
            <strong>{Math.round(weather.windSpeed)} km/h</strong>
          </div>
          <div>
            <span>Feels like</span>
            <strong>{displayTemp(weather.apparentTemperature ?? weather.temperature)}</strong>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
