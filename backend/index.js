// import express from "express";
const express = require("express");
// import mongoose from "mongoose"
const mongoose = require("mongoose");
// import cors from "cors";
const cors = require("cors");
// import foodRouter from "./routes/food.js";
const foodRouter = require("./routes/food.js");
// import userRouter from "./routes/users.js";
const userRouter = require("./routes/users.js");
// import dotenv from "dotenv/config";
require("dotenv/config");

// initialization
const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("uploads"));

app.use("/api/food", foodRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.send({ success: true, msg: "Server is up and running" });
});

// run
mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(process.env.PORT || 9999, () => {
        console.log("Server is up and running");
    });
});

// export default app;
module.exports = app;
