import React, { useEffect, useRef, useState } from 'react'
import { addCarInfo } from '../../../../../features/createReportSlice';
import { useDispatch, useSelector } from 'react-redux';
import { assets } from '../../../../../assets/assets';
import DropdownWrap from './DropdownWrap';
import DropdownBtn from './DropdownBtn';
const YearsDropdown = ({error}) => {
    const dispatch = useDispatch();
    const { year} = useSelector(state => state.createReport.carInfo);
    const [selected, setSelected] = useState(year !== null ? year : "İstehsal ili");
    const dropdonContent = useRef();
    const toggleDrodown = () => {
        dropdonContent.current.classList.toggle('hidden');
    }
    const [years, setYears] = useState([]);
    let currentYear = new Date().getFullYear();
    const earliesYear = 1970;
    const getAllYears = () => {
        const allYears = [];
        while (currentYear >= earliesYear) {
            allYears.push(currentYear);
            currentYear -= 1;
        }
        setYears([...allYears])
    }
    useEffect(() => {
        getAllYears();
    }, []);

    const selectYear = (e,data) => {
        e.preventDefault();
        setSelected(data);
        dispatch(addCarInfo({ year: data }));
        toggleDrodown();
    }

    const btnData = {
        icon: assets.blank_calendar_ic,
        selected: selected,
        clickHandler: toggleDrodown,
        isError: error
    }

    return (
        <DropdownWrap title="Avtomobil istehsal ili">
            <DropdownBtn data={btnData} />
            <div className='absolute max-h-52 overflow-y-auto  mt-2 py-2 z-10 ring-1 ring-black/5 bg-white shadow-lg w-full px-2 hidden' ref={dropdonContent}>
                {
                    years?.map((year, index) => (
                        <a key={index} href="#" onClick={(e) => selectYear(e,year)} className="block px-4 py-2 transition-colors hover:bg-gray-100 rounded-md">{year}</a>
                    ))
                }
            </div>
        </DropdownWrap>
    )
}

export default YearsDropdown