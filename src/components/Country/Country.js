import React from 'react';
import './Country.css'

const Country = (props) => {
    
    const {name, flags, capital, population} = props.country;

    return (
        <div className='country bg-success'>
            <h1> {name.common}</h1>
            <img src={flags.svg} alt="" />
            <h3>Capital: {capital} <br /> Population: {population}</h3>
        </div>
    );
};

export default Country;