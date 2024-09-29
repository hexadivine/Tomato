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

const corsConfig = { origin: "*", credential: true, methods: ["GET", "POST", "PUT", "DELETE"] };
// middleware
app.options("", cors(corsConfig));
app.use(cors(corsConfig));
app.use(express.json());
app.use("/images", express.static("uploads"));

app.use("/api/food", foodRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.send({ success: true, msg: "Server is up and running" });
});

// app.listen(process.env.PORT || 9999, () => {
//     console.log("Server is up and running");
// });
// run
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("connected");
});

app.listen(process.env.PORT || 9999, () => {
    console.log("Server is up and running");
});

// export default app;
module.exports = app;
