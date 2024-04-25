import express from "express";
import authcontrollers from "../controllers/auth-controller.js";



const router=express.Router();

router.route("/").get(authcontrollers.home);


router.route("/register").get(authcontrollers.register);

router.route("/login").get(authcontrollers.login);


export default  router;