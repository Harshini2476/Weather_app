export function getWeatherTheme(condition) {
  const lower = condition?.toLowerCase() || '';

  if (lower === 'clear') return 'clear';
  if (lower === 'clouds') return 'clouds';
  if (lower === 'rain') return 'rain';
  if (lower === 'drizzle') return 'drizzle';
  if (lower === 'thunderstorm') return 'thunderstorm';
  if (lower === 'snow') return 'snow';

  if (
    ['mist', 'smoke', 'haze', 'dust', 'fog', 'sand', 'ash', 'squall', 'tornado']
      .includes(lower)
  ) {
    return 'fog';
  }

  return 'default';
}

export const themeConfig = {
  clear: {
    gradient: 'linear-gradient(135deg, #f97316, #facc15)',
    label: 'Clear Sky',
  },
  clouds: {
    gradient: 'linear-gradient(135deg, #64748b, #cbd5e1)',
    label: 'Cloudy',
  },
  rain: {
    gradient: 'linear-gradient(135deg, #1e3a5f, #2563eb)',
    label: 'Rainy',
  },
  drizzle: {
    gradient: 'linear-gradient(135deg, #0f4c75, #3b82f6)',
    label: 'Drizzle',
  },
  thunderstorm: {
    gradient: 'linear-gradient(135deg, #111827, #374151)',
    label: 'Thunderstorm',
  },
  snow: {
    gradient: 'linear-gradient(135deg, #bfdbfe, #f0f9ff)',
    label: 'Snowy',
  },
  fog: {
    gradient: 'linear-gradient(135deg, #6b7280, #d1d5db)',
    label: 'Foggy',
  },
  default: {
    gradient: 'linear-gradient(135deg, #0f172a, #334155)',
    label: 'Weather',
  },
};
