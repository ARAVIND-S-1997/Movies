// packages imports
import express from "express";

// other file imports
import { signup } from "../modules/signup.js";
import { login } from "../modules/login.js";

// public router configuration
const router=express.Router();
export const publicRoutes=router;

// route for sigup function
router.post("/signup",signup);

// route for login function
router.post("/login",login);