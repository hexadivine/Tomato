import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import cors from "cors";

import foodRouter from "./routes/food.js";
import userRouter from "./routes/users.js";

// initialisation
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("uploads"));

app.use("/api/food", foodRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.send({ success: true, msg: "Server is up and running" });
});

app.listen(process.env.PORT || 9999, () => {
    console.log("Server is up and running");
});
// run
// mongoose.connect(process.env.MONGODB_URL).then(() => {
//     console.log("connected");
//     app.listen(process.env.PORT || 9999, () => {
//         console.log("Server is up and running");
//     });
// });

export default app;
