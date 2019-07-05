import React,{ Component} from 'react';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../constants/api_url';
import WeatherData from './WeatherData';
import './style.css';
import {
    SUN
} from './../constants/weathers';



const data = {
    temperature: 0,
    weatherState: SUN,
    humidity: 0,
    wind:'0 m/s',
    city : '...',
}


class WeatherLocation extends Component {
    /**
     * un constructor donde creamos un estado que tiene una ciudad 
     * y una data que es la que tenemos mas arriba
     */
constructor(){
    super();
    this.state = {
        city: '...',
        data: data,
    }
}


handleUpdateClick = () =>{
        
        fetch(api_weather).then(resolve =>  { 
            
            return resolve.json();
        }).then((data) => {
            
            const newWeather = transformWeather(data);
            console.log(newWeather);
            
            this.setState({ 
                city: newWeather.city,
                data: newWeather,
                
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