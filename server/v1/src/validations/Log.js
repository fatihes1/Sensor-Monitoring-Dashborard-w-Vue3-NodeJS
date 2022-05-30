const Joi = require("joi");


const createValidation = Joi.object({
    humidty : Joi.number(),
    temperature : Joi.number(),
    brightness : Joi.number(),
    mainpoint_id : Joi.string().required().min(8),
    sensor_id : Joi.string().required().min(8),    
});
const updateValidation = Joi.object({
    humidty : Joi.number(),
    temperature : Joi.number(),
    brightness : Joi.number(),
    mainpoint_id : Joi.string().required().min(8),
    sensor_id : Joi.string().required().min(8),
});


module.exports = {
    createValidation,
    updateValidation
};