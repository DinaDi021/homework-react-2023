import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../../services";
import {carsActions} from "../../redux";
import {Car} from "./Car/Car";
import styles from './Car/Cars.module.css'

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(store => store.cars);

    useEffect(() => {
        carsService.getAll()
            .then(({data}) =>
                dispatch(carsActions.set(data)))
    }, [dispatch])


    return (
        <div className={styles.wrapper}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};