const express = require("express");

const app = express();

app.use(express.json())

//Route Import

const testRoute = require("./routes/testRoute");

app.use("/api/v1", testRoute)

module.exports = app