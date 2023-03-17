import React from 'react'


function City({ city }) {

    return (
        <div>
            <h1>{city.name}</h1>
            <h2>{city.main.temp} °C</h2>
            <h3>{city.weather[0].description}</h3>
        </div>
    )
}

export default City