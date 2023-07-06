import React, {useState} from 'react';

const ShipContainer = () => {
let allShips = [];

const [ships, setShips] = useState([])

    fetch('https://api.spacexdata.com/v3/launches/')
        .then(response => response.json())
        .then((ships) => setShips(ships))
        .catch((errors) => console.log(errors.response))

    return (
        <>
            {ships.map((ships, flight_number) => {

            })}
        </>
    );
};

export default ShipContainer;