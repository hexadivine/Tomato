// import express from "express";
const express = require("express");
// import mongoose from "mongoose"
const connectDB = require("./connect.mongodb.js");
// import cors from "cors";
const cors = require("cors");
// import foodRouter from "./routes/food.js";
const foodRouter = require("./routes/food.js");
// import userRouter from "./routes/users.js";
const userRouter = require("./routes/users.js");
// import dotenv from "dotenv/config";
require("dotenv/config");

// initialization
connectDB();
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("/tmp"));
// middleware - routes
app.use("/api/food", foodRouter);
app.use("/api/users", userRouter);
// boot msg
app.get("/", (req, res) => {
    res.send({ success: true, msg: "Server is up and running" });
});
// run
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
// export default app;
module.exports = app;
