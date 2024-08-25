import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
});

export const Food = new mongoose.model("Food", FoodSchema);
