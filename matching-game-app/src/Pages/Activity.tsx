import React, { useState } from 'react'
import BackButton from '../Components/BackButton';
import ProgressBar from '../Components/ProgressBar';
import appleCard from "../Assets/appleCard.png";
import pinkHeartCard from "../Assets/pinkHeart.png";
import blueHeartCard from "../Assets/blueHeart.png";
import heartGroup from "../Assets/heartGroup.png";
import polygon from "../Assets/Polygon 1.png";
import rectangle from "../Assets/Rectangle 159.png";
import data from "../Data/cards.json";
import leftApple from "../Assets/leftApple.png";
import leftOrange from "../Assets/leftOrange.png";
import rightApple from "../Assets/rightApple.png";
import rightOrange from "../Assets/rightOrange.png";
import FinalScreen from '../Components/FinalScreen';
import { ScreenProps } from '../App';


interface Card {
    name: string;
    image: string;
    matched: boolean;
    id: number;
   
    
}

interface GameState {
    leftCards: Card[];
    rightCards: Card[];
    attempts: number;
    matches: number;
    bananas: number;
}

interface ClickedCards {
    leftCard: Card | null;
    rightCard: Card | null;
}

const Activity:React.FC<ScreenProps> = ({handleBackButton, handleNextScreen}) => {
    const [progress, setProgress] = useState<number>(10);
    const [clickedCards, setClickedCards] = useState<ClickedCards>({
        leftCard:null,
        rightCard: null
    })
    const [gameState, setGameState] = useState<GameState>({
        leftCards: data.leftCards,
        rightCards: data.rightCards,
        attempts: 0,
        matches: 0,
        bananas: 0
    });



    const handleLeftCard = (event:React.MouseEvent<HTMLImageElement>,card:Card)=>{
        

        if(clickedCards.leftCard) return;  // prevent selecting multiple left cards
        
        const target = event.target as HTMLImageElement;
        const src = target.src;
        
        target.src = (card.image) == 'leftApple' ? leftApple : leftOrange;

        setClickedCards({...clickedCards, leftCard: card});

        setTimeout(()=>{
            if(clickedCards.rightCard && clickedCards.rightCard.name === card.name){
                // Match found
                setGameState(prevState => ({
                    ...prevState,
                    leftCards: prevState.leftCards.map(c => c.id === card.id ? { ...c, matched: true } : c),
                    rightCards: prevState.rightCards.map(c => c.id === clickedCards.rightCard!.id ? { ...c, matched: true } : c),
                    matches: prevState.matches + 1,
                    bananas: prevState.bananas + 1
                }));
                setClickedCards({leftCard: null, rightCard:null});
                
            }else if(clickedCards.rightCard && clickedCards.rightCard.name !== card.name){
                setClickedCards({leftCard: null, rightCard:null});
                target.src = pinkHeartCard;
            }
        }, 1000);
        
        
    };


    const handleRightCard = (event:React.MouseEvent<HTMLImageElement>, card:Card) =>{
        if (clickedCards.rightCard) return; // Prevent selecting multiple right cards

        const target = event.target as HTMLImageElement;
        const src = target.src;
        // console.log(src);
        
        target.src = (card.image) == 'rightApple' ? rightApple : rightOrange;
        setClickedCards({ ...clickedCards, rightCard: card });

        setTimeout(()=>{
            if (clickedCards.leftCard && clickedCards.leftCard.name === card.name) {
                // Match found
                setGameState(prevState => ({
                    ...prevState,
                    leftCards: prevState.leftCards.map(c => c.id === clickedCards.leftCard!.id ? { ...c, matched: true } : c),
                    rightCards: prevState.rightCards.map(c => c.id === card.id ? { ...c, matched: true } : c),
                    matches: prevState.matches + 1,
                    bananas: prevState.bananas + 1
                }));
                setClickedCards({ leftCard: null, rightCard: null });
                target.src = src;
            }else if(clickedCards.leftCard && clickedCards.leftCard.name !== card.name){
                setClickedCards({leftCard: null, rightCard:null});
                target.src = blueHeartCard;
            }
        }, 1000)
       
    }

    return (
    <div>
        
        {/* back button */}
        <div  
        className='w-90% 
        py-[50px]
        min-h-[100vh]
        m-auto border relative'>
        
        <div 
        onClick={handleBackButton} 
        className='
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
                <ProgressBar progress={gameState.bananas}  />
            </div>
            

            {/* container */}
           { (gameState.bananas < 6) 
           ? <div className='
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
                        gameState.leftCards && gameState.leftCards.map((card, i)=>(
                            <img 
                            key={card.id}
                            className='cursor-pointer' 
                            src= {(clickedCards.leftCard && clickedCards.leftCard.id === card.id ) 
                                ? (clickedCards.leftCard.image === 'leftOrange')? leftOrange : leftApple
                                :pinkHeartCard}
                            style={{
                                visibility: (card.matched)?'hidden':'visible'
                            }}
                            onClick={(event)=>handleLeftCard(event, card)} 
                            alt="pink_Card" />
                        ))
                    }
               </div>

               <div className='grid grid-cols-3'>
                    {
                        gameState.rightCards && gameState.rightCards.map((card, i) =>(
                            <img 
                            
                            key={card.id}
                            className='cursor-pointer' 
                            style={{
                                visibility: (card.matched)?'hidden':'visible'
                            }}
                            onClick={(event)=>handleRightCard(event, card)}
                            src= {(clickedCards.rightCard && clickedCards.rightCard.id === card.id ) 
                                ? (clickedCards.rightCard.image === 'rightOrange')? rightOrange : rightApple
                                :blueHeartCard}
                            alt="blue card" />
                        ))
                    }
               </div>

            </div>
            
            :
            <FinalScreen handleNextScreen={handleNextScreen} />
            
            }
        
                 

        </div>
        
    </div>
  )
}

export default Activity;