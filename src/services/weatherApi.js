const getWeather = async (city) => {
  const trimmedCity = city.trim();
  if (!trimmedCity) throw new Error("Please enter a city");

  const locationResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(trimmedCity)}&count=10&language=en&format=json`
  );
  if (!locationResponse.ok) throw new Error("Location search failed. Please try again.");

  const locationData = await locationResponse.json();
  const matchingCity =
    locationData.results?.find(
      (item) => item.name?.toLowerCase() === trimmedCity.toLowerCase()
    ) ?? locationData.results?.[0];

  if (!matchingCity) {
    throw new Error("City not found. Check the spelling and try again.");
  }

  const { latitude, longitude, name, country, timezone } = matchingCity;
  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=auto`
  );

  if (!weatherResponse.ok) {
    throw new Error("Weather data is unavailable right now. Please try again.");
  }

  const data = await weatherResponse.json();

  return {
    city: name,
    country,
    timezone,
    temperature: data.current.temperature_2m,
    apparentTemperature: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    windDirection: data.current.wind_direction_10m,
    weatherCode: data.current.weather_code,
    forecast: data.daily,
  };
};

export default getWeather;

