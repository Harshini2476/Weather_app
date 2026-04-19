import { useMemo } from 'react';
import { CloudSun } from 'lucide-react';

import { useWeather } from './components/useWeather';
import { getWeatherTheme, themeConfig } from './components/weatherTheme';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';

export default function App() {
  const { data, loading, error, fetchWeather } = useWeather();

  const theme = useMemo(() => {
    if (!data) return themeConfig.default;
    const key = getWeatherTheme(data?.condition);
    return themeConfig[key] || themeConfig.default;
  }, [data]);

  return (
    <div className="app-root" style={{ background: theme.gradient }}>
      <div className="app-overlay"></div>

      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <div className="app-logo">
            <CloudSun size={32} className="logo-icon" />
            <div>
              <h1 className="app-title">WeatherNow</h1>
              <p className="app-subtitle">
                Real-time weather
              </p>
            </div>
          </div>
        </header>

        {/* Search */}
        <SearchBar onSearch={fetchWeather} loading={loading} />

        {/* Main */}
        <main className="app-main">
          {loading && <LoadingSpinner />}

          {error && !loading && (
            <div className="error-card">
              <div className="error-icon">!</div>
              <p className="error-message">{error}</p>
            </div>
          )}

          {data && !loading && !error && (
            <WeatherDisplay data={data} />
          )}

          {!data && !loading && !error && (
            <div className="welcome-state">
              <CloudSun size={80} className="welcome-icon" />
              <h2 className="welcome-title">
                Check the weather anywhere
              </h2>
              <p className="welcome-text">
                Enter a city name above to get current weather conditions
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
