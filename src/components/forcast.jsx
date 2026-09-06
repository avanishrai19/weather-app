import { Card, CardContent, Grid, Typography } from "@mui/material";

function Forecast({ forecast }) {
  if (!forecast) {
    return null;
  }

  const getForecastIcon = (code) => {
    if (code === 0) return "☀️";
    if (code >= 1 && code <= 3) return "☁️";
    if (code >= 51 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80 && code <= 82) return "🌦️";
    if (code >= 95) return "⛈️";
    return "🌤️";
  };

  return (
    <Grid container spacing={2} sx={{ width: "100%" }}>
      {forecast.time.map((date, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={date}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 4,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
            }}
          >
            <CardContent sx={{ textAlign: "center", py: 2.5 }}>
              <Typography variant="body2" color="rgba(255,255,255,0.75)">
                {new Date(date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </Typography>

              <Typography variant="h4" sx={{ my: 1.5 }}>
                {getForecastIcon(forecast.weather_code?.[index] ?? 0)}
              </Typography>

              <Typography variant="h6" fontWeight={700}>
                {forecast.temperature_2m_max[index]}°
              </Typography>

              <Typography variant="body2" color="rgba(255,255,255,0.75)">
                Low {forecast.temperature_2m_min[index]}°
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Forecast;