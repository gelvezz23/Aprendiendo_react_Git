import React from 'react';
import WeatherTemperatura from './WeatherTemperatura';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    CLOUD,
CLOUDY,
SUN, 
RAIN, 
SNOW, 
WINDY,
} from './weathers';

const WeatherData = () => (
    <div>
<WeatherTemperatura 
    temperature = {20} 
    weatherState = {CLOUDY}
    />
<WeatherExtraInfo humidity = {80} wind={"10 m/s "} />
    </div>

    
    );
    export default WeatherData;