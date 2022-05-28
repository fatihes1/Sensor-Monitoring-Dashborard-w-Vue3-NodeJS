// validate middleware
const validate = require("../middlewares/validate");
// validations tanıtımı
const schemas = require("../validations/MainPoint");
const express = require("express");
const MainPointController = require("../controllers/MainPoint");
const idChecker = require("../middlewares/idChecker");
const router = express.Router();

// index için token gerekiyor artık !  -- CRUD
router.route("/").get(MainPointController.index);
router.route("/").post(validate(schemas.createValidation), MainPointController.create);
router.route("/:id").patch(idChecker(), validate(schemas.updateValidation), MainPointController.update);
router.route("/:id").delete(idChecker(), MainPointController.deletePoint);


module.exports = router;