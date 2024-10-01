// import { Food } from "../models/food.js";
const Food = require("../models/food");
// import fs from "fs";
const fs = require("fs");

const addFood = async (req, res) => {
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

const listFood = async (req, res) => {
    try {
        const food = await Food.find({});
        res.send({ success: true, data: food });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
};

const removeFood = async (req, res) => {
    try {
        const foodId = req.body.id;
        console.log(foodId);
        const removedFood = await Food.findByIdAndDelete(foodId);
        fs.unlink(`/tmp/${removedFood.image}`, () => {});
        res.send({ success: true, message: removedFood });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
};

module.exports = { addFood, listFood, removeFood };
