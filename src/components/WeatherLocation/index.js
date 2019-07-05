import React,{ Component} from 'react';
import CircularProgress from '@material-ui/core';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../constants/api_url';
import WeatherData from './WeatherData';
import './style.css';





class WeatherLocation extends Component {
    /**
     * un constructor donde creamos un estado que tiene una ciudad 
     * y una data que es la que tenemos mas arriba
     */
constructor(){
    super();
    this.state = {
        city: '...',
        data: null,
    }
    console.log("___________________");
    console.log("Constructor");
}

componentDidMount(){
    console.log("___________________");
    console.log("componentDidMount");
    this.handleUpdateClick();
}
componentDidUpdate(prevProps,prepState){
    console.log("___________________");
    console.log("componentDidMount");
    // esto es lo recomendado
   
}




handleUpdateClick = () =>{
        console.log("Resultados de HandleUpdateClick")
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
console.log("___________________");
console.log("render");
        const {city , data} = this.state;

        return(
        <div className="weatherLocationCont">
            <Location city = { city }></Location>
           { data ? <WeatherData data = { data }></WeatherData> : "cargando ..." }
          
        </div>
        );

    }
    
}
// en la pagina de facebook esta mas sobre proptypes
// <button onClick={ this.handleUpdateClick }>Actualizar</button>
export default WeatherLocation ;