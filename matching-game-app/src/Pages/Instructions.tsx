import React, { useState } from 'react'
import BackButton from '../Components/BackButton';
import ProgressBar from '../Components/ProgressBar';
import appleCard from "../Assets/appleCard.png";
import pinkHeartCard from "../Assets/pinkHeart.png";
import blueHeartCard from "../Assets/blueHeart.png";
import heartGroup from "../Assets/heartGroup.png";
import polygon from "../Assets/Polygon 1.png";
import rectangle from "../Assets/Rectangle 159.png";
import { ScreenProps } from '../App';

const Instructions:React.FC<ScreenProps> = ({handleBackButton, handleNextScreen}) => {
    const [progress, setProgress] = useState<number>(10);
  return (
    <div>

        {/* back button */}
        <div
        
         className='w-90% 
        py-[50px]
        min-h-[100vh]
        m-auto border relative'>
        <div onClick={handleBackButton} className='
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
        top-10
        left-10
    ' >
        <div className='bg-white w-7 h-3 text-right ml-auto mb-4 rounded-[100%] -rotate-[-31.61deg]'></div>
        <div className='flex  items-center justify-center'>
            <img className='h-[40%] w-[40%] ' src={polygon} alt="back button" />
            <img className='h-[40%] w-[40%] ' src={rectangle} alt="back button" />
        </div>
        <div className='bg-white w-3 h-2 text-right rounded-[100%] rotate-[20deg]'></div>
    </div>
            
            <div className=' w-[60%] m-auto'>
                <ProgressBar progress={progress}  />
            </div>
            

            {/* container */}
            <div className='
            w-[80%]
            mx-auto
            my-[50px]
            flex 
            justify-between
            box-border
            font-[Nunito]
            '
            >
                {/* card 1 */}
                <div className=' 
                w-[25%]
                p-[10px]
                bg-white
                rounded-[69px]
                box-border
                relative
                '>
                    {/* number div */}
                    <div className='
                    w-[fit-content]
                    bg-[#FFCF25]
                    text-white
                    font-bold
                    absolute
                    left-0
                    top-[60%]
                    p-2
                    box-border
                    rounded-r-[10px]
                    shadow-[0px_3px_#edb900]
                    text-xl
                    '>
                        <button >01</button>
                    </div>

                    <div className='relative w-[100%]' >
                        <img className='w-[60%]  m-auto' src={pinkHeartCard} alt="pink heart card" />
                        <img className='w-[60%] absolute top-0 left-[30%]' src={appleCard} alt="apple card" />
                    </div>
                    <p
                    className='
                    text-[#11AEC6]
                    font-extrabold
                    font-[Nunito]
                    text-[30px]
                    w-1/2
                    m-auto
                    ' 
                    >Select a pink card.</p>
                    <p className='text-[#A6C930]'>It has images.</p> 
                </div>

                {/* card 2 */}
                <div className='
                border 
                w-[25%]
                p-[10px]
                bg-white 
                rounded-[69px]
                relative
                '>
                    {/* number div */}
                    <div className='
                        w-[fit-content]
                        bg-[#A6CD25]
                        text-white
                        font-bold
                        absolute
                        left-0
                        top-[60%]
                        p-2
                        box-border
                        rounded-r-[10px]
                        shadow-[0px_3px_#8BAD1D]
                        text-xl
                        '>
                            <button >02</button>
                        </div>

                    <img className='w-[60%] m-auto' src={blueHeartCard} alt="blue heart card" />
                    <p
                    className='
                    text-[#11AEC6]
                    font-extrabold
                    font-[Nunito]
                    text-[30px]
                    w-1/2
                    m-auto
                    ' 
                    >Select a blue card.</p>
                    <p className='text-[#A6C930]'>It has alphabets.</p>
                </div>

                {/* card 3 */}
                <div className='
                p-[10px]
                w-[25%]
                bg-white 
                rounded-[69px]
                relative
                '>
                    {/* number div */}
                    <div className='
                        w-[fit-content]
                        bg-[#FB993D]
                        text-white
                        font-bold
                        absolute
                        left-0
                        top-[60%]
                        p-2
                        box-border
                        rounded-r-[10px]
                        shadow-[0px_3px_#C56204]
                        text-xl
                        '>
                            <button >03</button>
                        </div>

                    <img className=' w-[60%] h-[200px] m-auto object-conver' src={heartGroup} alt="heart group" />
                    <p className='text-[#A6C930]'>If they're same</p>
                    <p
                    className='
                    text-[#11AEC6]
                    font-extrabold
                    font-[Nunito]
                    text-[30px]
                    m-auto
                    ' 
                    >Its a match !</p>
                    <p className='text-[#A6C930]'>otherwise retry :(</p>
                </div>
            </div>
        
        {/* Play button */}
            <div onClick={handleNextScreen} className='absolute bottom-10 right-[10%] flex justify-center items-center '>
                    <div className=' bg-[#FFDF6D] rounded-[30px] pt-1 pb-3 px-2 inline-block'>
                        <div className='bg-[#EDB900] rounded-[30px] py-2 pr-3 pl-1'>
                            <div className='bg-[#FED33B] rounded-[30px] px-2 pl-0'>
                                <div className='bg-white w-7 h-3 text-right rounded-[100%] rotate-[-31.61deg]'></div>
                                <button  className='text-5xl px-4  font-[Nunito] font-black text-white'>PLAY</button>
                                {/* <div className='bg-white w-3 h-2 ml-auto text-right rounded-[100%] rotate-[-31deg]'></div> */}
                            </div>
                            
                        </div>

                    </div>

                    {/* traingle */}
                    <div className='w-0 h-0 
                    border-x-[25px] 
                    border-x-transparent 
                    border-b-[40px] 
                    border-[#FFDF6D]
                    -rotate-[30deg]
                    ml-[-18px]
                    '></div>
                </div>            

            </div>
        
    </div>
  )
}

export default Instructions;