import React, { useState } from 'react'
import { assets } from '../../../assets/assets'

const Stepper = ({ currentStep }) => {
    const steps = ["Avtomobil məlumatları", "Avtomobil şəkilləri", "Şəkillərin analizi"];
    return (
        <div className='flex items-center mb-[52px]'>
            {
                steps?.map((step, i) => {
                    const isTargetStep = currentStep === i + 1 || i + 1 < currentStep;
                    return (
                        <div key={i} className='flex items-center'>
                            <div className='flex size-11 rounded-lg bg-primary-t mr-4'>
                                <img src={assets.check_square_thick_ic} alt="Check Square" className={'m-auto ' + (isTargetStep ? 'opacity-100' : 'opacity-60')} />
                            </div>
                            <span className={"font-semibold text-black text-sm " + (isTargetStep ? 'opacity-100' : 'opacity-60')}>{step}</span>

                            {
                                i < 2 && <div className="bg-primary w-7 h-px ml-7 mr-5"></div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stepper