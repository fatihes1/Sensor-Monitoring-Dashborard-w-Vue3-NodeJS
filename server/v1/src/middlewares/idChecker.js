const httpStatus = require("http-status");
const ApiError = require("../errors/ApiError");
var ObjectId = require('mongoose').Types.ObjectId;
// ObjectId.isValid('microsoft123');
const idChecker = (field) => (req, res, next) => {
    // const idField = field || "id";
    
    // if(!req?.params[field || "id"]?.match(/^[0-9a-fA-F]{24}$/)){
    //     next(new ApiError("Lütfen geçerli bi ID bilgisi giriniz!", httpStatus.BAD_REQUEST))
    //     return;
    // }
    
    if(!ObjectId.isValid(req?.params[field || "id"])){
        // next(new ApiError("Lütfen geçerli bi ID bilgisi giriniz!", httpStatus.BAD_REQUEST))
        next(new ApiError(req.params, httpStatus.BAD_REQUEST))
        return;
    }
    next();
};

module.exports = idChecker;