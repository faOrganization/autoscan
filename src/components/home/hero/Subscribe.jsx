import React from 'react'
import { assets } from "../../../assets/assets";

const Subscribe = () => {
    return (
        <div className="flex items-center justify-center py-1 rounded-2xl bg-primary-t font-medium text-sm text-primary pr-3 pl-1 mb-4">
            <a href="#" className="px-2.5 bg-white rounded-2xl border border-primary mr-3 leading-6 text-nowrap">Abunə ol</a>
            <span className="mr-2">Yeniliklərdən anından xəbərdar ol!</span>
            <img src={assets.arrow_right_ic} alt="arrow" />
        </div>
    )
}

export default Subscribe