import './Header.css';
import React from 'react'
interface IHandleHelper{
    changeHelperDisplay: ()=>void
  }
function Header({ changeHelperDisplay = () => {} }: IHandleHelper) {
  return (
    <div className="Header">
        <div id="Title">
                
            <h2 id="Main-Title" onClick={() =>changeHelperDisplay()}>Anno 1800 Expeditions Helper</h2 >
        </div>
        <div id="Subtitle">
            <div className='Subtitles' id="Equip" onClick={() =>changeHelperDisplay()}>
                <h3>Equip an Expedition</h3>
            </div>
            <div className='Subtitles' id="Items">
                <h3>Items
                </h3>
            </div>
            <div className='Subtitles' id="Ships">
                <h3>Ships</h3>
            </div>
            <div className='Subtitles' id="Supplies">
                <h3>Supplies</h3>
            </div>
        </div>
    </div>
  );
}

export default Header;
