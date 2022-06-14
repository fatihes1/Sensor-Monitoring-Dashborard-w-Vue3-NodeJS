const Mongoose = require('mongoose');
const logger = require('../scripts/logs/Sensor')

const SensorSchema = new Mongoose.Schema({
    type : String,
    locationX: Number, // can be string too
    locationY : Number,
    reportInterval : Number,
    mainPoint_id : {
        type : Mongoose.Types.ObjectId,
        ref : "mainPoint"
    },
    records : {
        type: Array
    }
    
}, {timestamps: true, versionKey: false});

// SensorSchema.post("save", (doc) => {
//     logger.log({
//         level : "info",
//         message : doc,
//     });
// });

module.exports = Mongoose.model('sensor', SensorSchema);