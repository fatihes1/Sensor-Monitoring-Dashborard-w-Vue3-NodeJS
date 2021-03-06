const Mongoose = require('mongoose');
const logger = require('../scripts/logs/MainPoint')

const MainPointSchema = new Mongoose.Schema({
    title : String,
    description : String,
    locationX: Number, // can be string too
    locationY : Number,
    radius : Number
    
}, {timestamps: true, versionKey: false});

MainPointSchema.post("save", (doc) => {
    logger.log({
        level : "info",
        message : doc,
    });
})


module.exports = Mongoose.model('mainPoint', MainPointSchema);