import React from 'react';
import WeatherTemperatura from './WeatherTemperatura';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';

import {
    CLOUD,
    CLOUDY,
    SUN, 
    RAIN, 
    SNOW, 
    WINDY,
    } from './../../constants/weathers';

const WeatherData = () => (
    <div className="weatherDataCont">
<WeatherTemperatura 
    temperature = {20} 
    weatherState = {CLOUDY}
    ></WeatherTemperatura> 
    <WeatherExtraInfo humidity = {80} wind={"10 m/s "} ></WeatherExtraInfo>

    </div>

    
    );
    export default WeatherData;