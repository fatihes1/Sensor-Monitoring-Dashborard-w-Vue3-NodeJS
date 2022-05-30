const httpStatus = require("http-status");
const SensorService = require("../services/SensorService");
// const SectionService = new Service();

class Sensor {
    index (req, res) {
        if(!req?.params?.sensorID) return res.status(httpStatus.BAD_REQUEST).send({ error : "Proje bilgisi eksik !" })
        SensorService.list({ sensor_id : req.params.sensorID }).then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }
    create (req, res) {

        SensorService.create(req.body).then(response => {
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
    deleteSection (req, res) {
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



}

module.exports = new Sensor();