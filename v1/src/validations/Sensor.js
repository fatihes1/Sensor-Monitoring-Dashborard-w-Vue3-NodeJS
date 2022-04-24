const Joi = require('joi');

const createValidation = Joi.object({
    type : Joi.string().required(),
    latitude : Joi.number().min(0).max(90).required(),
    longitude : Joi.number().min(-180).max(180).required(),
    address  : Joi.string().min(5).required(),
    description : Joi.string().min(5).required(),
    isStabil : Joi.boolean().required(),
})
const updateValidation = Joi.object({
    type : Joi.string().required(),
    latitude : Joi.number().min(0).max(90).required(),
    longitude : Joi.number().min(-180).max(180).required(),
    address  : Joi.string().min(5),
    description : Joi.string().min(5),
    isStabil : Joi.boolean(),
})

module.exports = {
    createValidation,
    updateValidation
}