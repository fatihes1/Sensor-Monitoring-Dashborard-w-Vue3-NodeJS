const BaseService = require("./BaseService");
const BaseModel = require("../models/Log");

class LogService extends BaseService {
    constructor() {
        super(BaseModel);
    }
    // @Override to list method
    list(where) {
        return BaseModel.find(where || {}).populate([
            {
                path : "mainPoint_id",
                select : "locationX locationY radius" 
            },
            {
                path : "sensor_id",
                select : "type locationX locationY reportInterval" 
            }
        ]);
    }
    //@Override to findOne method
    findOne(where, expand) {
        if(!expand) return this.BaseModel.findOne(where);
        return this.BaseModel.findOne(where).populate([
            {
                path : "mainPoint_id",
                select : "locationX locationY radius" 
            },
            {
                path : "sensor_id",
                select : "type locationX locationY reportInterval" 
            }
        ])
    }
}

module.exports = new LogService();