import React from 'react'
import { useState } from 'react';
import './Stats.css';
//I know, we didn't learn Interfaces and it might look like I used AI, but nope, I learned this trick at my Job, my tutor uses interfaces in his Python Framework and I learned their existance like this.
function Stats() {
  return (
    <div className="Stats">
      <div className='GridContainer'>
        <div className='Stat' id="Craft">Crafting</div>
        <div className='Stat' id="CraftStat">-</div>
        <div className='Stat' id="Diplo">diplomacy</div>
        <div className='Stat' id="DiploStat">-</div>
        <div className='Stat' id="Faith">Faith</div>
        <div className='Stat' id="FaithStat">-</div>
        <div className='Stat' id="Force">Force</div>
        <div className='Stat' id="ForceStat">-</div>
        <div className='Stat' id="Hunti">Hunting</div>
        <div className='Stat' id="HuntiStat">-</div>
        <div className='Stat' id="Medic">Medicine</div>
        <div className='Stat' id="MedicStat">-</div>
        <div className='Stat' id="Naval">Naval power</div>
        <div className='Stat' id="NavalStat">-</div>
        <div className='Stat' id="Navig">Navigation</div>
        <div className='Stat' id="NavigStat">-</div>
        <div className='Stat' id="Ratio">Ration</div>
        <div className='Stat' id="RatioStat">-</div>
        <div className='Stat' id="Moral">Morale</div>
        <div className='Stat' id="MoralStat">-</div>
        <div className='Stat' id="Trait">Traits</div>
        <div className='Stat' id="TraitStat">-</div>
      </div>
    </div>
  );
}

export default Stats;
