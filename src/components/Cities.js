import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Cities.css";
import data from "../cities.json";
import Coordinates from "./Сoordinates";
import City from "./City";

function Cities(){
    let [response, getCities] = React.useState([]);
    let [requested, citiesReq] = React.useState(false);
    var cities = [];

    function ReqCities(){
        if(requested === false){
            getCities(data);
            console.log(response);
            citiesReq(true);
        }else{
            getCities([]);
            citiesReq(false);
            cities = [];
        };     
    };    

    if(response.length != 0){
        cities = response;
    };
    
    
    return(
        <>
            <Button variant="success" onClick={() => ReqCities()}>Список городов для прогноза</Button>
            <Table variant='info' striped bordered hover className="cities">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Город</th>
                        <th>Страна</th>
                        <th>Выбрать город</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map((city, index) => <City key={city.id} city={city} index={index}/>)}
                </tbody>
            </Table>
            <Coordinates/>
        </> 
    );
}


export default Cities;