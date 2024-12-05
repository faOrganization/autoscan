import { post } from "./request";
export const sendOtpMail = data => post('auth/send-otp-mail', data);
export const verifyOtp = data => post('auth/verify-otp', data);