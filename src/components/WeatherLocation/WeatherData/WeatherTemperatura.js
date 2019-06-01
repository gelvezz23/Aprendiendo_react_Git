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
    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/>
}

const WeatherTemperatura = ({temperature,weatherState}) => (
    <div className="weatherTemperatureCont">
    {
         getWeatherIcon(weatherState)
    }    
        <span className="temperature">{`${temperature} `}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperatura.PropTypes = { 
    temperature: PropTypes.number.isRequired, 
    weatherState: PropTypes.string.isRequired, 
} 
export default WeatherTemperatura;