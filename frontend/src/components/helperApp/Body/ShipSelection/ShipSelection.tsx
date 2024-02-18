import React, { useEffect } from 'react'
import { useState } from 'react';
import './ShipSelection.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
interface IShowItems{
  changeItemDisplay: (herId:number,ShipStats: object)=>void
}
function ShipSelection({ 
  changeItemDisplay = () => {} }: IShowItems): JSX.Element {
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
    changeItemDisplay(herId,Ships[herId])
    
  }
  useEffect(() => {
    getShips("http://localhost:1337/ships/herName") 
    
    
    }, []) //Add divs and inspire from app
  return (
    <div className="ShipSelection">
        <h2 id='ShipSelectionTitle'>Pick a ship</h2>
        <div id="ShipCollection">
          {Object.values(Ships).map((key: any) => {
            return ( 
          <div className='HerCard' id={key.id} onClick={(e)=>selectShip(e)} >
            <div className='IconAndName'> 
              <img className='HerImage' src={
              (key.icon)}/> 
              <h2></h2>
            </div>
            <div className='Values'>
              <div className='SubValues'>
                <div className='Cargo'>
                    <p className='CargoSlot'>Cargo Slots </p>
                    <p className='CargoSlotValue'>{key.cargo_slots}</p>
                </div>
                <div className='Item'>
                    <p className='ItemSlot'>Item Slots</p>
                    <p className='ItemSlotValue'>{key.items_slots}</p>
                </div>
              </div>
              
              <div className='SubValues'>
                <div className="NavalPower">
                  <p className='NP'>Naval Power</p>
                  <p className='NPValue'>{!key.naval_power ? "-" : key.naval_power }</p>
                </div>
                <div className="Navigation">
                  <p className='Nav'>Navigation</p>
                  <p className='NavValue'>{!key.navigation ? "-" : key.navigation }</p>
                </div>
              </div>
                <div className="Specials">
                  {key.is_special? <p id='IsSpecial'>Special Ship</p> : null }
                  {key.steamer === 0 ? <p id='Engine'>Sailling Ship</p> : key.steamer === 1 ? <p id='Engine'>Steam Ship</p> : <p id='Engine'>Hybrid</p>}
                  <p id='Role'>{key.her_role === 0 ? "Military Ship" : key.her_role === 1 ? "Trade Ship" : null}</p>
              </div>
                </div>
            </div>)})}
        </div>
    </div>
  );
}

export default ShipSelection;
