const httpStatus = require("http-status");
const Mongoose = require("mongoose");
const LogService = require("../services/LogService");
// const TaskService = new Service();

class Log {
    index (req, res) {
        // console.log(req.params);cle
        if(!req?.params?.sensorID) return res.status(httpStatus.BAD_REQUEST).send({ error : "Sensor bilgisi eksik !" })
        LogService.list({ sensor_id : req.params.sensorID }).then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }
    create (req, res) {
        // req.body.user_id = req.user;
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
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Kayıt silinirken bir sorunla karşılaşıldı."}));
    }

    makeComment (req, res) {
        LogService.findOne({ _id : req.params.id })
        .then(mainTask => {
            // console.log(req);
            if(!mainTask) return res.status(httpStatus.NOT_FOUND).send({ message : "Böyle bir kayıt bulunmamaktadır." })
            const comment = {
                ...req.body,
                commented_at : new Date(),
            };
            
            mainTask.records.push(comment);
            mainTask.save().then(updatedDoc => {
                return res.status(httpStatus.OK).send(updatedDoc);
            })
            .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Kayıt sırasında bir problem oluştuuuuuu." }));
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Kayıt sırasında bir problem oluştu." }));
    }

     deleteComment (req, res) {
        LogService.findOne({ _id : req.params.id })
        .then(mainTask => {
            if(!mainTask) return res.status(httpStatus.NOT_FOUND).send({ message : "Böyle bir kayıt bulunmamaktadır." });
            mainTask.records = mainTask.records.filter((c) => c._id?.toString() !== req.params.commentId);
            mainTask.save().then(updatedDoc => {
                return res.status(httpStatus.OK).send(updatedDoc);
            })
            .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Kayıt sırasında bir problem oluştuuuu." }));
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Kayıt sırasında bir problem oluştu." }));
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