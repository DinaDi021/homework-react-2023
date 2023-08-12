import React from 'react';

import styles from './Cars.module.css'
import {useDispatch} from "react-redux";
import {carsActions, setCarForUpdate} from "../../../redux";
import {carsService} from "../../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deletedCar = () => {
        carsService.deleteById(id)
            .then(() => {
                dispatch(carsActions.del(id))})
    };

    const carForUpdate = () => {
        dispatch(carsActions.update(car));
    };

    return (
        <div className={styles.cardCar}>
            <h4>id: {id}</h4>
            <h4>brand: {brand}</h4>
            <h4>price: {price}</h4>
            <h4>year: {year}</h4>
            <button onClick={carForUpdate}>Update</button>
            <button onClick={deletedCar}>Delete</button>
        </div>
    );
};

export {Car};