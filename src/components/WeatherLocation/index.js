import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import {
    SUN,

} from './../../../constants/weathers';



const data = {

    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind:'10 m/s',


}

const WeatherLocation = () => (
    <div>
<Location city = {'Colombia'}></Location>
 <WeatherData data= {data}></WeatherData>
 </div>
);
// en la pagina de facebook esta mas sobre proptypes

export default WeatherLocation ;