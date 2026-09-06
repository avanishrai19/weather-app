const getWeather = async (city) => {
  const trimmedCity = city.trim();

  if (!trimmedCity) {
    throw new Error("Please enter a city");
  }

  // City → latitude & longitude
  const locationResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(trimmedCity)}&count=10&language=en&format=json`
  );

  const locationData = await locationResponse.json();

  const matchingCity =
    locationData.results &&
    locationData.results.find((item) => {
      const resultName = item.name?.toLowerCase() || "";
      return resultName === trimmedCity.toLowerCase();
    });

  if (!matchingCity) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name, country } = matchingCity;

  // Coordinates → weather
  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=auto`
  );

  const weatherData = await weatherResponse.json();

  return {
  city: name,
  country,
  temperature: weatherData.current.temperature_2m,
  humidity: weatherData.current.relative_humidity_2m,
  windSpeed: weatherData.current.wind_speed_10m,
  weatherCode: weatherData.current.weather_code,

  forecast: weatherData.daily,
};
};

export default getWeather;