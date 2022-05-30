const httpStatus = require("http-status");
const MainPointService = require("../services/MainPointService");
// const ProjectService = new Service();
// const ApiError = require("../errors/ApiError")

class MainPoint {
    index (req, res) {
        MainPointService.list().then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }
    create (req, res) {
        req.body.user_id = req.user;
        MainPointService.create(req.body).then(response => {
            res.status(httpStatus.CREATED).send(response);
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }
    update (req, res, next) {
        if(!req.params?.id){
          return res.status(httpStatus.BAD_REQUEST).send({
              message : "ID bilgisi eksik !",
          });
        };
        MainPointService.update(req.params?.id, req.body).then(updatedProject => {
            if (!updatedProject) return next(new ApiError("Böyle bir kayıt bulunmamaktadır", 404));
            res.status(httpStatus.OK).send(updatedProject)
        }).catch((e) => next( new ApiError(e?.message)));
    }
    deletePoint (req, res) {
        if(!req.params?.id){
            return res.status(httpStatus.BAD_REQUEST).send({
                message : "ID bilgisi eksik !"
            });
        };
        MainPointService.delete(req.params?.id).then((deletedProject) => {
            if(!deletedProject) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message : "Bu ID değerine sahip kayıt bulunmamaktadır. !"
                });
            };
            res.status(httpStatus.OK).send({ message : "Belirtilen proje silinmiştir"});
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Proje silinirken bir sorunla karşılaşıldı."}));
    }
}

module.exports = new MainPoint();