# Atmosphere Weather

A responsive weather dashboard built with React, Vite, and Material UI. Search for a city to see its current conditions and five-day outlook.

## What changed

The interface was redesigned to feel like a modern weather application:

- A layered blue-and-violet sky gradient creates a weather-inspired backdrop.
- The header now includes a clear app identity and concise guidance.
- The city search field has an icon, improved spacing, loading feedback, and keyboard support—press **Enter** to search.
- Current weather is presented in a prominent glass-effect card with city, country, temperature, condition, humidity, and wind speed.
- Weather codes now display appropriate Material UI icons for clear, cloudy, rainy, snowy, and stormy conditions.
- The forecast is shown in responsive five-day cards that adapt from two columns on mobile to five columns on larger screens.
- Error messages are displayed in a readable alert instead of plain text.

## Features

- Search exact city names through Open-Meteo geocoding.
- Current temperature, humidity, wind speed, and weather condition.
- Five-day minimum and maximum temperature forecast.
- Responsive layout for phones, tablets, and desktops.
- Accessible button, form submission, loading, and error states.

## Technology

- React 19
- Vite
- Material UI and Material UI Icons
- Open-Meteo Geocoding and Forecast APIs

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown by Vite in your browser.

## Quality checks

```bash
npm run lint
npm run build
```

Both checks pass with the current version of the application.
