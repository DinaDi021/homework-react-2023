import React from 'react';

const ShipComponent = () => {
let ships

    fetch('https://api.spacexdata.com/v3/launches/')
        .then(response => response.json())
        .then(data => ships = data)
    return (
        <div>

        </div>
    );
};

export default ShipComponent;