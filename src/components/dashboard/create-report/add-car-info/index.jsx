import React, { useEffect, useState } from 'react'
import BrandsDropdown from './dropdowns/BrandsDropdown'
import ModelsDropdown from './dropdowns/ModelsDropdown'
import YearsDropdown from './dropdowns/YearsDropdown'
import Button from '../../../ui/Button'
import { useSelector } from 'react-redux'


const Index = ({setStep}) => {
    const { brandName, modelName } = useSelector(state => state.createReport.carInfo);
    const [brandError, setBrandError] = useState(false);
    const [modelError, setModelError] = useState(false);

    useEffect(() => {
        errorHandler(false)
    }, [brandName, modelName])

    const errorHandler = (isError) => {
        const isBrandNameNull = brandName == null;
        const isModelNameNull = modelName == null;
        isError ? isBrandNameNull && setBrandError(true) || isModelNameNull && setModelError(true) :
            !isBrandNameNull && setBrandError(false) || !isModelNameNull && setModelError(false);
    }

    const nextBtn = () => {
        errorHandler(true)
        if (brandName !== null && modelName !== null) {
            setStep((prev) => prev + 1)
            console.log("T");

        }
    }

    const btnsData = {
        text: 'Növbəti',
        classNames: 'btn btn-primary h-10 w-full max-w-[340px]',
        clickHandler: () => nextBtn()
    }
    return (
        <div className='fadeIn max-w-6xl'>
            <div className='mb-12'>
                <h4 className='mb-10 font-semibold text-[#1C1C1C] text-lg'>Marka, Model və İl məlumatlarını daxil edin</h4>
                <div className='flex space-x-6'>
                    <BrandsDropdown error={brandError} />
                    <ModelsDropdown error={modelError} />
                    <YearsDropdown error={false} />
                </div>
            </div>
            <div className='flex justify-end'>
                <Button data={btnsData} />
            </div>
        </div>
    )
}

export default Index