import { prisma } from "../database/prisma";
import { ICreate } from "../interfaces/UserInterface";

class UserRepository {

    async create({ name, email, password }: ICreate) {
        const result = await prisma.users.create({
            data: {
                name,
                email,
                password
            }
        });

        return result;
    }

    async findUserByEmail(email: string) {
        const result = await prisma.users.findUnique({
            where: {
                email
            }
        });

        return result;
    }
}


export { UserRepository };