const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
    console.log("DB Bağlantısı başarılı !");
})

const connectDB = async () => {
  await Mongoose.connect(`${process.env.DB_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = {
    connectDB,
}