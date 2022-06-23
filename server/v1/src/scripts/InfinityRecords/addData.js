const LogObject = require("./Log");
const SensorModel = require("../../models/Sensor");

class AddData {
    constructor(_id, logs, interval) {
        this.logs = logs;
        this._id = _id;
        this.interval = interval;
    }
    guess() {
        return Math.floor((Math.random() * 50).toFixed(1)) + 10;
    }


    async addLog() {

        const log = new LogObject(
            Date.now() / 1000, // ID VALUE (uuid)
            Date.now(), // timeStamp
            this.guess(), // smoke
            this.guess(), // co2
            this.guess(), // metan
            this.guess(), // dust
            this.guess() // o2
        );
        this.logs.push(log);

        const filter = { _id: this._id };
        const update = { records : this.logs };

        const updated = await SensorModel.findOneAndUpdate(filter, { $set: update })
        
        console.log(updated);
        console.log("*********\n");
        
        setTimeout(() => {
            this.addLog();
        }, this.interval);
    }
}

module.exports = AddData;