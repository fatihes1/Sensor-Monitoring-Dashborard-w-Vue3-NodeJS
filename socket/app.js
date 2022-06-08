const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();
const SensorModel = require("../server/v1/src/models/Sensor");

const PORT =  2018;

const server = http.createServer(app)

const io = socketio(server, {
    // single page app -> localhost 8080'dan istek geliyor. Bu yüzden cors kullanılır. Sunucu da sorun çıkarabilir.
    cors : {
        origin : "*",
        methods : ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
    }
});

server.listen(PORT, () => { //call-bakc ile çalışacak
    // console.log(`Sunucu ${PORT} üzerinden sunulmaktadır..`);
    io.on("connection", socket => { //io üzerinden event gelirse, ismi connection olursa client geliyor bu client'a socket adını atalım ve bunu yazdıralım
        console.log("New Event is here:  ")
        console.log(socket);
        SensorModel.watch().on("change", (change) => {
            const dataString = JSON.stringify(change);
            const dataObject = JSON.parse(dataString);
    
            if(dataObject.operationType == 'insert') {
                socket.emit("added-sensor", dataObject.fullDocument);
            };
    
            if(dataObject.operationType == 'update') {
                socket.broadcast.emit("added-record", dataObject);
            }
        })
    });
    
})