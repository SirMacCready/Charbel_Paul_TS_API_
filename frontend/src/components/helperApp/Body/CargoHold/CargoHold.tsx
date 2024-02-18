import React from 'react'
import { useState } from 'react';
import './CargoHold.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
interface IShowStats{
  shipStats : object
}
function CargoHold(
  shipStats : IShowStats): JSX.Element {
  return (
    <div className="CargoHold">
        <h2>Add specialists, items and supplies</h2>
        <div id="CargoPreview">
            <div id='CargoSlots'>
              {Object.values(shipStats).map((key: any) => {
                const cargo_slots : Array<any> = []
                const items_slots : Array<any> = []
                for(let i=0; i < key.cargo_slots; i++) {
                  cargo_slots.push(
                    <div className='Slots' id={key.id}>
                      <div className='Slot'>
                        <span className='PlusSign'>
                          +
                        </span>
                      </div>
                    </div>
                  )
                }
                for(let i = 0; i< key.items_slots; i++){
                  cargo_slots.push(
                    <div className='Slots' id={key.id}>
                      <div className='Slot'>
                        <span className='PlusSign'>
                          -
                        </span>
                      </div>
                    </div>
                  )
                }
                return cargo_slots
               }
              )
              }
            </div>
        </div>
    </div>
  );
}

export default CargoHold;
  // return (
                  //   
                  //     
                  //       <span className='PlusSign'>+</span>
                  //     </div>
                  //   </div>)