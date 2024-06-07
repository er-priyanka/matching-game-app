import React, { useState } from 'react'
import BackButton from '../Components/BackButton';
import ProgressBar from '../Components/ProgressBar';
import appleCard from "../Assets/appleCard.png";
import pinkHeartCard from "../Assets/pinkHeart.png";
import blueHeartCard from "../Assets/blueHeart.png";
import heartGroup from "../Assets/heartGroup.png";
import polygon from "../Assets/Polygon 1.png";
import rectangle from "../Assets/Rectangle 159.png";


interface CardData {
    name: string;
}

const leftCardData: CardData[] = [
    {name: "orange"},
    {name: "apple"},
    {name: "orange"},
    {name: "apple"},
    {name: "apple"},
    {name: "orange"}
]
const rightCardData: CardData[] = [
    {name: "apple"},
    {name: "orange"},
    {name: "orange"},
    {name: "orange"},
    {name: "apple"},
    {name: "apple"}
]
const Activity:React.FC = () => {
    const [progress, setProgress] = useState<number>(10);
    const [leftCards, setLeftCards] = useState<CardData[]>(leftCardData);
    const [rightCards, setRightCards] = useState<CardData[]>(rightCardData);
    return (
    <div>
        
        {/* back button */}
        <div className='w-90% 
        py-[50px]
        min-h-[100vh]
        m-auto border relative'>
        
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
            gap-[60px]
            justify-between
            box-border
            font-[Nunito]
            '
            >
                {/* left cards */}
               <div className='grid grid-cols-3'>
                    {
                        leftCards && leftCards.map((card, i)=>(
                            <img className='cursor-pointer' src={pinkHeartCard} alt="pink_Card" />
                        ))
                    }
               </div>

               <div className='grid grid-cols-3'>
                    {
                        rightCards && rightCards.map((card, i) =>(
                            <img className='cursor-pointer' src={blueHeartCard} alt="blue card" />
                        ))
                    }
               </div>

            </div>
        
                 

        </div>
        
    </div>
  )
}

export default Activity;