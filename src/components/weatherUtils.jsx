import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

export const conditionFor = (code) => {
  if (code === 0) {
    return { label: "Clear sky", Icon: WbSunnyRoundedIcon, color: "#ffd66b" };
  }
  if (code <= 3) {
    return { label: "Partly cloudy", Icon: CloudRoundedIcon, color: "#d8e8ff" };
  }
  if (code >= 71 && code <= 77) {
    return { label: "Snow showers", Icon: AcUnitRoundedIcon, color: "#d8f5ff" };
  }
  if (code >= 95) {
    return { label: "Thunderstorms", Icon: ThunderstormRoundedIcon, color: "#d8c5ff" };
  }

  return { label: "Rain showers", Icon: CloudRoundedIcon, color: "#8fc8ff" };
};

