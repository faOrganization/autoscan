import React from 'react'
import { assets } from '../../../assets/assets'
import parse from 'html-react-parser';


const AccordionBtn = ({styles, title}) => {
    const toggleAccordion = (e) => { 
        e.target.closest('.accordion').classList.toggle('accordion-active');
     }
    return (
        <button type='button' className={"inline-flex items-center text-left w-full " + styles.btn} onClick={toggleAccordion} >
            <h5 className="mr-2">
                {parse(title)}
            </h5>
            <img className={"transition group-[.accordion-active]:rotate-90 " + styles.icon_size} src={assets.chevron_right_ic} alt="Chevron-Righ" />
            
        </button>
    )
}

export default AccordionBtn;