import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { WiThermometer } from 'react-icons/wi';




function Info({ info, state }) {
    const apiKey = "a6751d101ed729954638c0e4cc669f0e";


    return (


        <div>

            {
                state ?
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active className='city'>
                            {info.name} - {info.sys.country}
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className='temp'><WiThermometer className='icon' />Sıcaklık : <span>{Math.round(info.main.temp)}°c</span> </ListGroup.Item>
                        <ListGroup.Item as="li" className='temp'><WiThermometer className='icon' />Hissedilen Sıcaklık : <span> {Math.round(info.main.feels_like)}°c</span> </ListGroup.Item>
                        <ListGroup.Item as="li">sunrise : {info.sys.sunrise}</ListGroup.Item>
                        <ListGroup.Item as="li"  className='weather'>
                            <img className='weather-icon'
                                id="wicon"
                                src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
                                alt="weather icon">
                            </img>
                            <span>{info.weather[0].description}</span></ListGroup.Item>
                        <ListGroup.Item>
                            <img src={`https://tile.openweathermap.org/map/precipitation_new/25/${info.coord.lat}/${info.coord.lon}.png?appid=${apiKey}`} alt="" />

                        </ListGroup.Item>
                    </ListGroup>
                    : null
            }
        </div>










    )
}


export default Info