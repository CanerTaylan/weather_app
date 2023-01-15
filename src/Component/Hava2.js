import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react'
import './asset/style.css';
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiFog, WiSnow } from 'react-icons/wi';

import Info from './Info';


function Hava2() {
    const [info, setInfo] = useState([]);
    const [city, setCity] = useState(""); // içi boş bir strng olması için çift tırnak yazıyoruz
    const [state, setState] = useState(false);
    useEffect(() => console.log(city), [city]);  // eğer boş bırakılırsa bir kere değişşikliği yapar, anlık güncelleme için state i yazmak gerek
    // const [info, setInfo] = useState([]);



    const handleChange = async () => {
        const apiKey = "a6751d101ed729954638c0e4cc669f0e";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;
        await axios(url).then(response => setInfo(response.data));
        console.log(info);
        setState(true);


    }



    return (
        <div>
            <div className="container-fluid">
                <div className="main row justify-content-center align-items-center text-center">
                    <div className="header col-10 col-md-8">
                        <h1>Günlük Hava Durumu</h1>
                        <hr />
                        <div className="header-icon col-12 gap-2">
                            <div><WiDaySunny /></div>
                            <div><WiCloudy /></div>
                            <div><WiRain /></div>
                            <div><WiFog /></div>
                            <div> <WiSnow /></div>
                        </div>
                        <div>
                            <Form onSubmit={(e) => { e.preventDefault(); handleChange() }} className="form">
                                <Form.Group className="mb-3" >
                                    <Form.Control value={city} onChange={(e) => setCity(e.target.value)} type="text" className='inputText' placeholder='Şehri giriniz' />
                                </Form.Group>
                                <Button className="btn btn-info my-2" type='submit'>
                                    Havadurumunu Getir
                                </Button>
                            </Form>
                        </div>
                    </div>

                    <div className="info col-10 col-lg-6">
                        <Info info={info} state={state}></Info>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hava2