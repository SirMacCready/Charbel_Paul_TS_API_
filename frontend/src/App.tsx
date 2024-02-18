import './App.css';
import { useState } from 'react';
import React from 'react'
import WelcomePage from './components/welcomePage/WelcomePage.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx'
import HelperApp from './components/helperApp/HelperApp.tsx';
function App() {
  const [displayHelper, setHelperDisplay] = useState<boolean>(false);
  // {/* Determines the visibility of the components below : */}
  function handleHelperDisplay(){
    if (displayHelper === false)
      setHelperDisplay(true)
    else
      setHelperDisplay(false)
 }
  return (
    <div className="App">
      <Header changeHelperDisplay = {handleHelperDisplay}/>
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
