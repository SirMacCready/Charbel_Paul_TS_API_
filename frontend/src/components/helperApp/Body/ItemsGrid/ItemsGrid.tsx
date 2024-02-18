import React, { useEffect } from 'react'
import { useState } from 'react';
import './ItemsGrid.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
interface ISetItemId {
  setItemId : (newitemId : Number)=>void
  itemId : Number[]
}
function ItemsGrid({ setItemId, itemId }: ISetItemId) {
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
    
    if (itemId.includes(key.id)) {
      console.log('niet');
      
      return
    }
    console.log('da');
    setItemId(key.id);
    return key
    
  }
  useEffect(() => {
    getItems("http://localhost:1337/items/getItems") 
    }, []) 
  return (
    <div className="ItemsGrid">
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
