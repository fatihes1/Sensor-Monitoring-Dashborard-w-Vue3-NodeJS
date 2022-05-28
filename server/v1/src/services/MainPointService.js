const BaseService = require("./BaseService");
const BaseModel = require("../models/Projects");
class MainPointService extends BaseService {
    constructor() {
        super(BaseModel);
    }
    // @Override to list method can change
    list(where) {
        return BaseModel.find(where || {}).populate({
            path : "user_id",
            select : "full_name email profil_image",
        });
    }
}

module.exports = new MainPointService();