import { UserModel } from "../../infra/prisma/models/user-model";
import { HttpRequest, HttpResponse } from "../protocols";

export interface UserSignUpSchema {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserLoginSchema {
    email: string;
    password: string;
}

export interface ISignUpController {
    handle(httpRequest: HttpRequest<UserSignUpSchema>): Promise<HttpResponse<UserModel>>;
}

export interface ILoginController {
    handle(httpRequest: HttpRequest<UserLoginSchema>): Promise<HttpResponse<UserModel>>;
}

export interface IGetUsersController {
    handle(): Promise<HttpResponse<UserModel[]>>;
}

export interface IGetUserByIdController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<UserModel>>;
}

export interface IUserRepository {
    insert(params: UserSignUpSchema): Promise<UserModel>;
}