import React, {useEffect} from 'react';
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import styles from './CarForm.module.css'
import {carsActions, getCars} from "../../redux";
import {carsService} from "../../services";


const CarForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(store => store.cars)

    const schema = Joi.object({
        brand: Joi.string().required(),
        price: Joi.number().required(),
        year: Joi.number().required()
    });

    const {
        handleSubmit,
        register,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(schema),
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue])

    const onSubmit = (data) => {
        if (carForUpdate) {
            carsService.updateById(carForUpdate.id, data)
                .then((updatedData) => {
                    dispatch(carsActions.update(updatedData));
                    dispatch(getCars())
                    reset()
                });
        } else {
            carsService.create(data)
                .then(createdData => {
                    dispatch(carsActions.create(createdData.data));
                    reset()
                });
        }
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

                <button type='submit'>{carForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    )
}

export {CarForm};