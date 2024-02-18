import React, { useEffect } from 'react';
import './CargoHold.css';

interface IShowStats {
  //Interface for stats
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
  itemId: number[];
  goodId: number[];
  setItemId ,
  setGoodId 
}

function CargoHold({ shipStats, itemId, goodId, setItemId, setGoodId}: IShowStats): JSX.Element {

  const saveExpedition = async (url: string): Promise<void> => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: itemId,
        goods: goodId,
        ship: shipStats,
      }),
    });
    setGoodId([])
    setItemId([])
  };

  const cargo_slots: JSX.Element[] = [];
  for (let i = 0; i < shipStats.cargo_slots; i++) {
    cargo_slots.push(
      <div className='Slots' key={`Cargo-${i}`}>
        <div className='Slot' id={`Item-${i}`}>
          {}
          <span className='PlusSign'>+</span>
        </div>
      </div>
    );
  }

  for (let i = 0; i < shipStats.items_slots; i++) {
    cargo_slots.push(
      <div className='Slots' key={`Items-${i}`} id={String(shipStats.id)}>
        <div className='Slot'>
          <span className='PlusSign'>O</span>
        </div>
      </div>
    );
  }

  return (
    <div className='CargoHold'>
      <h2>Add specialists, items, and supplies</h2>
      <div id='CargoPreview'>
        <div id='CargoSlots'>{cargo_slots}</div>
        <button onClick={() => saveExpedition("http://localhost:1337/expedition/newExpedition")}>
          Save Expedition!
        </button>
      </div>
    </div>
  );
}

export default CargoHold;
