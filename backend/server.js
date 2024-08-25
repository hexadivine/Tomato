import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import foodRouter from "./routes/food.js";

// initialisation
dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("uploads"));
app.use("/api/food", foodRouter);

// run
mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(process.env.PORT || 9999, () => {
        console.log("Server is up and running");
    });
});
