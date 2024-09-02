import { Food } from "../models/food.js";
import fs from "fs";

export const addFood = async (req, res) => {
    try {
        console.log(req.file.filename);
        const food = await Food.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            image: req.file.filename,
        });
        res.status(201).send({
            success: true,
            data: food,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
        });
    }
};

export const listFood = async (req, res) => {
    try {
        const food = await Food.find({});
        res.send({ success: true, data: food });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
};

export const removeFood = async (req, res) => {
    try {
        const foodId = req.body.id;
        const removedFood = await Food.findByIdAndDelete(foodId);
        fs.unlink(`uploads/${removedFood.image}`, () => {});
        res.send({ success: true, message: removedFood });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
};
