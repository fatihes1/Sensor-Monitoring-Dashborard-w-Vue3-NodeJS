const BaseService = require("./BaseService");
const BaseModel = require("../models/Sensor");
class SensorService extends BaseService {
    constructor() {
        super(BaseModel);
    }
    // @Override to list method
    list(where) {
        return BaseModel.find(where || {}).populate({
            path : "mainPoint_id",
            select : "locationX locationY radius",
        });
    }
}

module.exports = new SensorService();