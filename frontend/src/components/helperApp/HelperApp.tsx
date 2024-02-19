import { useState } from 'react';
import React from 'react';
import './HelperApp.css';
import Stats from './Body/Stats/Stats.tsx';
import ShipSelection from './Body/ShipSelection/ShipSelection.tsx';
import CargoHold from './Body/CargoHold/CargoHold.tsx';
import ItemsGrid from './Body/ItemsGrid/ItemsGrid.tsx';
import GoodsGrid from './Body/GoodsGrid/GoodsGrid.tsx';

function HelperApp() {
  const [ShowItems,setItemVisibility] = useState<boolean>(false)
  const [SelectedShip,setShipSelection] = useState<boolean>(false)
  const [herId,setHerId] = useState<number>(0)
  const [Stat,setStats] = useState<object>({})
  const [item,setItem] = useState<number[]>([])
  const [good,setGood] = useState<number[]>([])
  
  function addItem(newitemId: number): void {
    setItem((olditemsId: number[]) => [...olditemsId, newitemId]);
  }
  function addGood(newGoodId: number): void {
    setGood((oldGoodsId: number[]) => [...oldGoodsId, newGoodId]);
  }
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

 //
 let cargoProps : cargoPropsType = {
  "shipStats" : Stat,
  "item" : item,
  "good" : good,
  setItem : setItem,
  setGood : setGood
} 
let itemsGridProps : itemsGridPropsType = {
  "setItem" : addItem,
  "item" : item
} 
let goodsGridProps : goodsGridPropsType = {
  "setGood" : addGood,
  "good" : good
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
    </div>
  );
}

export default HelperApp;