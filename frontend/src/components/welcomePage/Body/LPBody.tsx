import React from 'react'
import { useState } from 'react';
import './LPBody.css';
import Welcome from './LPWelcome.tsx';
import LPOverview from './LPOverview.tsx';
interface IHandleHelper{
  changeHelperDisplay: ()=>void
}
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
function LPBody({ changeHelperDisplay = () => {} }: IHandleHelper) {


  return (
    <div className="LPBody">
      <Welcome changeHelperDisplay = {changeHelperDisplay} />
      <LPOverview />
    </div>
  );
}

export default LPBody;
