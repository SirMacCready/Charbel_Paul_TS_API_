import React, { useEffect } from 'react';
import './SavedExpeditions.css';
import { jsPDF } from "jspdf";

interface IGiveSavedExpeditions {
    savedExpeditions : [{
        expedition_id : number,
        ship_id : number,
        item_id : number,
        good_id : number
    }],
    setSavedExpeditions : any
}
function SavedExpeditions({savedExpeditions,setSavedExpeditions}:IGiveSavedExpeditions) {

    let expeditionData : any= []
    const getExpeditions = async (url: string): Promise<void> => {
        await fetch(url)
          .then(response => {
            return response.json();})
            .then(function(json) {
                setSavedExpeditions(json)
                console.log(savedExpeditions);
                
            })
      }
      useEffect(() => {
        getExpeditions("http://localhost:1337/expedition/allExpeditions");
        savedExpeditions.forEach(expedition =>  {
            expeditionData.push(expedition)
            console.log(expeditionData);
            
            
        })
        
        }, []) 
  return (
    <div className='SavedExpeditions'>
    </div>
  );
}

export default SavedExpeditions;
