import { UserModel } from "../../infra/prisma/models/user-model";
import { HttpRequest, HttpResponse } from "../protocols";
import { ISignUpController, IUserRepository, UserSignUpSchema } from "./protocol";

export class SignUpController implements ISignUpController {

    userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async handle(httpRequest: HttpRequest<UserSignUpSchema>): Promise<HttpResponse<UserModel>> {
        try {

            const requiredFields = ["email", "firstName", "lastName", "password"];

            for(const field of requiredFields) {
                if(!httpRequest?.body?.[field as keyof UserSignUpSchema]?.length) {
                    return {
                        statusCode: 400,
                        body: `Por favor, especifique o campo: ${field}`
                    };
                }   
            }

            if(!httpRequest?.body) {
                return {
                    statusCode: 400,
                    body: "Por favor, especifique o body."
                };
            }

            const user = await this.userRepository.insert(httpRequest.body!);

            return {
                statusCode: 201,
                body: user
            };

        } catch(error) {
            return {
                statusCode: 500,
                body: "Algo de inesperado aconteceu no seu sign up."
            };
        }
    }
}