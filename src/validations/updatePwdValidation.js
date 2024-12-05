import { object, string, ref} from 'yup';
import { updatePwd } from './validation';

export let updatePwdSchema = object({
    password: string().required(updatePwd.password.required).min(8, updatePwd.password.minLength).test('numbers', updatePwd.password.isSymbol, value => /\d/.test(value)),
    confirmPassword: string().required(updatePwd.confirmPassword.required).oneOf([ref('password', string().password)], updatePwd.confirmPassword.isSame).min(8, updatePwd.confirmPassword.minLength).test('numbers', updatePwd.confirmPassword.isSymbol, value => /\d/.test(value)),
  });