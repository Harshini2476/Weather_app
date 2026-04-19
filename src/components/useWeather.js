import { useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export function useWeather() {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const fetchWeather = async (city) => {
    if (!city || !city.trim()) return;

    setState({
      data: null,
      loading: true,
      error: null,
    });

    try {
      const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

      const response = await axios.get(url);
      const raw = response.data;

      const weatherData = {
        city: raw.name,
        country: raw.sys.country,
        temperature: Math.round(raw.main.temp),
        feelsLike: Math.round(raw.main.feels_like),
        condition: raw.weather[0].main,
        description: raw.weather[0].description,
        humidity: raw.main.humidity,
        windSpeed: raw.wind.speed,
        icon: raw.weather[0].icon,
        visibility: raw.visibility,
        pressure: raw.main.pressure,
      };

      setState({
        data: weatherData,
        loading: false,
        error: null,
      });

    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          setState({
            data: null,
            loading: false,
            error: 'City not found. Please try again.',
          });
        } else if (err.response?.status === 401) {
          setState({
            data: null,
            loading: false,
            error: 'Invalid API key.',
          });
        } else {
          setState({
            data: null,
            loading: false,
            error: 'Failed to fetch weather data.',
          });
        }
      } else {
        setState({
          data: null,
          loading: false,
          error: 'Something went wrong.',
        });
      }
    }
  };

  return { ...state, fetchWeather };
}
