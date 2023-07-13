import styles from './LoginPage.module.css'
import {useForm} from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const LoginForm = () => {

    const schema = Joi.object({
        userId: Joi.number().required(),
        name: Joi.string().required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        body: Joi.string().required()
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
        fetch('https://jsonplaceholder.typicode.com/comments', {
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
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    UserId:
                    <br/>
                    <input type="text" {...register('userId', { required: true })}/>
                    {errors.userId && <span>{errors.userId.message}</span>}
                </label>
                <label>
                    Name:
                    <br/>
                    <input type="text" {...register('name', { required: true })}/>
                    {errors.name && <span>{errors.name.message}</span>}
                </label>
                <label>
                    Email:
                    <br/>
                    <input type="text" {...register('email', { required: true })}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </label>
                <label>
                    Body:
                    <br/>
                    <input type="text" {...register('body', { required: true })}/>
                    {errors.body && <span>{errors.body.message}</span>}
                </label>

                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default LoginForm