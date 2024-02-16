import React from 'react'
import { useState } from 'react';
import './GoodsGrid.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
function GoodsGrid() {
  return (
    <div className="GoodsGrid">
        <input placeholder='Find good by name' className='SearchBar' id="GoodsSearch"></input>
        <div id="GoodsPreview">
        </div>
    </div>
  );
}

export default GoodsGrid;
