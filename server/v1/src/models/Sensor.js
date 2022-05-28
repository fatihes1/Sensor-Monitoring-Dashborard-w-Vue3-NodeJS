const Mongoose = require('mongoose');

const SensorSchema = new Mongoose.Schema({
    type : String,
    locationX: GeolocationCoordinates, // can be string too
    locationY : GeolocationCoordinates,
    reportInterval : Number,
    logs : [
        {
            type : Mongoose.Types.ObjectId,
            ref : 'log'
        }
    ]
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('sensor', SensorSchema);