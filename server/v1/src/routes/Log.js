// validate middleware
const validate = require("../middlewares/validate");
// validations tanıtımı
const schemas = require("../validations/Log");
const express = require("express");
const LogController = require("../controllers/Log");

const idChecker = require("../middlewares/idChecker");
const router = express.Router();

//TODO : Route'ları düzenlemek gerekiyor

router.route("/").get(LogController.index);
router.route("/").post(validate(schemas.createValidation), LogController.create);
router.route("/:id").patch(idChecker(),validate(schemas.updateValidation), LogController.update);
router.route("/:id").delete(idChecker(), LogController.deleteLog);
// router.route("/:id/make-comment").post(idChecker(), validate(schemas.commentValidation), LogController.makeComment);
// router.route("/:id/:commentId").delete(idChecker(), LogController.deleteComment);
// router.route("/:id/add-sub-task").post(idChecker(), validate(schemas.createValidation), LogController.addSubTask);
router.route("/:id").get(idChecker(), LogController.fetchLogs);



module.exports = router;