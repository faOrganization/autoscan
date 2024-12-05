import React, { useEffect, useState } from 'react'
import { useLoginMutation } from '../../../services/mainApi'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AnalyzeImages = () => {
    const [login, { isSuccess }] = useLoginMutation();
    const [loadingCount, setLoadingCount] = useState(100);
    const { images } = useSelector(state => state.createReport.carInfo)
    const navigate = useNavigate();

    console.log(images);


    useEffect(() => {
        if (loadingCount > 20) {
            const loading = setInterval(() => {
                setLoadingCount((prev) => {
                    if (prev - 1 === 20) {
                        clearInterval(loading);
                    }
                    return prev - 1;
                });
            }, 100);
            return () => {
                clearInterval(loading);
            };
        }
    }, [loadingCount]);



    return (
        <div className='border border-[#E5E5E5] rounded-lg p-5 max-w-[610px] fadeIn'>
            <div className='mb-6'>
                <h3 className='text-[#1C1C1C] font-semibold text-lg leading-6 mb-2'>Şəkillər analiz edilir</h3>
                <p className='font-medium text-base text-[#1C1C1C]'>Detallı hesabatınız hazırlanır</p>
            </div>
            <div>
                <div className=' bg-[#E9E9E9] rounded-lg p-6 h-[334px] relative overflow-hidden'>
                    <div>
                        {
                            images?.map((img, i) => (
                                <img key={i} src={img} className={`rounded-md object-cover m-auto absolute inset-0 size-11/12`} alt="Car Image" />
                            ))
                        }
                    </div>
                    <span className='text-lg text-[#5A5A5A] font-normal z-30 absolute bottom-6 right-6'>
                        {loadingCount}%
                    </span>
                    <div className='absolute top-0 right-0 z-10 transition-[width] h-full bg-[#d9d9d97a] backdrop-blur' style={{ width: `${loadingCount}%` }}></div>
                </div>
            </div>
        </div>
    )
}

export default AnalyzeImages