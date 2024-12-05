import FormHeader from './form/FormHeader'
import InputField from '../ui/InputField'
import SubmitBtn from './form/SubmitBtn'
import Button from '../ui/Button'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik';
import Validator from './form/Validator'

const NewPassword = () => {
  const {resetPwdInfo} = useSelector(state => state.resetPwdInfo);
  
  const submit = (value) => {
    const resetPwd = {
      ...value,
      ...resetPwdInfo
    }

    console.log(resetPwd);
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
  useFormik({
      initialValues: {
          password: "",
          confirmPassword: ""
      },
      onSubmit: submit
  });

  const submitBtnData = {
    text: 'Təstiqlə',
    loadingText: 'Təstiqlənir',
    classNames: 'btn-dark h-10 w-full',
    type: 'submit'
  }

  const inputs = {
    password: {
      type: 'password',
      placeholder: 'Şirfəni daxil edin',
      autoComplete: 'on',
      name: 'password',
      onChange: handleChange,
      value: values.password
    },
    confirmPassword: {
      type: 'password',
      placeholder: 'Yeniden şirfəni daxil edin',
      autoComplete: 'on'
    }
  }
  return (
    <div className='max-w-96 mx-auto'>
      <FormHeader title="Yeni şifrə" />
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <InputField {...inputs.password} />
          {errors.password && touched.password && (
            <Validator error={errors.password}/>
          )}
        </div>
        <div className='mb-6'>
          <InputField {...inputs.confirmPassword} />
          {errors.confirmPassword && touched.confirmPassword && (
            <Validator error={errors.confirmPassword}/>
          )}
        </div>
        <div>
          <Button data={submitBtnData} />
        </div>
      </form>
    </div>
  )
}

export default NewPassword