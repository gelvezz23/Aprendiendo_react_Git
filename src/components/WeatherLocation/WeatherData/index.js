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
    const WeatherData = ({ data }) => {
        const { temperature, weatherState, humidity, wind } = data;
        return (
        <div className="weatherDataCont" >
            <WeatherTemperatura 
                temperature={temperature} 
                weatherState={weatherState} 
            />
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>
        );
    };
    
    export default WeatherData;