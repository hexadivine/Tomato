import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        cart: {
            type: Object,
            default: {},
        },
    },
    { minimize: false }
);

export const userModel = new mongoose.model("user", userSchema);
