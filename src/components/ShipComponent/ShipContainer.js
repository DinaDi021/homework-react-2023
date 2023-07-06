import React, {useEffect, useState} from 'react';
import ShipComponent from "./ShipComponent.js";

const ShipContainer = () => {

const [ships, setShips] = useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then((ships) => setShips(ships))
            .catch((errors) => console.log(errors.response))
        },[])


    return (
        <>
            {/*{ships.map((ship) => {*/}

            {/*})}*/}
        </>
    );
};

export default ShipContainer;