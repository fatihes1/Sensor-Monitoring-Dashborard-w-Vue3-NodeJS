const  express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const config = require("./config");
const loaders = require("./loaders");
const socket = require("socket.io");
const SensorModel = require('../src/models/Sensor');

const { MainPointRoutes, SensorRoutes, LogRoutes} = require("./routes");

config();
loaders();

const app = express();


app.use(cors());
app.use(express.json());
app.use(helmet());


const server = app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kaldırıldı!");
    app.use("/mainpoints", MainPointRoutes);
    app.use("/sensors", SensorRoutes);
    
    app.use((req, res, next) => {
        const error = new Error("Aradığınız sayfa bulunamadı");
        error.status = 404;
        next(error);
    })

});

const io = socket(server, {
    cors : {
        origin : "*",
        methods : ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    }
});

io.on('connection', (socket) => {
    console.log("New user ID : ", socket.id);

    socket.on("msg", (arg) => {
        console.log(arg); // world
    });

    SensorModel.watch().on('change', (change) => {
        const dataString = JSON.stringify(change);
        const dataObject = JSON.parse(dataString);

        if (dataObject.operationType == "insert") {
            socket.emit("added-sensor", dataObject.fullDocument);
        }
        if (dataObject.updateDescription) {
            // console.log("databu :", dataObject.updateDescription.updatedFields.records);
            // socket.emit("changed-sensor", dataObject.updateDescription.updatedFields.logs);
            socket.emit("added-record", dataObject);
        }
    });
    

});



