import ForgetPasswordBtn from './form/ForgetPasswordBtn'
import FormHeader from './form/FormHeader'
import FormSwitch from './form/FormSwitch'
import InputField from '../ui/InputField'
import Button from '../ui/Button'
import Validator from './form/Validator';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser, setCredentials } from '../../features/auth/authSlice'
import { useGetUserQuery, useLoginMutation } from '../../services/mainApi'
import { useEffect, useState } from 'react'
import { loginSchema } from '../../validations'
import { jwtDecode } from 'jwt-decode'
import { skipToken } from "@reduxjs/toolkit/query";
import { useNavigate } from 'react-router-dom'
import { destroyAllModal, setInactive } from '../../util/modal'

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const formSwitchData = {
    questionTxt: "Hesabınız yoxdur?",
    btnTxt: "Yeni hesab yaradın",
    modalType: 'Register'
  }

  const submitBtnData = {
    text: 'Daxil ol',
    loadingText: 'Daxil olunur',
    classNames: 'btn-dark h-10 w-full',
    type: 'submit',
    isLoading: isLoading,
  }

  const [userId, setUserId] = useState(skipToken);
  const [token, setToken] = useState(null);
  const { data, isSuccess} = useGetUserQuery(userId)
  const navigate = useNavigate()

  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials({ user: data, token: token }))
      navigate('/dashboard');
      setInactive()
      destroyAllModal();
    }
  }, [data])

  const getUserId = (token) => {
    const id_key = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';
    setToken(token)
    const decoded = jwtDecode(token);
    const id = decoded[id_key]
    setUserId(id);
  }

  const submit = async (values) => {
    const formData = {
      login: values.email,
      password: values.password
    }
    try {
      const res = await login(formData).unwrap();
      if (!res.token.accessToken) throw new Error('Error');
      getUserId(res.token.accessToken);
    } catch (err) {
      console.log(err)
    }
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: submit
    });

  const inputs = {
    email: {
      type: 'email',
      placeholder: 'E-poçt',
      autoComplete: 'on',
      name: 'email',
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.email

    },
    password: {
      type: 'password',
      placeholder: 'Şifrə',
      autoComplete: 'on',
      name: 'password',
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.password,
      pwdInp: true
    }
  }

  return (
    <div>
      <FormHeader title="Daxil olun" />
      <form className='fadeIn' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <InputField {...inputs.email} />
          {errors.email && touched.email && (
            <Validator error={errors.email} />
          )}
        </div>
        <div className='mb-3'>
          <InputField {...inputs.password} />
          {errors.password && touched.password && (
            <Validator error={errors.password} />
          )}
        </div>
        <div className='mb-5 text-right'>
          <ForgetPasswordBtn />
        </div>
        <div>
          <Button data={submitBtnData} />
          <FormSwitch data={formSwitchData} />
        </div>
      </form>
    </div>
  )
}

export default Login