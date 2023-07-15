import styles from './CarForm.module.css'
import {useForm} from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import {useEffect} from "react";

const CarForm = ( {setOnSave, carForUpdate, setCarForUpdate}) => {

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
        setValue
    } = useForm({
        resolver: joiResolver(schema),
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    const save = (data) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((response) => response.json())
            .then(() => {
                setOnSave(prev => !prev)
                reset()
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleUpdate = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`, {
            headers:{'content-type':'application/json'},
            method:'PUT',
            body:JSON.stringify(car)
        }).then(value => value.json()).then(()=>{
            setOnSave(prev=>!prev)
            setCarForUpdate(null)
            reset()
        })
    }

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