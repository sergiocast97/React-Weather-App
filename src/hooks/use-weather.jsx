// React's State
import { useState } from "react";
// Weather API function
import { getWeather } from "../weather-api";

export const useWeather = () => {

  // Set state for Weather data and NotFound Status
  const [weather, setWeather] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // Weather Search Function
  const searchWeatherByCity = async (city) => {

    // Async function to get the weather via API
    const data = await getWeather(city);

    // If no city has been found
    if (data.cod === "404") {
      // Set Not Found to True
      setNotFound(true);
      // Set Weather Object to Null
      setWeather(null);
      // End the function
      return;
    }
    
    // Because City has been found
    // Set Not Found to false
    setNotFound(false);

    // Set Weather to the following object
    setWeather({
      // Icon to represent weather
      icon: data.weather[0].icon,
      // Description of the Weather
      description: data.weather[0].description,
      // Temperatur in Celsius
      temperature: Math.round(data.main.temp),
      // Humidity percentage
      humidity: `${data.main.humidity}%`,
      // Wind Speed in meters per second
      windSpeed: `${Math.round(data.wind.speed)}m/s`,
    });
  };

  // Return Weather Object, Not Found Status and Search Function
  return {
    weather,
    notFound,
    searchWeatherByCity,
  };
};