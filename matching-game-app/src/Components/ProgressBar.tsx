import React from 'react';
import banana from "../Assets/banana.png";

interface ProgressBarProps {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress}) => {
  return (
    <div className='flex justify-start items-center'>
        <div className='w-[70%] bg-[#E2F2F5] rounded-[5px] h-6 overflow-hidden'>
          <div className='bg-[#FFCF25] h-full transition-all duration-500'
          style={{width: `${progress}%`}} />
        </div>
        <div className='ml-[-60px]'>
          <img className='w-20 h-20 rotate-[-20deg]' src={banana} alt="banana" />
        </div>
    </div>
    
  )
}

export default ProgressBar;