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

LogSchema.post("save", (doc) => {
    logger.log({
        level : "info",
        message : doc,
    });
});

module.exports = Mongoose.model('log', LogSchema);