import React from 'react';
import WeatherTemperatura from './WeatherTemperatura';
import WeatherExtraInfo from './WeatherExtraInfo';



const WeatherData = () => (
    <div>
<WeatherTemperatura 
    temperature = {20} 
    weatherState = {'cloud'}
    />
<WeatherExtraInfo humidity = {80} wind={"10 m/s "} />
    </div>

    
    );
    export default WeatherData;