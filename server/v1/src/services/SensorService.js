const BaseService = require("./BaseService");
const BaseModel = require("../models/Sensor");
const AddData = require('../scripts/InfinityRecords/addData')
class SensorService extends BaseService {
    constructor() {
        super(BaseModel);
    }
    // @Override to list method
    list(where) {
        return BaseModel.find(where || {}).populate({
            path : "mainPoint_id",
            select : "title locationX locationY radius",
        });
    };
    // @Override to create method
    async create(data) {
        // return this.BaseModel(data).save();
        try {
            const savedData = await this.BaseModel(data).save();
            console.log(savedData);
            const recordObject = new AddData(savedData._id, savedData.records, savedData.reportInterval);
            await recordObject.addLog();
            return savedData;
        } catch (error) {
            console.log(error)
        } 
        

    }
}

module.exports = new SensorService();