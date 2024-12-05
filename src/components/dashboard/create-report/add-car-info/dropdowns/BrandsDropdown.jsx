import React, { useEffect, useRef, useState } from 'react'
import { addCarInfo } from '../../../../../features/createReportSlice';
import { useDispatch, useSelector } from 'react-redux';
import DropdownWrap from './DropdownWrap';
import DropdownBtn from './DropdownBtn';
import { getBrands } from '../../../../../services/car';
import { useGetBrandsQuery } from '../../../../../services/mainApi';


const BrandsDropdown = ({error}) => {
    const {data, isLoading, isFetching} =  useGetBrandsQuery();
    const {brandName} = useSelector(state => state.createReport.carInfo)
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(brandName !== null ? brandName : "Marka");
    const dropdonContent = useRef();
    const toggleDrodown = () => {
        dropdonContent.current.classList.toggle('hidden');
    }
    const selectBrand = (e, data) => {
        e.preventDefault();
        setSelected(data.brandName);
        dispatch(addCarInfo(data));
        toggleDrodown();
    }

    const btnData = {
        selected: selected,
        clickHandler: toggleDrodown,
        isError: error
    }

    return (
        <DropdownWrap title="Avtomobil markası">
            <DropdownBtn data={btnData} />
            <div className='absolute max-h-52 overflow-y-auto mt-2 py-2 z-10 ring-1 ring-black/5 bg-white shadow-lg w-full px-2 hidden' ref={dropdonContent}>
                { isLoading || isFetching ? 'Loading...' :
                    data.brandDto?.map((brand, index) => (
                        <a key={index} href="#" onClick={(e) => selectBrand(e,brand)} className="block px-4 py-2 transition-colors hover:bg-gray-100 rounded-md">{brand.brandName}</a>
                    ))
                }
            </div>
        </DropdownWrap>
    )
}

export default BrandsDropdown

