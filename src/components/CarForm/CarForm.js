import React from 'react';
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import styles from './CarForm.module.css'
import {carsActions} from "../../redux";
import {carsService} from "../../services";


const CarForm = ( { carForUpdate}) => {
    const dispatch = useDispatch();

    const schema = Joi.object({
        brand: Joi.string().required(),
        price: Joi.number().required(),
        year: Joi.number().required()
    });

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(schema),
    });

    const onSubmit = (data) => {
        if (!carForUpdate) {
            carsService.create(data)
                .then(() => {
                    dispatch(carsActions.create(data))
                })
        } else {
                carsService.updateById(carForUpdate.id, data)
                    .then(() => {
                        dispatch(carsActions.updt({ id: carForUpdate.id, updatedInfo: data }));
                    });
            }
        reset();
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Brand:
                    <br/>
                    <input type="text" {...register('brand', { required: true })}/>
                    {errors.brand && <span>{errors.brand.message}</span>}
                </label>
                <label>
                    Price:
                    <br/>
                    <input type="text" {...register('price', { required: true })}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </label>
                <label>
                    Year:
                    <br/>
                    <input type="text" {...register('year', { required: true })}/>
                    {errors.year && <span>{errors.year.message}</span>}
                </label>

                <button type='submit'>{!carForUpdate?'Save':'Update'}</button>
            </form>
        </div>
    )
}

export {CarForm};