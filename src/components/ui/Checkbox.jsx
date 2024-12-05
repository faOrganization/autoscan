import React from 'react'
import { assets } from '../../assets/assets';

const Checkbox = ({attrs}) => {
    return (
        <label className="flex items-center cursor-pointer relative mr-3">
            <input {...attrs}
                type="checkbox"
                className="peer size-5 cursor-pointer transition-all appearance-none rounded border border-[#1A1A1A] checked:bg-primary checked:border-primary"
                name="terms"
            />
            <span className="absolute m-auto inset-0 flex opacity-0 peer-checked:opacity-100 pointer-events-none">
                <img src={assets.check_ic} className="size-3.5 m-auto" alt="Check" />
            </span>
        </label>
    );
}

export default Checkbox