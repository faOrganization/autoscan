import { post } from "./request";
export const resetPasswordEmail = data => post('auth/reset-password-email', data);