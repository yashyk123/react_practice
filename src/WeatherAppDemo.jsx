import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

/**
 * Demo version of WeatherApp that uses mock data instead of real API calls
 * This allows users to test the app without needing an OpenWeatherMap API key
 */
const WeatherAppDemo = () => {
  // State management for weather data and UI controls
  const [weatherData, setWeatherData] = useState(null); // Stores the fetched weather information
  const [city, setCity] = useState(''); // Stores the user input for city name
  const [loading, setLoading] = useState(false); // Controls loading spinner display
  const [error, setError] = useState(''); // Stores error messages for invalid cities

  // Mock weather data for different cities - simulates API responses
  const mockWeatherData = {
    london: {
      name: "London",
      sys: { country: "GB", sunrise: 1640149200, sunset: 1640176800 },
      coord: { lat: 51.5074, lon: -0.1278 },
      main: { 
        temp: 12, 
        feels_like: 10, 
        humidity: 78, 
        pressure: 1013 
      },
      weather: [{ 
        main: "Clouds", 
        description: "overcast clouds", 
        icon: "04d" 
      }],
      wind: { speed: 3.5 },
      visibility: 8000
    },
    tokyo: {
      name: "Tokyo",
      sys: { country: "JP", sunrise: 1640128800, sunset: 1640160000 },
      coord: { lat: 35.6762, lon: 139.6503 },
      main: { 
        temp: 8, 
        feels_like: 6, 
        humidity: 65, 
        pressure: 1020 
      },
      weather: [{ 
        main: "Clear", 
        description: "clear sky", 
        icon: "01d" 
      }],
      wind: { speed: 2.1 },
      visibility: 10000
    },
    newyork: {
      name: "New York",
      sys: { country: "US", sunrise: 1640179200, sunset: 1640208000 },
      coord: { lat: 40.7128, lon: -74.0060 },
      main: { 
        temp: 18, 
        feels_like: 16, 
        humidity: 60, 
        pressure: 1015 
      },
      weather: [{ 
        main: "Rain", 
        description: "light rain", 
        icon: "10d" 
      }],
      wind: { speed: 4.2 },
      visibility: 7000
    },
    paris: {
      name: "Paris",
      sys: { country: "FR", sunrise: 1640151600, sunset: 1640178400 },
      coord: { lat: 48.8566, lon: 2.3522 },
      main: { 
        temp: 15, 
        feels_like: 13, 
        humidity: 72, 
        pressure: 1012 
      },
      weather: [{ 
        main: "Mist", 
        description: "mist", 
        icon: "50d" 
      }],
      wind: { speed: 2.8 },
      visibility: 5000
    },
    mumbai: {
      name: "Mumbai",
      sys: { country: "IN", sunrise: 1640128200, sunset: 1640169600 },
      coord: { lat: 19.0760, lon: 72.8777 },
      main: { 
        temp: 28, 
        feels_like: 31, 
        humidity: 85, 
        pressure: 1008 
      },
      weather: [{ 
        main: "Thunderstorm", 
        description: "thunderstorm with rain", 
        icon: "11d" 
      }],
      wind: { speed: 5.5 },
      visibility: 6000
    },
    sydney: {
      name: "Sydney",
      sys: { country: "AU", sunrise: 1640110800, sunset: 1640163600 },
      coord: { lat: -33.8688, lon: 151.2093 },
      main: { 
        temp: 32, 
        feels_like: 35, 
        humidity: 55, 
        pressure: 1018 
      },
      weather: [{ 
        main: "Clear", 
        description: "clear sky", 
        icon: "01d" 
      }],
      wind: { speed: 3.8 },
      visibility: 12000
    }
  };

  /**
   * Function to simulate API call with mock data
   * @param {string} cityName - The name of the city to fetch weather for
   */
  const fetchWeatherData = async (cityName) => {
    // Reset error state before making new request
    setError('');
    setLoading(true); // Show loading spinner
    
    // Simulate API delay for realistic experience
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Normalize city name for lookup in mock data
      const normalizedCity = cityName.toLowerCase().replace(/\s+/g, '');
      
      // Check if mock data exists for the city
      if (mockWeatherData[normalizedCity]) {
        setWeatherData(mockWeatherData[normalizedCity]); // Store the weather data in state
      } else {
        // Simulate city not found error
        throw new Error('City not found. Try: London, Tokyo, New York, Paris, Mumbai, or Sydney');
      }
      
    } catch (err) {
      // Handle errors (invalid city, etc.)
      setError(err.message);
      setWeatherData(null); // Clear previous weather data
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  /**
   * Handle form submission when user searches for weather
   * @param {Event} e - Form submission event
   */
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    
    // Validate that city input is not empty
    if (city.trim()) {
      fetchWeatherData(city.trim());
    } else {
      setError('Please enter a city name');
    }
  };

  /**
   * Get weather icon URL from OpenWeatherMap
   * @param {string} iconCode - Icon code from API response
   * @returns {string} Complete icon URL
   */
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  /**
   * Determine background gradient based on temperature
   * @param {number} temp - Temperature in Celsius
   * @returns {string} CSS gradient string
   */
  const getBackgroundGradient = (temp) => {
    if (temp <= 0) {
      return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; // Cold - Blue/Purple
    } else if (temp <= 15) {
      return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'; // Cool - Pink/Red
    } else if (temp <= 25) {
      return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'; // Mild - Light Blue
    } else {
      return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'; // Warm - Green/Teal
    }
  };

  /**
   * useEffect hook to load default weather data when component mounts
   * This demonstrates the useEffect hook usage for initial data loading
   */
  useEffect(() => {
    // Load default city weather on component mount
    fetchWeatherData('London');
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div className="weather-app">
      {/* Header section with title and search form */}
      <div className="header">
        <h1 className="title">🌤️ Weather Forecast Demo</h1>
        <p className="subtitle">Interactive weather app with mock data - no API key required!</p>
        
        {/* Search form for city input */}
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-group">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)} // Update city state on input change
              placeholder="Try: London, Tokyo, New York, Paris, Mumbai, Sydney"
              className="city-input"
              disabled={loading} // Disable input while loading
            />
            <button 
              type="submit" 
              className="search-button"
              disabled={loading} // Disable button while loading
            >
              {loading ? '🔄' : '🔍'} {/* Show different icon based on loading state */}
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
      </div>

      {/* Main content area */}
      <div className="content">
        {/* Error message display */}
        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        {/* Loading spinner */}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching weather data...</p>
          </div>
        )}

        {/* Weather data display - conditional rendering based on data availability */}
        {weatherData && !loading && !error && (
          <div 
            className="weather-card"
            style={{ 
              background: getBackgroundGradient(weatherData.main.temp) 
            }}
          >
            {/* City name and country */}
            <div className="location">
              <h2>{weatherData.name}, {weatherData.sys.country}</h2>
              <p className="coordinates">
                📍 {weatherData.coord.lat}°, {weatherData.coord.lon}°
              </p>
            </div>

            {/* Main weather info section */}
            <div className="weather-main">
              {/* Weather icon */}
              <div className="weather-icon">
                <img 
                  src={getWeatherIcon(weatherData.weather[0].icon)}
                  alt={weatherData.weather[0].description}
                />
              </div>

              {/* Temperature display */}
              <div className="temperature">
                <span className="temp-value">{Math.round(weatherData.main.temp)}°</span>
                <span className="temp-unit">C</span>
              </div>

              {/* Weather description */}
              <div className="weather-description">
                <p className="main-description">{weatherData.weather[0].main}</p>
                <p className="detailed-description">
                  {weatherData.weather[0].description}
                </p>
              </div>
            </div>

            {/* Additional weather details */}
            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-icon">🌡️</span>
                <span className="detail-label">Feels like</span>
                <span className="detail-value">{Math.round(weatherData.main.feels_like)}°C</span>
              </div>

              <div className="detail-item">
                <span className="detail-icon">💧</span>
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{weatherData.main.humidity}%</span>
              </div>

              <div className="detail-item">
                <span className="detail-icon">💨</span>
                <span className="detail-label">Wind Speed</span>
                <span className="detail-value">{weatherData.wind.speed} m/s</span>
              </div>

              <div className="detail-item">
                <span className="detail-icon">👁️</span>
                <span className="detail-label">Visibility</span>
                <span className="detail-value">{(weatherData.visibility / 1000).toFixed(1)} km</span>
              </div>

              <div className="detail-item">
                <span className="detail-icon">🏔️</span>
                <span className="detail-label">Pressure</span>
                <span className="detail-value">{weatherData.main.pressure} hPa</span>
              </div>

              <div className="detail-item">
                <span className="detail-icon">🌅</span>
                <span className="detail-label">Sunrise</span>
                <span className="detail-value">
                  {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
                </span>
              </div>
            </div>

            {/* Footer with last updated time */}
            <div className="weather-footer">
              <p>Last updated: {new Date().toLocaleString()} (Demo Mode)</p>
            </div>
          </div>
        )}
      </div>

      {/* Demo info section */}
      <div className="api-info">
        <p>
          🎮 <strong>Demo Mode:</strong> This is a demonstration using mock data. 
          Available cities: London, Tokyo, New York, Paris, Mumbai, Sydney.
        </p>
        <p>
          📝 For real weather data, use the main WeatherApp component with an API key from{' '}
          <a 
            href="https://openweathermap.org/api" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            OpenWeatherMap
          </a>
        </p>
      </div>
    </div>
  );
};

export default WeatherAppDemo;