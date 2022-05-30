const Joi = require('joi');

const createValidation = Joi.object({
    locationX : Joi.string().required(),
    locationY : Joi.string().required(),
    radius : Joi.number().required().min(0),
});

const updateValidation = Joi.object({
    locationX : Joi.string(),
    locationY : Joi.string(),
    radius : Joi.number().min(0),
});

module.exports = {
    createValidation,
    updateValidation
}