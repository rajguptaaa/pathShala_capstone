const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

//api-end-points
app.use("/", (req, res) => {
    res.send("Welcome to the API");
});

app.use("/api/auth", userRoutes);

module.exports = app;
