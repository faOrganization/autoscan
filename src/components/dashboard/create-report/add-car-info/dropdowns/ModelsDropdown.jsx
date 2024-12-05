import React, { useEffect, useRef, useState } from 'react'
import { addCarInfo } from '../../../../../features/createReportSlice';
import { useDispatch, useSelector } from 'react-redux';
import DropdownWrap from './DropdownWrap';
import DropdownBtn from './DropdownBtn';
import { useGetModelsQuery } from '../../../../../services/mainApi';
import { skipToken } from "@reduxjs/toolkit/query";

const ModelsDropdown = ({error}) => {
    const { id, modelName } = useSelector(state => state.createReport.carInfo);
    const [brandId, setBrandId] = useState(skipToken)
    const { data, isSuccess } = useGetModelsQuery(brandId)

    const dispatch = useDispatch();
    const [selected, setSelected] = useState(modelName !== null ? modelName : "Model");
    const [disable, setDisable] = useState(true);
    const dropdonContent = useRef();
    const toggleDrodown = () => {
        if (id != null) {
            dropdonContent.current.classList.toggle('hidden');
        }
    }
    useEffect(() => {
        if (id !== null) {
            setBrandId(id)
            setDisable(false);
        }
    }, [id])

    const selectModel = (e, data) => {
        e.preventDefault();
        const modelName = data.carModelName;
        setSelected(modelName);
        dispatch(addCarInfo({ modelName: modelName }));
        toggleDrodown();
    }

    const btnData = {
        selected: selected,
        clickHandler: toggleDrodown,
        disabled: disable,
        isError: error
    }

    return (
        <DropdownWrap title="Avtomobil modeli">
            <DropdownBtn data={btnData} />
            <div className='absolute max-h-52 overflow-y-auto mt-2 py-2 z-10 ring-1 ring-black/5 bg-white shadow-lg w-full px-2 hidden' ref={dropdonContent}>
                {
                    isSuccess ? data?.modelDto.map((model, index) => (
                        <a key={index} href="#" onClick={(e) => selectModel(e, model)} className="block px-4 py-2 transition-colors hover:bg-gray-100 rounded-md">{model.carModelName}</a>
                    )) : 'Loading...'
                }
            </div>
        </DropdownWrap>
    )
}

export default ModelsDropdown