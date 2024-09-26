import express from "express";
import { userSignup, userLogin } from "../controllers/users.js";

const userRouter = express.Router();

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);

export default userRouter;
