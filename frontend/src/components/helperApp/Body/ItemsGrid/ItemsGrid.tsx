import React, { useEffect } from 'react'
import { useState } from 'react';
import './ItemsGrid.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
function ItemsGrid() {
  const [ items,setItems ] = useState({})
  const getItems = async (url: string): Promise<void> => {
    await fetch(url)
      .then(response => {
        return response.json();})
        .then(function(json) {
          setItems(json)
        })
  }
  useEffect(() => {
    getItems("http://localhost:1337/items/getItems") 
    }, []) 
  return (
    <div className="ItemsGrid">
        <input placeholder='Find item by name' className='SearchBar' id="itemSearch"></input>
        <div id="ItemsPreview">
        </div>
    </div>
  );
}

export default ItemsGrid;