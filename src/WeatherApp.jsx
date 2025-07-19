import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  // State management for weather data and UI controls
  const [weatherData, setWeatherData] = useState(null); // Stores the fetched weather information
  const [city, setCity] = useState(''); // Stores the user input for city name
  const [loading, setLoading] = useState(false); // Controls loading spinner display
  const [error, setError] = useState(''); // Stores error messages for invalid cities

  // OpenWeatherMap API configuration
  const API_KEY = 'your_api_key_here'; // Replace with your actual API key
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  /**
   * Function to fetch weather data from OpenWeatherMap API
   * @param {string} cityName - The name of the city to fetch weather for
   */
  const fetchWeatherData = async (cityName) => {
    // Reset error state before making new request
    setError('');
    setLoading(true); // Show loading spinner
    
    try {
      // Construct API URL with city name, API key, and units in Celsius
      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      // Check if the API response is successful
      if (!response.ok) {
        throw new Error('City not found. Please check the spelling and try again.');
      }
      
      // Parse the JSON response
      const data = await response.json();
      setWeatherData(data); // Store the weather data in state
      
    } catch (err) {
      // Handle errors (network issues, invalid city, etc.)
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
        <h1 className="title">🌤️ Weather Forecast</h1>
        <p className="subtitle">Get real-time weather information for any city worldwide</p>
        
        {/* Search form for city input */}
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-group">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)} // Update city state on input change
              placeholder="Enter city name (e.g., London, Tokyo, New York)"
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
              <p>Last updated: {new Date().toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>

      {/* Instructions for getting API key */}
      <div className="api-info">
        <p>
          📝 <strong>Note:</strong> To use this app, get your free API key from{' '}
          <a 
            href="https://openweathermap.org/api" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            OpenWeatherMap
          </a>{' '}
          and replace 'your_api_key_here' in the code.
        </p>
      </div>
    </div>
  );
};

export default WeatherApp;