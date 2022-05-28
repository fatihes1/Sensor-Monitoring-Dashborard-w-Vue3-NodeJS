const Mongoose = require('mongoose');

const LogsSchema = new Mongoose.Schema({
    logs : [
        {
            humidity : Number,
            temperature : Number,
            brightness : Number
            // özellikler eklensin, sensor tipinine göre farklı kayıtlar doldurulur.
        }
    ]
    
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('log', LogsSchema);