import { Droplets, Wind, Eye, Gauge, Thermometer, MapPin } from 'lucide-react';

function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value}</span>
      </div>
    </div>
  );
}

export default function WeatherDisplay({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  const visibilityKm = (data.visibility / 1000).toFixed(1);

  return (
    <div className="weather-card">
      {/* Header */}
      <div className="weather-header">
        <div className="city-info">
          <div className="city-name-row">
            <MapPin size={20} className="location-icon" />
            <h2 className="city-name">
              {data.city}, <span className="country">{data.country}</span>
            </h2>
          </div>
          <p className="weather-description">{data.description}</p>
        </div>

        <img
          src={iconUrl}
          alt={data.condition}
          className="weather-icon-img"
        />
      </div>

      {/* Temperature */}
      <div className="temperature-section">
        <span className="temperature">{data.temperature}°C</span>
        <span className="feels-like">
          Feels like {data.feelsLike}°C
        </span>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <StatCard
          icon={<Droplets size={20} />}
          label="Humidity"
          value={`${data.humidity}%`}
        />
        <StatCard
          icon={<Wind size={20} />}
          label="Wind Speed"
          value={`${data.windSpeed} m/s`}
        />
        <StatCard
          icon={<Eye size={20} />}
          label="Visibility"
          value={`${visibilityKm} km`}
        />
        <StatCard
          icon={<Gauge size={20} />}
          label="Pressure"
          value={`${data.pressure} hPa`}
        />
      </div>

      {/* Condition */}
      <div className="condition-badge">
        <Thermometer size={14} />
        <span>{data.condition}</span>
      </div>
    </div>
  );
}
