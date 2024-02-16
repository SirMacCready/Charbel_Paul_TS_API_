import React from 'react'
import { useState } from 'react';
import './CargoHold.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
function CargoHold() {
  return (
    <div className="CargoHold">
        <h2>Add specialists, items and supplies</h2>
        <div id="CargoPreview">
        </div>
    </div>
  );
}

export default CargoHold;
