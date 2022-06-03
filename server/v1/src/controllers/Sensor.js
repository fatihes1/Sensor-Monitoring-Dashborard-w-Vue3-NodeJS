const httpStatus = require("http-status");
const SensorService = require("../services/SensorService");
// const SectionService = new Service();

class Sensor {
    index (req, res) {
        if(!req?.params?.mainPointId) return res.status(httpStatus.BAD_REQUEST).send({ error : "Main point bilgisi eksik !" })
        SensorService.list({ mainPoint_id : req.params.mainPointId }).then(response => {
            if(response.length == 0) {
                res.status(httpStatus.NOT_FOUND).send({message : "Belirtilen Main Point'e ait sensor bulunamamıştır !"});
            } else {
                res.status(httpStatus.OK).send(response);
            }
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }
    create (req, res) {
        SensorService.create(req.body).then(response => {
            console.log(response);
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
        SensorService.update(req.params?.id, req.body).then(updatedSection => {
            res.status(httpStatus.OK).send(updatedSection)
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Kayıt sırasında bir problem oluştu."}));
    }
    deleteSensor (req, res) {
        if(!req.params?.id){
            return res.status(httpStatus.BAD_REQUEST).send({
                message : "ID bilgisi eksik !"
            });
        };
        SensorService.delete(req.params?.id).then((deletedSection) => {
            if(!deletedSection) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message : "Bu ID değerine sahip kayıt bulunmamaktadır. !"
                });
            };
            res.status(httpStatus.OK).send({ message : "Belirtilen sections silinmiştir"});
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Section silinirken bir sorunla karşılaşıldı."}));
    }
    getSensor (req, res) {
        if(!req?.params?.sensorId) return res.status(httpStatus.BAD_REQUEST).send({ error : "Sensor bilgisi eksik !" })
        SensorService.list({ _id : req.params.sensorId }).then(response => {
            if(response.length == 0) {
                res.status(httpStatus.NOT_FOUND).send({message : "Belirtilen ID değerinde sensör bulunamadı !"});
            } else {
                res.status(httpStatus.OK).send(response);
            }
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }
    addRecordToSensor (req, res) {
        SensorService.findOne({ _id : req.params.id })
        .then(mainSensor => {
            if(!mainSensor) return res.status(httpStatus.NOT_FOUND).send({ message : "Böyle bir kayıt bulunmamaktadır." })
            // TODO: if(mainSensor.type == CO2 record = { bla bla bla})
            const record = {
                ...req.body,
                recorded_at : new Date(),
            };
            mainSensor.records.push(record);
            mainSensor.save().then(updatedDoc => {
                return res.status(httpStatus.OK).send(updatedDoc);
            })
            .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Kayıt sırasında bir problem oluştu." }));
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Kayıt sırasında bir problem oluştu." }));
    }

}

module.exports = new Sensor();