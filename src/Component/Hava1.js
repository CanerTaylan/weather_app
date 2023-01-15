import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import City from './City';
const mainCity = ("Ankara")

function Hava1() {
    const key = "a6751d101ed729954638c0e4cc669f0e";
    const [search, setSearch] = useState(mainCity);
    const [city, setCity] = useState();
    useEffect(() => {
        async function getWeather() {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric&lang=tr`);
                console.log(response);
                setCity(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getWeather();

    }, [search]);
    // console.log(search);
    return (
            <div className="container">

                <div className="row">
                    <div className="col-8 mt-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="InputCity" className='form-label'>Şehir :</label>
                                <input onInput={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="" aria-label="weather" aria-describedby="basic-addon1"></input>
                            </div>
                            <button type="submit" className='btn btn-primary' >Submit</button>
                        </form>



                        {city && <City city={city}></City>}
                        {/* Eğer city datası yoksa o componentin içine bir şey gitmiyor ve hata veriyor. Bu yeni kodda ise react'e şunu söylüyoruz: Eğer city datası yoksa hiçbir şey yazdırma, varsa bana bu componenti göster. */}
                    </div>


                </div>


            </div>


    )
}

export default Hava1