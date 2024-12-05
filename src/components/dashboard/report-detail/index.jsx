import React from 'react'
import { assets } from '../../../assets/assets'
import TableTwo from '../table/TableTwo';
import ReportImgs from './ReportImgs';
import ReportDetails from './ReportDetails';
import ReportResult from './ReportResult';
import {reportData} from '../../../data/reportData'


const Index = () => {
  console.log(reportData);
  
  const images = [
    assets.car_img,
    assets.car_img,
    assets.car_img,
    assets.car_img,
    assets.car_img,
  ]

  return (
    <div>
      <div className='flex mb-3'>
        <ReportDetails data={reportData.vehicle}/>
        <ReportImgs data={images}/>
      </div>
      <div className='flex '>
        <div className='mr-3 w-full p-[22px] bg-white overflow-y-auto'>
        <TableTwo data={reportData.damaged_parts}/>
        </div>
        <ReportResult data={reportData.total}/>
      </div>
    </div>
  )
}

export default Index