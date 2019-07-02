import React,{ Component} from 'react';
import Location from './Location';
import convert from 'convert-units';
import WeatherData from './WeatherData';
import './style.css';
import {
    SUN
} from './../constants/weathers';

const location = "Buenos Aires,ar";
const apikey = "43cf678aca102b58f50ae4141e7b3473";
const url_base = "http://api.openweathermap.org/data/2.5/weather";
//&units=metric <- para convertir a la unidad de grados centi
const api_weather = `${url_base}?q=${location}&appid=${apikey}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind:'10 m/s',
}


class WeatherLocation extends Component {
    /**
     * un constructor donde creamos un estado que tiene una ciudad 
     * y una data que es la que tenemos mas arriba
     */
constructor(){
    super();
    this.state = {
        city: 'algo',
        data: data,
    }
}
getTemp = (kelvin) => {
    return convert(kelvin).from("K").to("C")

}
getWeatherState = weather_data => {
    return SUN;
}

getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const  weatherState = this.getWeatherState(weather_data);
    const temperature = this.getTemp(temp);
    
    const data = {
            humidity,
            temperature,
            weatherState,
            wind:` ${speed} m/s `,
    }
    return data;
}

handleUpdateClick = () =>{
        
        fetch(api_weather).then(resolve =>  { 
            
            return resolve.json();
        }).then((data) => {
            
            const newWeather = this.getData(data);
            console.log(newWeather);
            
            this.setState({ 
                city:'algo x2',
                data:newWeather,
                
            }); 
                
        });    
}

render() {
/**
 * variable { dato1 , dato2} = this.Donde estoy tomando el dato
 */
        const {city , data} = this.state;

        return(
        <div className="weatherLocationCont">
            <Location city = { city }></Location>
            <WeatherData data = { data }></WeatherData>
            <button onClick={ this.handleUpdateClick }>Actualizar</button>
        </div>
        );

    }
    
}
// en la pagina de facebook esta mas sobre proptypes

export default WeatherLocation ;