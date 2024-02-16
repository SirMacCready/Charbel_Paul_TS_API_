import { useState } from 'react';
import React from 'react'
import './LPWelcome.css';
//An Interface to implement it to the component "LPWelcome" and be able to use it in it  
interface IHandleHelper{
  changeHelperDisplay: ()=>void
}
function LPWelcome({ changeHelperDisplay = () => {} }: IHandleHelper){
  
  return (
    <div className="LPWelcome">
        <div className='Container'>
            <div id="Text">
                <h1 >Prepare to the expedition</h1>
                <h1 id="blue-text">with ease!</h1>
                <p id="Description">Anno 1800 Expedition Helper is created to simplify the process of combining items and goods and help equip ships in a better way.</p>
            </div>
            <div className="Button" onClick={() =>changeHelperDisplay()}> 
                <h3 id="Texte" >Let's begin</h3>
            </div>
        </div>

        <img id="Welcome-Image"src="https://www.anno-expeditions.app/assets/sailing_ship_57972f3c-6d28-4cc8-a116-53a852eaff56-2-bde231d4.webp"></img>
    </div>
  );
}

export default LPWelcome;