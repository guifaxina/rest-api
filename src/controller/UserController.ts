import { Request, Response } from "express";
import User from "../database/schemas/User";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    try {
      const user = await User.create(request.body);
      return response.json(user)
    } 
      catch (error) {
      return response.status(500).send({
        error: "Registration failed",
        message: error,
      });
    }
  }
}

export default new UserController();
