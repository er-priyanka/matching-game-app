import React from 'react';
import monkey from "../Assets/monkey.png";
import settingIcon from "../Assets/Cog.png";
import starIcon from "../Assets/Star.png";
import { ScreenProps } from '../App';
// import messageBox from "../Assets/message.png";

const Home: React.FC<ScreenProps> = ({handleBackButton, handleNextScreen}) => {
  return (
    <div className='flex gap-5 justify-between m-auto pt-12'>
        <div className='flex gap-5 pr-10 pl-10 justify-center items-end w-[30%] min-h-[80vh] ' >
            {/* buttons */}
            <div className='
            w-[40%] 
            box-border
            flex-col
            items-center
            justify-center
            
            ' >
                <div className='bg-white w-7 h-3 text-right ml-auto mb-4 rounded-[100%] -rotate-[-31.61deg]'></div>
                <div>
                    <img className='h-[50%] w-[50%] m-auto ' src={settingIcon} alt="setting button" />
                </div>
                <div className='bg-white w-3 h-2 text-right rounded-[100%] rotate-[20deg]'></div>
            </div>

            <div className='
            w-[40%] 
            box-border
            flex-col
            items-center
            justify-center
            
            ' >
                <div className='bg-white w-7 h-3 text-right ml-auto mb-4 rounded-[100%] -rotate-[-31.61deg]'></div>
                <div>
                    <img className='h-[50%] w-[50%] m-auto' src={starIcon} alt="star button" />
                </div>
                <div className='bg-white w-3 h-2 text-right rounded-[100%] rotate-[20deg]'></div>
            </div>

           

        </div>
        <div className='
        w-[70%] 
        flex-column
        items-left
        relative

        '>
            {/* monkey and message */}
            <div className='
            flex
            justify-center
            items-center
            bg-messageBox
            bg-[length:100%_100%]
            bg-no-repeat
            bg-center
            w-[50%]
            h-[25vh]
            mt-2 
            ml-auto mr-40 
            mb-[-40px]'>
                <h1 className='font-[Nunito] font-black text-3xl text-[#11AEC6]'>Welcome Kiddo !</h1>
            </div>
            {/* <img className='w-[40%] h-[150px] ml-auto mr-40 mb-[-30px]' src={messageBox} alt='message' /> */}
            <img className='
            absolute 
            top-[18%] 
            w-[45%] 
             
             
            hover:top-[10%]
            ' 
            src={monkey} alt="Monkey" />
            
            {/* button */}

            <div className='absolute bottom-0 right-[15%] flex justify-center items-center '>
                <div className=' bg-[#FFDF6D] rounded-[30px] pt-1 pb-3 px-2 inline-block'>
                    <div className='bg-[#EDB900] rounded-[30px] py-2 pr-3 pl-1'>
                        <div className='bg-[#FED33B] rounded-[30px] px-2 pl-0'>
                            <div className='bg-white w-7 h-3 text-right rounded-[100%] rotate-[-31.61deg]'></div>
                            <button onClick={handleNextScreen} className='text-5xl px-4  font-[Nunito] font-black text-white  '>START</button>
                            <div className='bg-white w-3 h-2 ml-auto text-right rounded-[100%] rotate-[-31deg]'></div>
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
        {/* <div className='w-1/4 border-2'>
            <button>START</button>
            start button 
        </div> */}
        
    </div>
  )
}

export default Home;