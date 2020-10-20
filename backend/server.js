require("dotenv").config();
const express = require("express");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log("error:", error));
db.once("open", () => console.log("Connected"));

app.use(cors(), express.json());

const routerApi = require("./routes/api");

app.use("/api", routerApi);

app.listen(3000, () => console.log("server started"));
