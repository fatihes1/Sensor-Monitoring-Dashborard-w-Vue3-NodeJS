const httpStatus = require("http-status");
const ApiError = require("../errors/ApiError");

const idChecker = (field) => (req, res, next) => {
    // const idField = field || "id";
    if(!req?.params[field || "id"]?.id?.match(/^[0-9a-fA-F]{24}$/)){
        next(new ApiError("Lütfen geçerli bi ID bilgisi giriniz!", httpStatus.BAD_REQUEST))
        return;
    }
    next();
};

module.exports = idChecker;