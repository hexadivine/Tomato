// import { userModel } from "../models/users.js";
// import bcrypt from "bcrypt";
// import validator from "validator";
// import jwt from "jsonwebtoken";
// import "dotenv/config";
const userModel = require("../models/users.js");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_TOKEN);
};

const userSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // validate data
        if (!validator.isEmail(email)) {
            return res.json({ success: false, msg: "Please enter valid email!" });
        }
        if (password.length < 8) {
            return res.json({ success: false, msg: "Please enter strong password" });
        }

        // check existing user
        const user = await userModel.findOne({ email });
        if (user) {
            return res.json({ success: false, msg: "User already exists!" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // register user
        const commitUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });
        const newUser = await commitUser.save();

        // get token
        const token = createToken(newUser._id);
        return res.json({ success: true, token });
    } catch (error) {
        return res.json({ success: false, msg: "An unexpected error occurred" });
    }
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.send({ success: false, msg: "Email is not registered!" });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) return res.send({ success: false, msg: "Invalid credential" });

    const token = createToken(user._id);
    return res.json({ success: true, token });
};

// export { userSignup, userLogin };
module.exports = { userSignup, userLogin };
