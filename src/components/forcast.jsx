import { Card, CardContent, Typography } from "@mui/material";
import { conditionFor } from "./WeatherDetails";

function Forecast({ forecast, displayTemp }) {
  if (!forecast?.time) return null;

  return (
    <div className="forecast-grid">
      {forecast.time.map((date, index) => {
        const condition = conditionFor(forecast.weather_code?.[index] ?? 0);
        const Icon = condition.Icon;

        return (
          <Card className="forecast-card" key={date}>
            <CardContent>
              <Typography className="forecast-day">
                {index === 0
                  ? "Today"
                  : new Date(date + "T12:00:00").toLocaleDateString("en", {
                      weekday: "short",
                    })}
              </Typography>
              <Typography className="forecast-date">
                {new Date(date + "T12:00:00").toLocaleDateString("en", {
                  month: "short",
                  day: "numeric",
                })}
              </Typography>
              <Icon className="forecast-icon" sx={{ color: condition.color }} />
              <Typography className="forecast-condition">{condition.label}</Typography>
              <div className="forecast-temps">
                <strong>{displayTemp(forecast.temperature_2m_max[index])}</strong>
                <span>{displayTemp(forecast.temperature_2m_min[index])}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Forecast;

