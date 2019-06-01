import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({humidity , wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText" >{`humedad: ${humidity}% - `}</span>
        <span className="extraInfoText" >{`vientos: ${wind} `}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,


};
export default WeatherExtraInfo;

