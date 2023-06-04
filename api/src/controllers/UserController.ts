import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserService";

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    // Buscar todos
    index() {

    }

    // Buscar apenas um
    show() {

    }

    // Criar
    async store(request: Request, response: Response, next: NextFunction) {
        const { name, email, password } = request.body;

        try {
            const result = await this.userService.create({ name, email, password });

            return response.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    // Auntenticar
    auth() {

    }
}

export { UserController };