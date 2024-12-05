import React from 'react'
import { createModal } from '../../../util/modal'
import { Link } from 'react-router-dom';

const ReportResult = ({ data }) => {
    const { repair_duration_days, total_cost_chinese_parts_AZN, total_cost_original_parts_AZN } = data;
    console.log(data);

    return (
        <div className='bg-white max-w-[303px] min-w-[303px] rounded-lg  h-[341px] p-[9px] sticky top-3'>
            <div className='bg-[#2062ED] rounded-md py-6 px-[15px] flex flex-col h-full'>
                <div className='pb-6 border-b border-[#5486EF] mb-6'>
                    <h4 className='font-semibold text-lg text-white'>Ümumi müddət və xərc</h4>
                </div>
                <ul className='text-white space-y-4 text-xs font-light'>
                    <li className='flex justify-between'>
                        <div>Təmir müddəti</div>
                        <div>{repair_duration_days}</div>
                    </li>
                    <li className='flex justify-between'>
                        <div>iyməti (Orijinal)</div>
                        <div>{total_cost_original_parts_AZN}</div>
                    </li>
                    <li className='flex justify-between'>
                        <div>Qiyməti (Çin)</div>
                        <div>{total_cost_chinese_parts_AZN}</div>
                    </li>
                </ul>
                <div className='mt-auto'>
                    <Link to='/dashboard'>
                        <span className='bg-[#F7F9FB] text-[#1C1C1C] flex items-center justify-center rounded text-xs font-semibold w-full h-8'>
                            Hesabat yarat
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ReportResult