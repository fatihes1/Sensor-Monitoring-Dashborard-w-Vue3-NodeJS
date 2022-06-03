const Joi = require('joi');

const createValidation = Joi.object({
    type : Joi.string().required(),
    locationX : Joi.string().required(),
    locationY : Joi.string().required(),
    reportInterval : Joi.number().required().min(0),
    mainPoint_id : Joi.string().required().min(8),
    records : Joi.array()
})
const updateValidation = Joi.object({
    type : Joi.string(),
    locationX : Joi.string(),
    locationY : Joi.string(),
    reportInterval : Joi.number().min(0),
    mainPoint_id : Joi.string().min(8),
    records : Joi.array()
})

module.exports = {
    createValidation,
    updateValidation
}