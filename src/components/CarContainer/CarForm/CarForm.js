// import styles from './LoginPage.module.css'
import {useForm} from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const CarForm = () => {

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

    const save = (data) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((response) => response.json())
            .then((value) => {
                console.log(value);
                reset();
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
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

                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export {CarForm}