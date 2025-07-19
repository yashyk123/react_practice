import React from 'react';
import WeatherAppDemo from './WeatherAppDemo';
// import WeatherApp from './WeatherApp'; // Use this for real API integration
import './App.css';

/**
 * Main App component that renders the Weather Forecast application
 * This demonstrates React component composition and importing
 * 
 * Note: Using WeatherAppDemo by default for immediate demonstration
 * Switch to WeatherApp when you have an OpenWeatherMap API key
 */
function App() {
  return (
    <div className="App">
      {/* Render the demo weather application component */}
      <WeatherAppDemo />
      
      {/* For real API integration, uncomment the line below and comment the line above */}
      {/* <WeatherApp /> */}
    </div>
  );
}

export default App;