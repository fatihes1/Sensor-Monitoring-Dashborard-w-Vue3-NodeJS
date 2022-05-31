const BaseService = require("./BaseService");
const BaseModel = require("../models/MainPoint");
class MainPointService extends BaseService {
    constructor() {
        super(BaseModel);
    }
    // // @Override to list method can change
    // list(where) {
    //     return BaseModel.find(where || {}).populate([
    //         {
    //             path : "sensors_id",
    //             select : "type locationX locationY reportInterval",
    //         }
    //     ]);
    // }
}

module.exports = new MainPointService();