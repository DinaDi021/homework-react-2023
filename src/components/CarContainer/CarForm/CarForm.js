import styles from './CarForm.module.css'
import {useForm} from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {CarsServices} from "../../../services/apiServices";
import {carFormSchema} from "./validators/validators";

const CarForm = ( {setOnSave, carForUpdate, setCarForUpdate}) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
        setValue
    } = useForm({
        resolver: joiResolver(carFormSchema),
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    const save = async (data) => {
        await CarsServices.saveCar(data, setOnSave, reset);
        setOnSave((prev) => !prev);
        reset();
    };

    const handleUpdate = async (car) => {
        await CarsServices.updateCar(carForUpdate.id, car, setOnSave, setCarForUpdate, reset);
        setOnSave((prev) => !prev);
        setCarForUpdate(null);
        reset();
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(!carForUpdate?save:handleUpdate)}>
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

export {CarForm}