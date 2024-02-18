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
  const [itemId,setItemId] = useState<number[]>([])
  const [goodId,setGoodId] = useState<number[]>([])
  
  function addItemId(newitemId: number): void {
    setItemId((olditemsId: number[]) => [...olditemsId, newitemId]);
  }
  function addGoodId(newGoodId: number): void {
    setGoodId((oldGoodsId: number[]) => [...oldGoodsId, newGoodId]);
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
  itemId : number[];
  goodId : number[];
 } 
 type itemsGridPropsType = {
  "setItemId" : any
  "itemId" : number[]
 } 
 type goodsGridPropsType = {
  "setGoodId" : any
  "goodId" : Number[]
 }
 let cargoProps : cargoPropsType = {
  "shipStats" : Stat,
  "itemId" : itemId,
  "goodId" : goodId
} 
let itemsGridProps : itemsGridPropsType = {
  "setItemId" : addItemId,
  "itemId" : itemId
} 
let goodsGridProps : goodsGridPropsType = {
  "setGoodId" : addGoodId,
  "goodId" : goodId
} 

console.log(goodId+"|"+itemId);

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