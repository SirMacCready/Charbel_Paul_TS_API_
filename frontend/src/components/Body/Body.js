import React from 'react'
import { useState } from 'react';
import './Body.css';
import Welcome from './Welcome.tsx';
import Overview from './Overview.tsx';

function Body() {
  const [displayHelper, setHelperDisplay] = useState(false);

  function handleHelperDisplay(){
    console.log(displayHelper);
    if (displayHelper === false)
      setHelperDisplay(true)
    else
      setHelperDisplay(false)
    return displayHelper
 }

  return (
    <div className="Body">
      <Welcome changeHelperDisplay = {handleHelperDisplay}></Welcome>
      <Overview></Overview>
    </div>
  );
}

export default Body;
