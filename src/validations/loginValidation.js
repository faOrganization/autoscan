import { object, string} from 'yup';
import { login } from './validation';

export let loginSchema = object({
    email: string().email(login.email.isEmail).required(login.email.required),
    password: string().required(login.password.required).min(8, login.password.minLength).test('numbers', login.password.isSymbol, value => /\d/.test(value)),
  });