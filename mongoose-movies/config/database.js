const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/movies");
const db = mongoose.connection;
db.on("connected", () =>
  console.log(`Connected to MongoDb at ${db.host}:${db.port}`)
);
