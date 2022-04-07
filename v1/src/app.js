const  express = require("express");
const path = require("path");

// const config = require("./config");
// const loaders = require("./loaders");

// config();
// loaders();

const app = express();

app.use(express.json());


app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kaldırıldı!");

})