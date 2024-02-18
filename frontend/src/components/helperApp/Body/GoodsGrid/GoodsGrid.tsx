import React, { useEffect } from 'react'
import { useState } from 'react';
import './GoodsGrid.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
interface ISetGoodId {
  setGoodId : (newgoodId : Number)=>void
  goodId : Number[]
}
function GoodsGrid({ setGoodId, goodId }: ISetGoodId) {
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
    
    if (goodId.includes(key.id)) {
      
      return
    }
    setGoodId(key.id);
    return key
    
    
  }
  useEffect(() => {
    getItems("http://localhost:1337/items/getItems") 
    }, []) 
  return (
    <div className="GoodsGrid">
      <h2>Click on a Good:</h2>
        <div id="GoodsPreview">
          {Object.values(items).map((key: any) =>{
            return(key.type == 2? 
            <div className="goods" id={key.id}>
              <img className='icons' src={key.icon}
              onClick={() => addToExpedition(key)}/>
            </div> 
            : null)
          })}
        </div>
    </div>
  );
}

export default GoodsGrid;
