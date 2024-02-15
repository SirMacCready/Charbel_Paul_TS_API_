import './App.css';
import { useState } from 'react';
import React from 'react'
import WelcomePage from './components/welcomePage/WelcomePage.tsx';
import HelperApp from './components/helperApp/HelperApp.tsx';
function App() {
  const [displayHelper, setHelperDisplay] = useState(false);
  function handleHelperDisplay(){
    if (displayHelper === false)
      setHelperDisplay(true)
    else
      setHelperDisplay(false)
    console.log(displayHelper);
    return displayHelper
 }
  return (
    <div className="App">
      {
      !displayHelper ? 
      <WelcomePage changeHelperDisplay = {handleHelperDisplay}/>  
      : 
      <HelperApp/>
      }
    </div>
  );
}

export default App;
