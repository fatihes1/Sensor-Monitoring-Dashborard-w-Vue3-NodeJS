const BaseService = require("./BaseService");
const BaseModel = require("../models/Sensor");
class SensorService extends BaseService {
    constructor() {
        super(BaseModel);
    }
    // @Override to list method
    list(where) {
        return BaseModel.find(where || {}).populate({
            path : "logs",
            select : "*",
        });
    }
}

module.exports = new SensorService();