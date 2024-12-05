import { object, string, boolean, ref} from 'yup';
import { register } from './validation';

export let registerSchema = object({
    email: string().email(register.email.isEmail).required(register.email.required),
    password: string().required(register.password.required).min(8, register.password.minLength).test('numbers', register.password.isSymbol, value => /\d/.test(value)),
    confirmPassword: string().required(register.confirmPassword.required).oneOf([ref('password', string().password)], register.confirmPassword.isSame).min(8, register.confirmPassword.minLength).test('numbers', register.confirmPassword.isSymbol, value => /\d/.test(value)),
    terms: boolean().oneOf([true], register.terms.isCheck).required(register.terms.isCheck)
  });