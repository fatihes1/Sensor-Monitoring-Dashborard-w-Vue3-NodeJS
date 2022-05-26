const Mongoose = require('mongoose');

const SensorSchema = new Mongoose.Schema({
    parent_id : {
        type : Mongoose.Types.ObjectId,
        ref : 'location'
    },
    type : String,
    latitude: GeolocationCoordinates, // can be string too
    longitude : GeolocationCoordinates,
    address : String,
    description : String,
    isStabil : Boolean,
    sensorRecord : Object,
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('sensor', SensorSchema);