import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => (
// Destructuring const { city , city2 , city3, } = prosp; depende de los parametros que traiga el props
// Destructuring const Location = ({city}) => { asi se puede traer el parametro que quiero }

<div>
  <h1>
    {city}
  </h1>
</div>

);
Location.propTypes = {
 city : PropTypes.string.isRequired,

}
export default Location;