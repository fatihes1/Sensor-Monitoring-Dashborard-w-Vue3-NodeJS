const Mongoose = require('mongoose');

const SensorSchema = new Mongoose.Schema({
    type : String,
    locationX: String, // can be string too
    locationY : String,
    reportInterval : Number,
    mainPoint_id : {
        type : Mongoose.Types.ObjectId,
        ref : "mainPoint"
    }
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('sensor', SensorSchema);