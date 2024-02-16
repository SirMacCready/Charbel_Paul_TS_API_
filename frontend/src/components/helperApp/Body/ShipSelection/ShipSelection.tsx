import React, { useEffect } from 'react'
import { useState } from 'react';
import './ShipSelection.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
interface IShowItems{
  changeItemDisplay: (herId:number)=>void
}
function ShipSelection({ changeItemDisplay = () => {} }: IShowItems): JSX.Element {
  const [ Ships,setShips ] = useState({})

  const getShips = async (url: string): Promise<void> => {
    await fetch(url)
      .then(response => {
        return response.json();})
        .then(function(json) {
          setShips(json)
        })
  }
  const selectShip = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    const currentTarget = event.currentTarget as HTMLDivElement
    const herId : number = Number(currentTarget.id)
    changeItemDisplay(herId)
  }
  useEffect(() => {
    getShips("http://localhost:1337/ships/herName") 
    }, []) //Add divs and inspire from app
  return (
    <div className="ShipSelection">
        <h2 id='ShipSelectionTitle'>Pick a ship</h2>
        <div id="ShipCollection">
          {Object.values(Ships).map((key: any) => {return ( 
          <div className='HerCard' id={key.id} onClick={(e)=>selectShip(e)} >
            <div className='IconAndName'> 
              <img className='HerImage'  src={(key.icon)}/> 
              <h2></h2>
            </div>
            <div className='Specs'>
              <div id='CargoItem'>
                <p id='CargoSlot'>Cargo Slots</p>
                <p id='ItemSlot'>Item Slots</p>
              </div>
              <div id="NPNav">
                <p id='NP'>Naval Power</p>
                <p id='Nav'>Navigation</p>
              </div>
              <div id="EngineRole">
                <p id='Engine'>Steam Ship</p>
                <p id='Role'>Trade Ship</p>
              </div>
            </div>
          </div>)})}
        </div>
    </div>
  );
}

export default ShipSelection;
