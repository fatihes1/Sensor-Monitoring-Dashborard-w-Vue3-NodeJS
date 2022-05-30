const Mongoose = require('mongoose');

const LogSchema = new Mongoose.Schema({
    humidity : Number,
    temperature : Number,
    brightness : Number,
    mainPointId : {
        type : Mongoose.Types.ObjectId,
        ref : "mainPoint"
    },
    sensorId : {
        type : Mongoose.Types.ObjectId,
        ref : "sensor"
    }
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('log', LogSchema);