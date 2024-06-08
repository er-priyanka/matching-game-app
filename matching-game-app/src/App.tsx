import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import IntroOne from './Pages/IntroOne';
import IntroTwo from './Pages/IntroTwo';
import Instructions from './Pages/Instructions';
import Activity from './Pages/Activity';

// Define the type for the props that will be passed to each screen component
export interface ScreenProps {
  handleBackButton: () => void;
  handleNextScreen: () => void;
}

function App() {
  const [screen, setScreen] = useState<number>(1);

  const handleBackButton = (): void => {
    
    setScreen(prev => {
      

      if (prev === 1) {
        return 5;
      }
      return prev - 1;
    });
  }

  const handleNextScreen = (): void => {
    // console.log('clicked');
    setScreen(prev => {
      // console.log(prev, screen);
      if (prev == 5) {
        return 1;
      }
      return prev + 1;
    });
  }

  return (
    <div className="App">
      {
        screen === 1 ? <Home handleBackButton={handleBackButton} handleNextScreen={handleNextScreen} />
        : screen === 2 ? <IntroOne handleBackButton={handleBackButton} handleNextScreen={handleNextScreen} />
        : screen === 3 ? <IntroTwo handleBackButton={handleBackButton} handleNextScreen={handleNextScreen} />
        : screen === 4 ? <Instructions handleBackButton={handleBackButton} handleNextScreen={handleNextScreen} />
        : screen === 5 ? <Activity handleBackButton={handleBackButton} handleNextScreen={handleNextScreen} />
        : <>Something went wrong</>
      }
    </div>
  );
}

export default App;
