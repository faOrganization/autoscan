import React, { useState } from 'react'
import AddCarInfo from './add-car-info/'
import UploadImages from './upload-images/'
import AnalyzeImages from './AnalyzeImages'

import Stepper from './Stepper'

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className='bg-white w-full rounded-lg flex flex-col p-7 cont-h'>
      <Stepper currentStep={currentStep}/>
      {
        (currentStep == 1 ? <AddCarInfo setStep={setCurrentStep}/> : '') ||
        (currentStep == 2 ? <UploadImages setStep={setCurrentStep}/> : '') ||
        (currentStep == 3 ? <AnalyzeImages/> : '')
      }

    </div>
  )
}

export default Index