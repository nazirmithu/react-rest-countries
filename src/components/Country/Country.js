import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    // Destructuring
    const {area, region, population, name, flags} = props.country;
    return (
        <div className='country bg-warning'>

            {/* Destructuring Option */}
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>

            {/* Second Option 
            <h2>Country Name: {props.country.name.common}</h2>
            <p>Population: {props.country.population}</p>
            <p><small>Region: {props.country.region}</small></p>
            <p><small>Area: {props.country.area}</small></p> */}
            
            {/* First Option 
            <h2>Country Name: {props.name.common}</h2>
            <p>Population: {props.population}</p>
            <p><small>Region: {props.region}</small></p>
            <p><small>Area: {props.area}</small></p> */}
        </div>
    );
};

export default Country;