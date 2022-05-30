const httpStatus = require("http-status");
const Mongoose = require("mongoose");
const LogService = require("../services/LogService");
// const TaskService = new Service();

class Log {
    index (req, res) {
        if(!req?.params?.projectId) return res.status(httpStatus.BAD_REQUEST).send({ error : "Task bilgisi eksik !" })
        LogService.list({ project_id : req.params.projectId }).then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }
    create (req, res) {
        req.body.user_id = req.user;
        LogService.create(req.body).then(response => {
            res.status(httpStatus.CREATED).send(response);
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }
    
    update (req, res) {
        if(!req.params?.id){
          return res.status(httpStatus.BAD_REQUEST).send({
              message : "ID bilgisi eksik !",
          });
        };
        LogService.update(req.params?.id, req.body).then(updatedTask => {
            res.status(httpStatus.OK).send(updatedTask)
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Kayıt sırasında bir problem oluştu."}));
    }
    
    deleteLog (req, res) {
        if(!req.params?.id){
            return res.status(httpStatus.BAD_REQUEST).send({
                message : "ID bilgisi eksik !"
            });
        };
        LogService.delete(req.params?.id).then((deletedSection) => {
            if(!deletedSection) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message : "Bu ID değerine sahip kayıt bulunmamaktadır. !"
                });
            };
            res.status(httpStatus.OK).send({ message : "Belirtilen task silinmiştir"});
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Task silinirken bir sorunla karşılaşıldı."}));
    }

    // Belirli bir task, bu taskin subTask'leri ve commentlerini bir arada getirir
    fetchLogs (req, res) {
        if(!req.params.id) return res.status(httpStatus.BAD_REQUEST).send({ message : "ID Bilgisi eksik !" });
        LogService.findOne({ _id : req.params.id }, true).then((task) => {
            if(!task) return res.status(httpStatus.NOT_FOUND).send({ message : "Böyle bir kayıt bulunmamaktadır." });
            res.status(httpStatus.OK).send(task);
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }
}

module.exports = new Log();