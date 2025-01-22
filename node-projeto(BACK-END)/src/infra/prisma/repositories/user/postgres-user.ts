import { PrismaClient } from "@prisma/client";
import { IUserRepository, UserSignUpSchema } from "../../../../controllers/user/protocol";
import { UserModel } from "../../models/user-model";
import { v4 as uuidv4 } from 'uuid';

export class UserRepository implements IUserRepository {

    prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async insert(params: UserSignUpSchema): Promise<UserModel> {
        let user_id = uuidv4();
        const user = await this.prisma.user.create({
            data: {
                id: user_id,
                firstName: params["firstName"],
                lastName: params["lastName"],
                email: params["email"],
                password: params["password"],
                is_active: false
            },
        });

        return user;
    }
}