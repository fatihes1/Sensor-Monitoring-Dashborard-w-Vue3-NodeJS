const Joi = require("joi");


const createValidation = Joi.object({
    mainPoint_id : Joi.string().required().min(8),
    sensor_id : Joi.string().required().min(8),
    comments : Joi.array(),     
});
const updateValidation = Joi.object({
    humidty : Joi.number(),
    temperature : Joi.number(),
    brightness : Joi.number(),
    mainPoint_id : Joi.string().min(8),
    sensor_id : Joi.string().min(8),
    comments : Joi.array(),
});

const commentValidation = Joi.object({
    comment : Joi.object()
    // _id : Joi.string().min(8),
});


module.exports = {
    createValidation,
    updateValidation,
    commentValidation
};