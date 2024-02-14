import './Header.css';
import React from 'react'
function Header() {
  return (
    <div className="Header">
        <div id="Title">
                
            <h2 id="Main-Title">Anno 1800 Expeditions Helper</h2>
        </div>
        <div id="Subtitle">
            <div className='Subtitles'>
                    <h3>Equip an Expedition</h3>
                </div>
                <div className='Subtitles'>
                    <h3>Items
                    </h3>
                </div>
                <div className='Subtitles'>
                    <h3>Ships</h3>
                </div>
                <div className='Subtitles'>
                    <h3>Supplies</h3>
                </div>
            </div>
    </div>
  );
}

export default Header;
