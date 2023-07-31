import {useEffect, useState} from "react";
import {Car} from "../Car/Car";
import {CarsServices} from "../../../services/apiServices";



const Cars = ({onSave,setOnSave,setCarForUpdate}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarsServices.CarsServices().then(({data}) => setCars(data))
    }, [onSave])

    return (
        <div>
            {cars?.map((car) => <Car
                key={car.id}
                car={car}
                setOnSave={setOnSave}
                setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};