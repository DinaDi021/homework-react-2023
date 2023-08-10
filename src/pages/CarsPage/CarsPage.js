import React from 'react';
import {Cars} from "../../components";
import {CarForm} from "../../components/CarForm/CarForm";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};