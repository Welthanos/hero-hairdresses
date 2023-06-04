import { hash } from "bcrypt";
import { ICreate } from "../interfaces/UserInterface";
import { UserRepository } from "../repositories/UserRepository";

class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create({ name, email, password }: ICreate) {

        const findUser = await this.userRepository.findUserByEmail(email);

        if (findUser) {
            throw new Error("User already exists.");
        }

        const hashPassword = await hash(password, 10);

        const create = await this.userRepository.create({
            name,
            email,
            password: hashPassword,
        });

        return create;
    }
}


export { UserService };