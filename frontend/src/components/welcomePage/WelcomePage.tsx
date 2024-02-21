import { useState } from 'react';
import React from 'react'
import './WelcomePage.css';
import LPBody from './Body/LPBody.tsx';
//An interface to make TS stop having panic attacks 
interface IHandleHelper{
    changeHelperDisplay: ()=>void
  }
function WelcomePage({ changeHelperDisplay = () => {} }: IHandleHelper) {
  return (
    <div className="WelcomePage">
      <LPBody changeHelperDisplay = {changeHelperDisplay}/> 
    </div>
  );
}


export default WelcomePage;
