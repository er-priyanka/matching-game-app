import React from 'react';
import happyMonkey from "../Assets/happyMonkey.png";
import reward from "../Assets/reward.png";
import banana from "../Assets/banana.png";

interface ScreenProps {
  handleNextScreen: ()=>void
}

const FinalScreen:React.FC<ScreenProps> = ({handleNextScreen}) => {
  return (
    <div className='
    w-[80%]
    m-auto
    relative
    '>

      <img 
      className='
      w-[100px] 
      h-[118px]
      absolute
      top-[25%]
      left-[20%]
      rotate-[-20deg]
      '
      src={banana} alt="banana_1" />

      <img 
      className='
      w-[100px] 
      h-[118px]
      absolute
      top-[60%]
      left-[20%]
      rotate-[10deg]
      '
      src={banana} alt="banana_2" />

      <img 
      className='
      w-[100px] 
      h-[118px]
      absolute
      top-[25%]
      right-[25%]
      rotate-[-20deg]
      '
      src={banana} alt="banana_3" />

      <img 
      className='
      w-[100px] 
      h-[118px]
      absolute
      top-[50%]
      right-[15%]
      rotate-[-50deg]
      '
      src={banana} alt="banana_4" />

      <img 
      className='
      w-[100px] 
      h-[118px]
      absolute
      top-[80%]
      right-[25%]
      rotate-[-50deg]
      '
      src={banana} alt="banana_5" />


      {/* final card */}
      <div className='
      w-[30%]
      
      m-auto
      
      relative
      '>
        <img
        className='w-[100%]'
        src={reward} alt="reward" />

        <div className='
        bg-white 
        mx-auto 
        mt-[-50px] 
        p-[20px] 
        w-[90%]
        rounded-b-[20px]
        '>
          <img
          className='w-[90%] m-auto mt-6'
           src={happyMonkey} alt="happy monkey" />
          <button
          onClick={handleNextScreen}
          className="
          w-full
          my-2
          bg-[#FFCF25]
          text-white
          font-[Nunito]
          font-bold
          p-[10px_20px]
          rounded-[20px]
          border-2
          border-[#e5b50a]
          shadow-[0_6px_#EDB900]
          "
          >YAY, OK!</button>
        </div>
        
      </div>
    </div>
  )
}

export default FinalScreen