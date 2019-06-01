import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <WeatherLocation></WeatherLocation>
      
      </div>
    );
  }
}
/**
 * API openweathermap
 * https://home.openweathermap.org
 * api.openweathermap.org/data/2.5/weather?q={city name}&appid={apikey}
 * apikey = {43cf678aca102b58f50ae4141e7b3473}
 */
export default App;
