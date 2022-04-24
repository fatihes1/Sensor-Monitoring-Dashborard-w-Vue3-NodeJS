const Joi = require('joi');

const createValidation = Joi.object({
    latitude : Joi.number().min(0).max(90).required(),
    longitude : Joi.number().min(-180).max(180).required(),
    address  : Joi.string().min(5).required()
})

const updateValidation = Joi.object({
    latitude : Joi.number().min(0).max(90).required(),
    longitude : Joi.number().min(-180).max(180).required(),
    address  : Joi.string().min(5)
})

module.exports = {
    createValidation,
    updateValidation
}