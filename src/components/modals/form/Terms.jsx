import React from 'react'
import Checkbox from '../../ui/Checkbox'
import { Link } from 'react-router-dom'

const Terms = ({checkBoxData}) => {
    return (
        <div className='flex items-center justify-center'>
            <Checkbox attrs={checkBoxData}/>
            <p className="text-xs font-normal text-[#4C4C4C]">
                Daxil olarkən, siz{" "}
                <Link to='/' className="text-[#1A1A1A] font-bold">
                İstifadə şərtləri{" "}
                </Link>
                və <br />
                <Link to='/' className="text-[#1A1A1A] font-bold">
                Məxfilik siyasəti{" "}
                </Link>
                ilə razı olduğunuzu qəbul edirsiniz
            </p>
        </div>
    )
}

export default Terms