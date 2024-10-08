// import express from "express";
const express = require("express");
// import multer from "multer";
const multer = require("multer");

// import { addFood, listFood, removeFood } from "../controllers/food.js";
const { addFood, listFood, removeFood } = require("../controllers/food.js");

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: "/tmp",
    filename: (req, file, cb) => {
        const uniqueFilename = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueFilename);
    },
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.delete("/remove", removeFood);

module.exports = foodRouter;
