import React from "react";
import "../styles/MyMap.css"

import { YMaps, Map, Placemark, } from "@pbe/react-yandex-maps";


function MyMap(props){

    return(
        <>
            <YMaps>
                <div>
                    <Map defaultState={{ center: [props.cords['lati'], props.cords['long']],
                         zoom: 10, 
                         controls: ["zoomControl", "fullscreenControl"],}}
                         modules={["control.ZoomControl", "control.FullscreenControl"]}
                    >                       
                    </Map>
                </div>
            </YMaps>
        </>
    );
}


export default MyMap;