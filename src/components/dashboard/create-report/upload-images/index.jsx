import React, { useEffect, useState } from 'react'
import { useUploadAccidentPicMutation } from '../../../../services/mainApi';
import Button from '../../../ui/Button';
import ImagesPreview from './ImagesPreview';
import ImagePlaceholders from './ImagePlaceholders'
import UploadSection from './UploadSection';
import { useSelector } from 'react-redux';

const Index = ({ setStep }) => {
    const [uploadAccidentImgs] = useUploadAccidentPicMutation();
    const { images } = useSelector(state => state.createReport.carInfo)
    const [preview, setPreview] = useState(images.length !== 0 ? [...images] : []);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false)
    }, [preview])


    const submitHandler = async () => {
        // if (images.length < 1) {
        //     setError(true)
        //     return
        // }
            setStep(prev => prev + 1)
            for (const img of files) {
                // const formData = new FormData();
                // formData.append('files', img)

                // const res = await uploadAccidentImgs(formData).unwrap()

                // console.log(res);
            }
    }

    const prevBtnData = {
        text: 'Geriyə',
        classNames: 'btn btn-outline h-10 w-full max-w-[340px]',
        clickHandler: () => setStep(prev => prev - 1)
    }

    const nextBtnData = {
        text: 'Analiz et',
        classNames: 'btn btn-primary font-medium h-10 w-full max-w-[340px]',
        clickHandler: () => submitHandler()
    }


    return (
        <div className='pt-9 pb-5 px-5 w-full h-full border border-[#E5E5E5] rounded-lg fadeIn'>
            <div className='max-w-[478px] w-full mx-auto space-y-6'>
                <div className='text-center'>
                    <h2 className='text-lg font-semibold text-[#1C1C1C]'>Aydın görünən şəkilləri yükləyin</h2>
                </div>
                <UploadSection  error={error} preview={preview} setPreview={setPreview} files={files} setFiles={setFiles} />
                <div className='relative h-[76px]'>
                    <ImagePlaceholders/>
                    <ImagesPreview preview={preview} setPreview={setPreview} setFiles={setFiles} files={files} />
                </div>
                <div className='flex gap-6'>
                    <Button data={prevBtnData} />
                    <Button data={nextBtnData} />
                </div>
            </div>
        </div>
    )
}

export default Index