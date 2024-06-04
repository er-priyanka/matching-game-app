import React from 'react';
import monkey from "../Assets/monkey.png";
import settingIcon from "../Assets/Cog.png";
import starIcon from "../Assets/Star.png";

const Home = () => {
  return (
    <div className='flex  justify-between m-auto'>
        <div className='flex pr-10 pl-10 justify-between items-end w-1/5 border-2' >
            {/* buttons */}
            <div className='border-1px'>
                <img className='h-12 w-12' src={settingIcon} alt="setting button" />
            </div>
            <div>
                <img src={starIcon} alt="Start button" />
            </div>

        </div>
        <div className='w-1/2 border-2'>
            {/* monkey */}
            <img src={monkey} alt="Monkey image" />
        </div>
        <div className='w-1/4 border-2'>
            <button>START</button>
            {/* start button */}
        </div>
        
    </div>
  )
}

export default Home;