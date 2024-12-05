import { post } from "./request";
export const    userRegister = data => post('users/register-personal' ,data)