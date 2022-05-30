// validate middleware
const validate = require("../middlewares/validate");
// validations tanıtımı
const schemas = require("../validations/Sensor");
const express = require("express");

const SensorController= require("../controllers/Sensor");
const idChecker = require("../middlewares/idChecker");
const router = express.Router();

// index için token gerekiyor artık ! 
router.route("/:sensorId").get(idChecker("sensorId"), SensorController.index);
router.route("/").post(validate(schemas.createValidation), SensorController.create);
router.route("/:id").patch(idChecker(),validate(schemas.updateValidation), SensorController.update);
router.route("/:id").delete(idChecker(), SensorController.deleteSection);


module.exports = router;