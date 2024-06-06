import React from 'react'
import polygon from "../Assets/Polygon 1.png";
import rectangle from "../Assets/Rectangle 159.png";

const BackButton = () => {
  return (
    <div className='
        box-border
        border-[12px]
        rounded-[25%]
        flex-col
        items-center
        justify-center
        bg-gradient-to-r from-[#56B000] to-[#71BE00]
        p-4 
        shadow-[inset_27px_-25px_22.4px_0_#5F8704]  
        absolute
        top-0
    ' >
        <div className='bg-white w-7 h-3 text-right ml-auto mb-4 rounded-[100%] -rotate-[-31.61deg]'></div>
        <div className='flex  items-center justify-center'>
            <img className='h-[40%] w-[40%] ' src={polygon} alt="back button" />
            <img className='h-[40%] w-[40%] ' src={rectangle} alt="back button" />
        </div>
        <div className='bg-white w-3 h-2 text-right rounded-[100%] rotate-[20deg]'></div>
    </div>
       
  )
}

export default BackButton;