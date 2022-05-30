const Mongoose = require('mongoose');

const SensorSchema = new Mongoose.Schema({
    type : String,
    locationX: String, // can be string too
    locationY : String,
    reportInterval : Number,
    logs : [
        {
            type : Mongoose.Types.ObjectId,
            ref : 'log'
        }
    ],
    mainPointId : {
        type : Mongoose.Types.ObjectId,
        ref : "mainPoint"
    }
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('sensor', SensorSchema);