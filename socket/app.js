const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 2018;

const server = http.createServer(app)

const io = socketio(server, {
    // single page app -> localhost 8080'dan istek geliyor. Bu yüzden cors kullanılır. Sunucu da sorun çıkarabilir.
    cors : {
        origin : "*",
        methods : ["GET", "POST", "OPTIONS"],
    }
});

server.listen(PORT, () => { //call-bakc ile çalışacak
    // console.log(`Sunucu ${PORT} üzerinden sunulmaktadır..`);
    io.on("connection", socket => { //io üzerinden event gelirse, ismi connection olursa client geliyor bu client'a socket adını atalım ve bunu yazdıralım
        console.log("New Event is here:  ")
        console.log(socket);

        socket.on("NEW_BOOKMARK_EVENT", bookmark => {
            console.log("New Bookmark event is here : ", bookmark);
            //! Gönderen hariç herkese bookmark bilgisini gönder
            socket.broadcast.emit("NEW_BOOKMARK_ADDED", bookmark);
        })
    })
})