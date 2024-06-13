import React from "react";
import Forecasts from "./Forecasts";
import MyMap from "./MyMap";
import Button from 'react-bootstrap/Button';

let center = []

function Coordinates(){
    var center_obj = {};
    const [cords, setCords] = React.useState({});


    // Функция, выводящая текст об ошибке
    const error = () => {
        console.log('Невозможно получить ваше местоположение');
    };

    // Функция, срабатывающая при успешном получении геолокации
    const success = (pos) => {
        const crd = pos.coords;

        center_obj = {
          lati: crd.latitude.toFixed(6),
          long: crd.longitude.toFixed(6)
        }
        setCords(center_obj);
        console.log('success', center_obj);

        console.log(`Широта: ${center_obj.lati} °, Долгота: ${center_obj.long} °`); 
    };

    const handleClick = () => {
        if (!navigator.geolocation) {
           console.log('Geolocation не поддерживается вашим браузером');
        } else {
            navigator.geolocation.getCurrentPosition(success, error,);
        }
    };

    const Coords = () => {
        navigator.geolocation.getCurrentPosition(success, error)
    };
    // Для первоначальной загрузки карты
    if(!cords.lenght){
        Coords();
    };

    return(
        <>
            <Forecasts cords={cords}/>
            <MyMap cords={cords} />
        </>
    );
}

export default Coordinates;