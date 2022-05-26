const Mongoose = require('mongoose');

const LocationSchema = new Mongoose.Schema({
    latitude: GeolocationCoordinates, // can be string too
    longitude : GeolocationCoordinates,
    address : String
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('location', LocationSchema);