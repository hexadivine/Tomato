import { Food } from "../models/food.js";

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
