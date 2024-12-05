import React from 'react';
import { assets } from '../../../assets/assets';

const ReportDetails = ({data}) => {
    const {brand, model} = data;
    return (
        <div className='bg-white rounded-lg p-6 min-w-[310px] max-w-[310px] mr-3'>
            <div className='border-b border-silver mb-11 pb-6'>
                <h4 className='font-semibold text-lg text-[#1C1C1C]'>Heasabat detalları</h4>
            </div>
            <ul>
                <li className='flex items-center mb-10'>
                    <div className='bg-primary-t size-[35px] flex rounded-full mr-4'>
                        <img src={assets.car_ic} alt="Car" className='size-3.5 m-auto' />
                    </div>
                    <div>
                        <div className='font-medium text-[#1C1C1C] text-base leading-5'>Avtomobil məlumatları:</div>
                        <span className='text-xs text-[#1C1C1C] font-normal leading-[18px]'>{brand + ' ' + model}</span>
                    </div>
                </li>
                <li className='flex items-center'>
                    <div className='bg-primary-t size-[35px] flex rounded-full mr-4'>
                        <img src={assets.blank_calendar_ic} alt="Car" className='size-3.5 m-auto' />
                    </div>
                    <div>
                        <div className='font-medium text-[#1C1C1C] text-base leading-5'>Hesabat tarixi:</div>
                        <span className='text-xs text-[#1C1C1C] font-normal leading-[18px]'>25/10/2024</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ReportDetails