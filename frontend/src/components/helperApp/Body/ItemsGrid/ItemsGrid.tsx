import React, { useEffect } from 'react'
import { useState } from 'react';
import './ItemsGrid.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
interface ISetItem {
  setItem : (newItem : Number)=>void
  item : Number[]
}
function ItemsGrid({ setItem, item }: ISetItem) {
  const [ items,setItems ] = useState({})
  const getItems = async (url: string): Promise<void> => {
    await fetch(url)
      .then(response => {
        return response.json();})
        .then(function(json) {
          setItems(json)
        })
  }
  const addToExpedition = (key : any) => {
    
    if (item.includes(key.id)) {
      
      return
    }
    setItem(key);
    return key
    
  }
  useEffect(() => {
    getItems("http://localhost:1337/items/getItems") 
    }, []) 
  return (
    <div className="ItemsGrid">
    <h2>Click on a Item:</h2>
        <div id="ItemsPreview">
          {Object.values(items).map((key: any) =>{
            return(key.type == 0 || key.type == 1? 
              <img className='icons'id={key.id} src={key.icon}
              onClick={() => addToExpedition(key)}
              />
            : null)
          })}
        </div>
    </div>
  );
}

export default ItemsGrid;
