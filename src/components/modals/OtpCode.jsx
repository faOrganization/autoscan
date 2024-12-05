import FormHeader from './form/FormHeader'
import SubmitBtn from './form/SubmitBtn'
import OtpField from '../ui/OtpField'
import Button from '../ui/Button'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRegisterEmail } from '../../features/auth/registerEmailSlice'
import { useGetUserQuery, useSendOtpMailMutation, useVerifyOtpMutation } from '../../services/mainApi'
import Validator from './form/Validator'
import { setCredentials } from '../../features/auth/authSlice'
import { destroyAllModal, setInactive } from '../../util/modal'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { skipToken } from "@reduxjs/toolkit/query";


const OtpCode = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [error, setError] = useState('');
    const [verifyOtp, { isLoading, isError }] = useVerifyOtpMutation();
    const resendBtnRef = useRef();
    const [sendOtpMail, { isError: isResendOtpError }] = useSendOtpMailMutation();
    const inputRefs = useRef([]);
    const dispatch = useDispatch();
    const { email } = useSelector(state => state.registerEmail);
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);



    let timer;
    let countdown = 60;
    const [time, setTime] = useState(null);
    function startResendTimer() {
        resendBtnRef.current.disabled = true;
        timer = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        if (countdown > 0) {
            setTime(`${countdown} saniyə sonra`);
            countdown--;
        } else {
            resendBtnRef.current.disabled = false;
            setTime(null)
            countdown = 60;
            console.log(timer);

            clearInterval(timer);
        }
    }


    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp)
        const combinedOtp = newOtp.join("");
        if (value && index < 5 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
        console.log(newOtp, combinedOtp);
    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    }



    const resendOtpCode = async () => {
        if (time === null) {
            try {
                const res = await sendOtpMail({ email: email }).unwrap();
                if (!res) {
                    throw new Error(res?.message);
                }
                if (res) {
                    console.log("Gonderildi");
                    startResendTimer();
                }
            } catch (error) {
                console.log(error?.data?.detail);
                setError("Gündəlik limit aşılıb")
                resendBtnRef.current.disabled = true;
            }
        }
    }

    const [userId, setUserId] = useState(skipToken);
    const [token, setToken] = useState(null);
    const { data, isSuccess } = useGetUserQuery(userId)
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            setInactive()
            dispatch(setCredentials({ user: data, token: token }))
            navigate('/dashboard');
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            userInfo: email,
            otpCode: otp.join("")
        }
        if (data.otpCode.length === 6) {
            try {
                const res = await verifyOtp(data).unwrap();
                if (!res.token) throw new Error(res?.message)
                getUserId(res.token.accessToken);

            } catch (error) {
                console.log(error);
                if (error.status === 400) {
                    setError('Kod 6 rəqəmdən ibarət olmalıdır')
                }
                if (error.status === 500) {
                    setError('Kod yalnışdır')
                }
            }
        }

    }

    const submitBtnData = {
        text: 'Hesabınızı təsdiqləyin',
        loadingText: 'Hesabınızı təsdiqlənir',
        classNames: 'btn-dark h-10 w-full',
        type: 'submit',
        isLoading: isLoading
    }
    return (
        <div className='fadeIn'>
            <FormHeader title="Təsdiqləmə kodu" />
            <div className='mb-5 text-center'>
                <p className='text-sm'><span className='font-medium text-[#1A1A1A]'>{email}</span><span className='font-normal text-[#585A5C]'> ünvanına kod göndərdik</span></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='mb-3 flex justify-between items-center'>
                    {otp.map((value, index) => {
                        return (
                            <OtpField
                                key={index}
                                value={value}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onChange={(e) => handleChange(index, e)}
                                inpRef={(el) => {
                                    inputRefs.current[index] = el;
                                }}
                            />
                        )
                    })
                    }
                </div>
                {isResendOtpError || isError &&
                    <div className='flex justify-center mb-3'>
                        <Validator error={error} />
                    </div>
                }

                <div className='mb-5 mt-3 text-center'>
                    <p><span className='text-base'>Kodu almadınız? {time}</span> <button ref={resendBtnRef} type='button' onClick={resendOtpCode} className='text-primary text-sm disabled:text-gray-500'>Yenidən göndər</button></p>
                </div>
                <div>
                    <Button data={submitBtnData} />
                </div>
            </form>
        </div>
    )
}

export default OtpCode