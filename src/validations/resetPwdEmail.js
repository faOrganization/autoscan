import { object, string} from 'yup';
import { resetPwdEmail } from './validation';

export let resetPwdEmailSchema = object({
    email: string().email(resetPwdEmail.email.isEmail).required(resetPwdEmail.email.required)
});