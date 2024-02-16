import { useState } from 'react';
import React from 'react';
import './HelperApp.css';
import Stats from './Body/Stats/Stats.tsx';
import ShipSelection from './Body/ShipSelection/ShipSelection.tsx';
import CargoHold from './Body/CargoHold/CargoHold.tsx';
import ItemsGrid from './Body/ItemsGrid/ItemsGrid.tsx';
import GoodsGrid from './Body/GoodsGrid/GoodsGrid.tsx';
import { log } from 'console';

function HelperApp() {
  const [ShowItems,setItemVisibility] = useState<boolean>(false)
  const [SelectedShip,setShipSelection] = useState<boolean>(false)
  const [herId,setHerId] = useState<number>(0)
  const [Stat,setStats] = useState(false)
  const [Item,setItems] = useState(false)
  function handleShipSelection(hernewId: number){
    if (SelectedShip === false){
      setHerId(hernewId); 
      setShipSelection(true)
      setItemVisibility(true)
    }
    else{
      setHerId(0) 
      setShipSelection(false)
      setItemVisibility(false)
    }
    console.log(herId);
    
    
 }
  return (
    <div className="HelperApp">
        <Stats/>
        <ShipSelection changeItemDisplay = {handleShipSelection}/>
        {
          !ShowItems ? null : 
          <>
          <CargoHold/>
          <ItemsGrid/>
          <GoodsGrid/>
          </>
        }
    </div>
  );
}

export default HelperApp;