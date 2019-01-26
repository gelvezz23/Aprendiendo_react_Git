import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN, 
    RAIN, 
    SNOW, 
    WINDY,
    } from './../../constants/weathers';

    import './style.css';

const Icons = {
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
[SUN] : "day-sunny",
[RAIN]:"rain",
[SNOW]:"snow",
[WINDY]:"windy"


};
const getWeatherIcon = weatherState =>{
    const icon = Icons[weatherState];
    if(icon)
        return <WeatherIcons name={icon} size="2x"/>
    else
        return <WeatherIcons name={"day-sunny"} size="2x"/>
}

const WeatherTemperatura = ({temperature,weatherState}) => (
    <div className="weatherTemperatureCont">
    {
         getWeatherIcon(weatherState)
    }    
        <span>{`${temperature} C°`}</span>
    </div>
);

WeatherTemperatura.PropTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}
export default WeatherTemperatura;