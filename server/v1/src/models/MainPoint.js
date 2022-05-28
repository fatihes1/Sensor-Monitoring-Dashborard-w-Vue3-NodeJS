const Mongoose = require('mongoose');
const logger = require('../scripts/logs/MainPoint')

const MainPointSchema = new Mongoose.Schema({
    locationX: GeolocationCoordinates, // can be string too
    locationY : GeolocationCoordinates,
    address : String,
    sensors : [
        {
            type : Mongoose.Types.ObjectId,
            ref : 'sensor'
        }
    ]
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('mainPoint', MainPointSchema);