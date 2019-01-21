import React from 'react';
import WeatherIcons from 'react-weathericons';

const Icons = {
    cloud:"cloud",
    cloudy:"cloudy",
sunny : "day-sunny",
rain:"rain",
snow:"snow",
windy:"windy",
fog: "day-fog"

};
const getWeatherIcon = weatherState =>{
    const icon = Icons[weatherState];
    if(icon)
        return <WeatherIcons name={icon} size="2x"/>
    else
        return <WeatherIcons name={"day-sunny"} size="2x"/>
}

const WeatherTemperatura = ({temperature,weatherState}) => (
    <div>
    {
         getWeatherIcon(weatherState)
    }    
        <span>{`${temperature} C°`}</span>
    </div>
);
export default WeatherTemperatura;