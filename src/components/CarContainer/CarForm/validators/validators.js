import Joi from "joi";

const carFormSchema = Joi.object({
    brand: Joi.string().required(),
    price: Joi.number().required(),
    year: Joi.number().required()
});

export {carFormSchema};