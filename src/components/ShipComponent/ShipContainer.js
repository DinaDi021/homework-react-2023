import React, {useEffect, useState} from 'react';
import ShipComponent from "./ShipComponent.js";

export const ShipContainer = () => {

const [ships, setShips] = useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(ships => {
                const filteredShips = ships.filter(ship => ship.launch_year !== "2020");
                setShips(filteredShips);
            })
            .catch((errors) => console.log(errors.response))
        },[])


    return (
        <>
            {ships.map((ship) =>
                <ShipComponent
                    key={ship.flight_number}
                    ship={ship}
                />
            )}
        </>
    );
};