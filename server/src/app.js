const express = require("express");
const app = express();

app.use(express.json());

//api-end-points
app.use("/", (req, res) => {
    res.send("Welcome to the API");
});

module.exports = app;
