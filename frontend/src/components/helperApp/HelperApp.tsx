import { useState } from 'react';
import React from 'react';
import './HelperApp.css';
import Stats from './Body/Stats/Stats.tsx';
import ShipSelection from './Body/ShipSelection/ShipSelection.tsx';
import CargoHold from './Body/CargoHold/CargoHold.tsx';
import ItemsGrid from './Body/ItemsGrid/ItemsGrid.tsx';
import GoodsGrid from './Body/GoodsGrid/GoodsGrid.tsx';
import SavedExpeditions from './Body/SavedExpeditions/SavecExpeditions.tsx';

function HelperApp() {

  //All our states
  const [ShowItems,setItemVisibility] = useState<boolean>(false)
  const [SelectedShip,setShipSelection] = useState<boolean>(false)
  const [herId,setHerId] = useState<number>(0)
  const [Stat,setStats] = useState<object>({})
  const [item,setItem] = useState<number[]>([])
  const [good,setGood] = useState<number[]>([])
  const [savedExpeditions,setSavedExpeditions] = useState<number[]>([])
  
  
  //Add item/Goods to the expediton
  function addItem(newitemId: number): void {
    setItem((olditemsId: number[]) => [...olditemsId, newitemId]);
  }
  function addGood(newGoodId: number): void {
    setGood((oldGoodsId: number[]) => [...oldGoodsId, newGoodId]);
  }

  //Handles if a ship has been selected to display items
  function handleShipSelection(hernewId: number, ShipStats: object){
    
    if (SelectedShip === false){
      setHerId(hernewId); 
      setStats(ShipStats)
      setShipSelection(true)
      setItemVisibility(true)
      
    }
    else{
      setHerId(0) 
      setStats({"error" : "Empty"})
      setShipSelection(false)
      setItemVisibility(false)
    }
    
    
 }

 //Custom types so typescript will stop yelling at me
 type cargoPropsType = {
  shipStats: {
    id: number;
    icon: string;
    cargo_slots: number;
    items_slots: number;
    naval_power: number;
    navigation: number;
    is_special: number;
    steamer: number;
    her_role: number;
    is_unique: number;
  };
  //anies, anys, anyies ? "any"ways, the only any rows of doom of that project 
  item : any;
  good : any;
  setItem : any,
  setGood : any
 } 
 type itemsGridPropsType = {
  "setItem" : any
  "item" : any
 } 
 type goodsGridPropsType = {
  "setGood" : any
  "good" : any
 }
 type savedExpeditionsPropsType = {
  "savedExpeditions" : [{
  "expedition_id" : number,
  "ship_id" : number,
  "item_id" : number,
  "good_id" : number
}],
"setSavedExpeditions" : any
 }
 //Props to be passed to children
 //It just works, ignore the errors (please)
 let cargoProps : cargoPropsType = {
  "shipStats" : Stat,
  item,
  good,
  setItem,
  setGood
} 
let itemsGridProps : itemsGridPropsType = {
  "setItem" : addItem,
  item
} 
let goodsGridProps : goodsGridPropsType = {
  "setGood" : addGood,
  good
} 

 //It just works, ignore the errors ( please )
let savedExpeditionsProps : savedExpeditionsPropsType = {
  savedExpeditions,
  setSavedExpeditions
}

  return (
    <div className="HelperApp">
        <Stats/>
        <ShipSelection changeItemDisplay = {handleShipSelection}/>
        {
          !ShowItems ? null : 
          <>
          <CargoHold {...cargoProps}/>
          <div className='ItemSelection'>
            <ItemsGrid {...itemsGridProps}/>
            <GoodsGrid {...goodsGridProps}/>
          </div>
          </>
        }
        <SavedExpeditions {...savedExpeditionsProps}/>
    </div>
  );
}

export default HelperApp;