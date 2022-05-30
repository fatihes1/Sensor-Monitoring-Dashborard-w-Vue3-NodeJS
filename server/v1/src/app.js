const  express = require("express");
const path = require("path");
const helmet = require("helmet");

const config = require("./config");
const loaders = require("./loaders");

const { MainPointRoutes, SensorRoutes, LogRoutes} = require("./routes");

config();
loaders();

const app = express();

app.use(express.json());
app.use(helmet());


app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kaldırıldı!");
    app.use("/mainpoints", MainPointRoutes);
    app.use("/sensors", SensorRoutes);
    
    
    app.use((req, res, next) => {
        const error = new Error("Aradığınız sayfa bulunamadı");
        error.status = 404;
        next(error);
    })

})