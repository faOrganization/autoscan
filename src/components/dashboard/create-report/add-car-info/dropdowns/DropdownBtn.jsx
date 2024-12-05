import React from 'react'
import { assets } from '../../../../../assets/assets';

const DropdownBtn = ({data}) => {
    const {icon = assets.arrow_down_ic, selected,  disabled = false, clickHandler, isError} = data;
    return (
        <div>
            <button onClick={() => clickHandler()} type='button' disabled={disabled} className={'inline-flex tex py-2.5 pl-3 pr-4 justify-between items-center w-full rounded-md bg-[#f6f6f6] ' + (isError && 'ring-1 ring-red-600')}>
                {selected}
                <img src={icon} alt="Dropdown Icon" />
            </button>
        </div>
    )
}

export default DropdownBtn