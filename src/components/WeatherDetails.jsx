import { Typography } from "@mui/material";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import CompressRoundedIcon from "@mui/icons-material/CompressRounded";

export const conditionFor = (code) => {
  if (code === 0) {
    return { label: "Clear sky", Icon: WbSunnyRoundedIcon, color: "#f5b84b" };
  }
  if (code <= 3) {
    return { label: "Partly cloudy", Icon: CloudRoundedIcon, color: "#92a9bd" };
  }
  if (code >= 71 && code <= 77) {
    return { label: "Snow showers", Icon: AcUnitRoundedIcon, color: "#7fc9e8" };
  }
  if (code >= 95) {
    return { label: "Thunderstorms", Icon: ThunderstormRoundedIcon, color: "#9077d5" };
  }
  if (code >= 51) {
    return { label: "Rain showers", Icon: WaterDropRoundedIcon, color: "#639ed5" };
  }

  return { label: "Cloudy", Icon: CloudRoundedIcon, color: "#92a9bd" };
};

function WeatherDetails({ weather, displayTemp }) {
  const items = [
    {
      label: "Feels like",
      value: `${Math.round(weather.apparentTemperature ?? weather.temperature)}°C`,
      Icon: WbSunnyRoundedIcon,
    },
    { label: "Humidity", value: `${weather.humidity}%`, Icon: WaterDropRoundedIcon },
    {
      label: "Wind speed",
      value: `${Math.round(weather.windSpeed)} km/h`,
      Icon: AirRoundedIcon,
    },
    {
      label: "Wind direction",
      value: weather.windDirection == null ? "—" : `${Math.round(weather.windDirection)}°`,
      Icon: CompressRoundedIcon,
    },
  ];

  return (
    <div className="details-grid">
      {items.map(({ label, value, Icon }) => (
        <div className="detail-card" key={label}>
          <Icon />
          <div>
            <Typography>{label}</Typography>
            <strong>{value}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherDetails;

