import {useEffect, useState} from "react";
import {Car} from "../Car/Car";

const Cars = ({onSave}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(value => value.json()).then(value => setCars(value))
    }, [onSave])

    const handleUpdate = (id, updatedData) => {
        // fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify(updatedData),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Car updated:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error updating car:', error);
        //     });
    };


    const handleDelete = (id) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Car deleted');
                    setCars((prevCars) => prevCars.filter((car) => car.id !== id));
                } else {
                    console.error('Failed to delete car');
                }
            })
            .catch((error) => {
                console.error('Error deleting car:', error);
            });
    };
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} onUpdate={handleUpdate} onDelete={handleDelete}/>)}
        </div>
    );
};

export {Cars};