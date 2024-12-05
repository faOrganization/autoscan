import React from 'react'
import DeleteImgBtn from './DeleteImgBtn'

const ImagesPreview = ({preview, setPreview, setFiles, files}) => {
    return (
        <div className='flex space-x-2 relative z-10'>
            {
                preview.map((img, index) => {
                    return <div key={index} className='rounded-md overflow-hidden w-[89px] h-[76px] relative'>
                        <img src={img} alt='Car' className='object-cover size-full' />
                       <DeleteImgBtn index={index} preview={preview} setPreview={setPreview} setFiles={setFiles} files={files}/>
                    </div>
                })
            }
        </div>
    )
}

export default ImagesPreview