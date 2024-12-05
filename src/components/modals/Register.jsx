import FormSwitch from './form/FormSwitch'
import FormHeader from './form/FormHeader'
import InputField from '../ui/InputField'
import SubmitBtn from './form/SubmitBtn'
import Terms from './form/Terms'
import Button from '../ui/Button'
import { useFormik } from 'formik'
import Validator from './form/Validator'
import { userRegister } from '../../services/userRegister'
import { sendOtpMail } from '../../services/sendOtpMail'
import { useDispatch } from 'react-redux'
import { createModal, destroyModal } from '../../util/modal'
import { setRegisterEmail } from '../../features/auth/registerEmailSlice'
import { useState } from 'react'
import { useRegisterMutation, useSendOtpMailMutation } from '../../services/mainApi';
import { registerSchema } from '../../validations'

const Register = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [register, { isError: registerIsError }] = useRegisterMutation();
    const [sendOtpMail, { isError: sendOtpMailError }] = useSendOtpMailMutation();

    const submit = async (values) => {
        setIsLoading(true)
        values.phoneNumber = '+99450' + Math.floor(Math.random() * 9000000);
        console.log(values.phoneNumber);
        const { confirmPassword, terms, ...formData } = values;
        const email = formData.email;
        try {
            const regRes = await register(formData).unwrap();
            if (!regRes) throw new Error(regRes?.message);
            console.log("Ugurlu Reg");
            try {
                const sendOtpMailRes = await sendOtpMail({ email: email }).unwrap();
                if (!sendOtpMailRes) throw new Error(sendOtpMailRes?.message);
                dispatch(setRegisterEmail(email))
                destroyModal();
                createModal('OtpCode');
                console.log("Ugurlu Otp");
            } catch (err) {
                console.log(err);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
        useFormik({
            initialValues: {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
                terms: '',
                phoneNumber: ""
            },
            validationSchema: registerSchema,
            onSubmit: submit
        });

    const formSwitchData = {
        questionTxt: "Hesabınız var?",
        btnTxt: "Daxil olun",
        modalType: 'Login'
    }

    const submitBtnData = {
        text: 'Hesab yaradın',
        loadingText: 'Hesab yaradılır',
        classNames: 'btn-dark h-10 w-full',
        type: 'submit',
        isLoading: isLoading
    }

    const checkBoxData = {
        value: values.terms,
        onChange: handleChange
    }

    const inputs = {
        firstname: {
            type: 'text',
            placeholder: 'Ad',
            autoComplete: 'on',
            name: 'firstname',
            onChange: handleChange,
            value: values.firstname
        },
        lastname: {
            type: 'text',
            placeholder: 'Soyad',
            autoComplete: 'on',
            name: 'lastname',
            onChange: handleChange,
            value: values.lastname
        },
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
        },
        confirmPassword: {
            type: 'password',
            placeholder: 'Şifrəni təkrar daxil edin',
            autoComplete: 'on',
            name: 'confirmPassword',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.confirmPassword,
            pwdInp: true
        }
    }

    return (
        <div className='fadeIn'>
            <FormHeader title="Qeydiyyatdan keçin" />
            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <InputField {...inputs.firstname} />
                </div>
                <div className='mb-5'>
                    <InputField {...inputs.lastname} />
                </div>
                <div className='mb-5'>
                    <InputField {...inputs.email} />
                    {errors.email && touched.email && (
                        <Validator error={errors.email} />
                    )}
                </div>
                <div className='mb-5'>
                    <InputField {...inputs.password} />
                    {errors.password && touched.password && (
                        <Validator error={errors.password} />
                    )}
                </div>
                <div className='mb-6'>
                    <InputField {...inputs.confirmPassword} />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <Validator error={errors.confirmPassword} />
                    )}
                </div>
                <div>
                    <Button data={submitBtnData} />
                    <FormSwitch data={formSwitchData} />
                </div>
                <div className='mt-6'>
                    <Terms checkBoxData={checkBoxData} />
                    {errors.terms && touched.terms && (
                        <div className='flex justify-center'>
                            <Validator error={errors.terms} />
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Register