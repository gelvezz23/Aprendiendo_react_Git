import React,{ Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import './style.css';
import {
    SUN,
    CLOUD,
    WINDY,

} from './../constants/weathers';

const location = "Buenos Aires,ar";
const apikey = "43cf678aca102b58f50ae4141e7b3473";
const url_base = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base}?q=${location}&appid=${apikey}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind:'10 m/s',
}

const data2 = {

    temperature: 15,
    weatherState: CLOUD,
    humidity: 20,
    wind:'10 m/s',
}
/**
 * ESTO ES UNA function 
 * 
 * const WeatherLocation = () => (
    <div>
<Location city = {'Colombia'}></Location>
 <WeatherData data= {data}></WeatherData>
 </div>
);
 * 
 */
class WeatherLocation extends Component {
    /**
     * un constructor donde creamos un estado que tiene una ciudad 
     * y una data que es la que tenemos mas arriba
     */
constructor(){
    super();
    this.state = {
        city: 'Cucuta',
        data : data,
    };
}

    handleUpdateClick = () =>{
        fetch(api_weather)
        console.log('actualizado');
        this.setState({
            city: 'Cucuta !',
            data : data2,
        });
    }
    render() {
/**
 * variable { dato1 , dato2} = this.Donde estoy tomando el dato
 */
        const {city , data } = this.state;

        return(
        <div className="weatherLocationCont">
            <Location city = {city}></Location>
            <WeatherData data= {data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );

    }
    
}
// en la pagina de facebook esta mas sobre proptypes

export default WeatherLocation ;