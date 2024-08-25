import express from "express";
import multer from "multer";

import { addFood } from "../controllers/food.js";

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        const uniqueFilename = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueFilename);
    },
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
