import { Router } from "express";
import userController from "./controller/userController";

const routes = Router();

routes.post("/user", userController.create)