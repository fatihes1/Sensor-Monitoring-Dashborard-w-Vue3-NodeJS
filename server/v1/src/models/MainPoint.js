const Mongoose = require('mongoose');
const logger = require('../scripts/logs/MainPoint')

const MainPointSchema = new Mongoose.Schema({
    locationX: String, // can be string too
    locationY : String,
    radius : Number,
    sensors : [
        {
            type : Mongoose.Schema.Types.ObjectId,
            ref : 'sensor'
        }
    ]
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('mainPoint', MainPointSchema);