import * as React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/Forecasts.css"


function Forecasts(props) {
    const [response, setResponse] = React.useState([]);
    let [requested, weatherReq] = React.useState(false);
    let [day, oneOrMany] = React.useState(true);

    const LINK = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.cords['lati']}&lon=${props.cords['long']}&units=metric&appid=d7bb2710768b6d3b7120b7d5eae67677`;

    var forecasts = [];
    

    function ReqForecastsDays(){
        if(day === false){
            console.log(day);
            if(requested === false){
                axios.get(LINK).then(res => {
                    setResponse(res.data.list);
                    weatherReq(true);
                });
            };
        }else{
            oneOrMany(day = false);
            console.log(day);
            if(requested === false){
                axios.get(LINK).then(res => {
                    setResponse(res.data.list);
                    weatherReq(true);
                });
            };
        };    
    };

    function OneDayForecasts(){
        if(day===false){
            oneOrMany(day = true);
            console.log(day);
            if(requested === false){
                axios.get(LINK).then(res => {
                    setResponse(res.data.list);
                    weatherReq(true);  
                });
            };
        }else{
            console.log(day);
            if(requested === false){
                axios.get(LINK).then(res => {
                    setResponse(res.data.list);
                    weatherReq(true);
                });
            };
        };    
    };
    

    if(day === true){
        if(response.length > 0){
            forecasts.push(response[0]);   
        };    
    }else{
        for(let i = 0; i < response.length; i+=8) {
            forecasts.push(response[i]);
        };
    };

    console.log(forecasts);

    return (
        <>
            <Button variant="success" onClick={() => ReqForecastsDays()} className="batn">Узнать погоду на ближайшие 5 дней</Button>
            <Button variant="success" onClick={() => OneDayForecasts()}>Узнать погоду на сегодня</Button>
            <Table variant='info' striped bordered hover className='forecasts'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Дата</th>
                        <th>Погода</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map((forecast, index) => <tr key={forecast.dt}>
                        <td>{index + 1}</td>
                        <td>{forecast.dt_txt.slice(0, 10).split("-").reverse().join("-")}</td>
                        <td>{forecast.weather[0].description}</td>
                        {/* <td>{props.city_name}</td> */}
                    </tr>)}
                </tbody>
            </Table>
        </> 
    );
}

export default Forecasts;
