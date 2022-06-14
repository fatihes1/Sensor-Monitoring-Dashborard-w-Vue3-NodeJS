const Joi = require('joi');

const createValidation = Joi.object({
    type : Joi.string().required(),
    locationX : Joi.number().required(),
    locationY : Joi.number().required(),
    reportInterval : Joi.number().required().min(0),
    mainPoint_id : Joi.string().required().min(8),
    records : Joi.array()
})
const updateValidation = Joi.object({
    type : Joi.string(),
    locationX : Joi.number(),
    locationY : Joi.number(),
    reportInterval : Joi.number().min(0),
    mainPoint_id : Joi.string().min(8),
    records : Joi.array()
})

module.exports = {
    createValidation,
    updateValidation
}