import { Card, CardContent, Typography, Box, Stack } from "@mui/material";

function WeatherCard({ weather, loading, error }) {
    if (loading) {
        return (
            <Box
                sx={{
                    mt: 4,
                    px: 4,
                    py: 2,
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.08)",
                    color: "#e0f2fe",
                    border: "1px solid rgba(255,255,255,0.14)",
                }}
            >
                <Typography>Loading weather...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Typography
                color="error"
                sx={{
                    mt: 3,
                    px: 3,
                    py: 1.5,
                    background: "rgba(239,68,68,0.12)",
                    border: "1px solid rgba(239,68,68,0.35)",
                    borderRadius: 3,
                }}
            >
                {error}
            </Typography>
        );
    }

    if (!weather) {
        return null;
    }

    const getWeatherCondition = (code) => {
        if (code === 0) return { label: "Clear Sky", icon: "☀️" };
        if (code >= 1 && code <= 3) return { label: "Cloudy", icon: "☁️" };
        if (code >= 51 && code <= 67) return { label: "Rainy", icon: "🌧️" };
        if (code >= 71 && code <= 77) return { label: "Snowy", icon: "❄️" };
        if (code >= 80 && code <= 82) return { label: "Rain Showers", icon: "🌦️" };
        if (code >= 95) return { label: "Thunderstorm", icon: "⛈️" };
        return { label: "Weather Update", icon: "🌤️" };
    };

    const condition = getWeatherCondition(weather.weatherCode);

    return (
        <Card
            sx={{
                mt: 4,
                width: { xs: "100%", sm: 420 },
                borderRadius: 5,
                background: "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(124,58,237,0.2))",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 20px 50px rgba(15, 23, 42, 0.45)",
                color: "#fff",
            }}
        >
            <CardContent sx={{ p: 4 }}>
                <Stack spacing={2}>
                    <Box>
                        <Typography variant="h4" fontWeight={700}>
                            {weather.city}
                        </Typography>
                        <Typography variant="body1" color="rgba(255,255,255,0.7)">
                            {weather.country}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography variant="h2" fontWeight={800} sx={{ lineHeight: 1 }}>
                            {weather.temperature}°
                        </Typography>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h3">{condition.icon}</Typography>
                            <Typography variant="subtitle1">{condition.label}</Typography>
                        </Box>
                    </Box>

                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Box sx={{ flex: 1, p: 2, borderRadius: 3, background: "rgba(255,255,255,0.08)" }}>
                            <Typography variant="body2" color="rgba(255,255,255,0.7)">Humidity</Typography>
                            <Typography variant="h6">💧 {weather.humidity}%</Typography>
                        </Box>

                        <Box sx={{ flex: 1, p: 2, borderRadius: 3, background: "rgba(255,255,255,0.08)" }}>
                            <Typography variant="body2" color="rgba(255,255,255,0.7)">Wind</Typography>
                            <Typography variant="h6">💨 {weather.windSpeed} km/h</Typography>
                        </Box>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default WeatherCard;