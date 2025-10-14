import { Router } from "express";
import { loginUser } from "../controllers/user.js";

const userRouter = Router();

// Chỉ có đăng nhập
userRouter.post("/login", loginUser);

export default userRouter;
