import { Router } from "express";
import userController from "./controller/userController";

const routes = Router();

routes.post("/users", userController.find);
routes.post("/user", userController.create)

export default routes