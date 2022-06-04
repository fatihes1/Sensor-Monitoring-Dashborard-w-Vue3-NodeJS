const Joi = require('joi');

const createValidation = Joi.object({
    title : Joi.string().min(3).required(),
    description : Joi.string().min(3),
    locationX : Joi.string().required(),
    locationY : Joi.string().required(),
    radius : Joi.number().required().min(0),
});

const updateValidation = Joi.object({
    title : Joi.string().min(3),
    description : Joi.string().min(3),
    locationX : Joi.string(),
    locationY : Joi.string(),
    radius : Joi.number().min(0),
});

module.exports = {
    createValidation,
    updateValidation
}