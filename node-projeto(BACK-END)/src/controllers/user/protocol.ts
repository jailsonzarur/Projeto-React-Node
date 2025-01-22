import { UserModel } from "../../infra/prisma/models/user-model";
import { HttpRequest, HttpResponse } from "../protocols";

export interface UserLoginSchema {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
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

