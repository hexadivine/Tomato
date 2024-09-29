// import express from "express";
const express = require("express");
// import { userSignup, userLogin } from "../controllers/users.js";
const { userSignup, userLogin } = require("../controllers/users");

const userRouter = express.Router();

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);

module.exports = userRouter;
