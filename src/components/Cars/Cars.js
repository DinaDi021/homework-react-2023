import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { getCars} from "../../redux";
import {Car} from "./Car/Car";
import styles from './Car/Cars.module.css'

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(store => store.cars);

    useEffect(() => {
                dispatch(getCars())
    }, [dispatch])


    return (
        <div className={styles.wrapper}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};