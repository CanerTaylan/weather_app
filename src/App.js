
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './asset/style.css';
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiFog, WiSnow } from 'react-icons/wi';
import { GoAlert } from "react-icons/go";
import Info from './Component/Info';


function App() {
    const [info, setInfo] = useState([]);
    const [city, setCity] = useState(""); // içi boş bir strng olması için çift tırnak yazıyoruz
    const [state, setState] = useState(false);
    const [alertNoCity, setAlertNoCity] = useState(false);

    //?  eğer boş bırakılırsa bir kere değişşikliği yapar, anlık güncelleme için state i yazmak gerek
    // useEffect(() => console.log(city), [city]);



    const handleChange = async () => {
        const apiKey = "a6751d101ed729954638c0e4cc669f0e";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;


        try {
            const response = await axios(url);
            if (response.data.cod === 200) {
                setInfo(response.data);
                setState(true);
            } else {
                setAlertNoCity(true);
            }
        } catch (error) {
            setAlertNoCity(true);

        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAlertNoCity(false);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [alertNoCity]);



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

                        <div className="popup-alert">
                            {alertNoCity && (<div className="alert alert-danger d-flex justify-content-center" role="alert">
                                <div className='text-center'><GoAlert />   Aradığınız şehir bulunamıyor. Kontrol edip tekrar deneyiniz.</div>
                            </div>)}
                        </div>
                        <Info info={info} state={state}></Info>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
