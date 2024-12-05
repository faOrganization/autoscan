import FormHeader from './form/FormHeader'
import InputField from '../ui/InputField'
import SubmitBtn from './form/SubmitBtn'
import Button from '../ui/Button'
import Validator from './form/Validator'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useResetPasswordEmailMutation } from '../../services/mainApi'
import { resetPwdEmailSchema } from '../../validations'

const ResetPwdEmail = () => {
    const [resetPasswordEmail, { isLoading }] = useResetPasswordEmailMutation();
    const submit = async (values) => {
        try {
            const res = await resetPasswordEmail(values);
            console.log(res);

        } catch (error) {
            console.log(error);

        }
    }

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
        useFormik({
            initialValues: {
                email: "",
            },
            validationSchema: resetPwdEmailSchema,
            onSubmit: submit
        });

    const submitBtnData = {
        text: 'Davam et',
        loadingText: 'Göndərilir',
        classNames: 'btn-dark h-10 w-full',
        type: 'submit',
        isLoading: isLoading
    }

    const inputs = {
        email: {
            type: 'email',
            placeholder: 'E-poçt',
            autoComplete: 'on',
            name: 'email',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.email
        }
    }

    return (
        <div className='fadeIn'>
            <FormHeader title="Şifrəni bərpa et" />
            <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <InputField {...inputs.email} />
                    {errors.email && touched.email && (
                        <Validator error={errors.email} />
                    )}
                </div>
                <div>
                    <Button data={submitBtnData} />
                </div>
            </form>
        </div>
    )
}

export default ResetPwdEmail