const Mongoose = require('mongoose');

const LogSchema = new Mongoose.Schema({
    mainPoint_id : {
        type : Mongoose.Types.ObjectId,
        ref : "mainPoint"
    },
    sensor_id : {
        type : Mongoose.Types.ObjectId,
        ref : "sensor"
    },
    records : [
        {   
            comment : Object,
            commented_at : Date,
        }
    ]
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('log', LogSchema);