import React, { useState } from 'react'
import { assets } from '../../../../assets/assets';
import { useDispatch } from 'react-redux';
import {removeImg} from '../../../../features/createReportSlice'

const DeleteImgBtn = ({index, preview, setPreview, setFiles, files}) => {
    const dispatch = useDispatch()
    const deleteHandler = (index) => {
        const copy = [...preview];
        const copyFiles = [...files];
        copyFiles.splice(index, 1);
        copy.splice(index, 1);
        setPreview(copy);
        setFiles(copyFiles);
        dispatch(removeImg(copy))
    }
    return (
        <button type='button' onClick={() => deleteHandler(index)} className='opacity-0 hover:opacity-100 absolute transition-opacity bg-[#00000088] inset-0 m-auto '>
            <img src={assets.trash_ic} className='size-3.5 m-auto' alt="Delete" />
        </button>
    )
}

export default DeleteImgBtn