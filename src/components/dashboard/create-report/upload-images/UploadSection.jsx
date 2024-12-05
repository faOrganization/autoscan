import React, { useRef } from 'react'
import { assets } from '../../../../assets/assets'
import { addCarInfo } from '../../../../features/createReportSlice';
import { useDispatch, useSelector } from 'react-redux';

const UploadSection = ({ preview, setPreview, files, setFiles, error }) => {
    const {images} = useSelector(state => state.createReport.carInfo)
    const inpRef = useRef(null);
    const dispatch = useDispatch();
    const clickHandler = () => {
        if (inpRef.current) {
            inpRef.current.click()
        }
    }

    const fileChange = (event) => {
        const files = Array.from(event.target.files)
        const sliceedFiles = files.slice(0, 5 - preview.length)
        for (const img of sliceedFiles) {
            setFiles(filess => [...filess, img])
        }



        sliceedFiles.map((file) => {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                coverter(event.target.result)
            }
            fileReader.readAsDataURL(file)
        })

        function coverter(file, data) {
            dispatch(addCarInfo({images: [...images , file]}))
            setPreview(prevFile => [...prevFile, file])
        }
    }
    return (
        <div className={'rounded-lg flex relative border-dashed border border-[#1E64EE] h-[265px] w-full ' + (error && 'border-red-700')}>
            <button type='button' onClick={clickHandler} className='absolute inset-0 rounded-lg outline-none ring-[#1E64EE] focus:ring-2'></button>
            <div className='m-auto text-center text-lg leading-6'>
                <input type="file" ref={inpRef} onChange={fileChange} className='hidden' multiple accept='image/png, image/jpeg, image/jpg' />
                <img src={assets.ai_generator_img_ic} className='mx-auto mb-3' alt="" />
                <div className='font-semibold text-[#1C1C1C] mb-3'>Şəkil yüklə</div>
                <div className='flex items-center justify-center'>
                    <img src={assets.info_gray_ic} className='size-[14px] mr-2' alt="" />
                    <span className='text-[#999999] font-normal'>Max size 10 MG</span>
                </div>
            </div>
        </div>
    )
}

export default UploadSection