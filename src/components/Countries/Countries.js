import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [counriteis, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Gello form countries : {counriteis.length}</h1>
            <div className='countries-container'>
                {
                    counriteis.map(country => <Country key={country.name.common}  country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;