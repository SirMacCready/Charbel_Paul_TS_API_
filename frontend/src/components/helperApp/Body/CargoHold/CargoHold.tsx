import React, { useEffect } from 'react';
import './CargoHold.css';
import { jsPDF } from "jspdf";
import { log } from 'console';
interface IShowStats {
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
  item ;
  good ;
  setItem ,
  setGood 
}

function CargoHold({ shipStats, item, good, setItem, setGood}: IShowStats): JSX.Element {
  
  const saveExpedition = async (url: string): Promise<void> => {
    let goodsId : Number[] = []
    let itemsId : Number[] = []
    item.forEach(element => {
      itemsId.push(element.id)
    })
    good.forEach(element => {
      goodsId.push(element.id)
      })
    
    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: itemsId,
        goods: goodsId,
        ship: shipStats.id,
      }),
    });
    

    let pdfExpedition = new jsPDF('l', 'px', "a4", true)
    let expeditionItems : string= ""
    let expeditionGoods : string= ""
    let expeditionShip = `<img style="width:20px;background-color:white;" src="${shipStats.icon}"/>`
    item.forEach(element => {
      expeditionItems += (`<img style="width:20px;background-color:white;" src="${element.icon}"/>`)
    })
    good.forEach(element => {
      expeditionGoods += (`<img style="width:20px;background-color:white;" src="${element.icon}"/>`)
      })
    
    const expeditionHtml =`<h2 style="display:inline;width:100%;font-size:24px;">Our Glorious Expedition :</h2> <br/>
                              <div className="herIcon">
                                <h3 style="width:100%;font-size:12px">Our Ship :</h3>
                                ${expeditionShip}
                                <h3 style="width:100%;font-size:12px">Our Items :</h3>
                                ${expeditionItems}
                                <h3 style="width:100%;font-size:12px">Our goods :</h3>
                                ${expeditionGoods}
                              </div>`
    const html = `<div style="width:1350px">${expeditionHtml}</div>` 
    let source = document.querySelector(".CargoHold")
    
    const htmled = pdfExpedition.html(html)
    htmled.save("A New Expedition !")
    
    setGood([])
    setItem([])
  };
function resetCargo() {
  setGood([])
  setItem([])
}
  const cargo_slots: JSX.Element[] = [];
  for (let i = 0; i < shipStats.cargo_slots; i++) {
    
    {item[i]?.id ? cargo_slots.push(
      <div className='Slots' key={`Cargo-${i}`}>
          <img  className="ItemPic" src={item[i].icon}/> 
      </div>
    ) : 
    cargo_slots.push(
      <div className='Slots' key={`Cargo-${i}`}>
        <div className='Slot' id={`Item-${i}`}>
          <span className='PlusSign'>+</span>
        </div>
      </div>
    );}
  }

  for (let i = 0; i < shipStats.items_slots; i++) {
    {good[i]?.id ? cargo_slots.push(
      <div className='Slots' >
          <img className="GoodPic" src={good[i].icon}/>
      </div>
    ) : 
    cargo_slots.push(
      <div className='Slots' >
        <div className='Slot' id={`good-${i}`}>
          <span className='PlusSign'>O</span>
        </div>
      </div>
    );}
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
      <div id="Reset">
        <button onClick={()=>resetCargo()}>↺</button>
      </div>
    </div>
  );
}

export default CargoHold;
