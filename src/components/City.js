import React from "react";
import Button from 'react-bootstrap/Button';

import "../styles/City.css"

function City(props) {
    const [selected, changeSelected] = React.useState(false);

    let city_name = '';

    function takeCity(){
        if(selected === false){
            city_name = props.city.name;
            console.log(city_name);
            changeSelected(true);
        }else{
            city_name = '';
            changeSelected(false);
        };
    };

    return(
        <tr className={selected ? "selected-city": ""}>
            <td>{props.index + 1}</td>
            <td>{props.city.name}</td>
            <td>{props.city.country}</td>
            <td>
                {selected ? 
                <Button variant="danger" onClick={() => takeCity()}>Снять</Button> :
                <Button variant="light" onClick={() => takeCity()}>Выбрать</Button> 
                }
            </td>
        </tr>
    );
}

export default City;