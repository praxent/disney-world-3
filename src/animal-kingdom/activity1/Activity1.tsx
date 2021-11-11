import './Activity1.css'
import React from 'react';
import styled from "styled-components";
import squirtTarget from "../images/fossil-fun-game-target.jpg";
import waterAnimation from "../images/water-animation.gif";
import { useState } from 'react';


const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

`;

function Activity1() {
  const [shootingIndicatorFlag, setShootingIndicator] = useState(true);
  const [startShootingFlag, setShootingAnimation] = useState(false);
  
  
  function handleShootingIndicator() {
    setShootingIndicator(!shootingIndicatorFlag);    
  }
  function startShootingAnimation() {
    if(shootingIndicatorFlag){
      setShootingAnimation(shootingIndicatorFlag);   
    }     
  }

  return (    

    <Styles>
      <div className=".flex-row-activity1">
        <div className="map-container">
          <img src={squirtTarget} className="map"/>
          <div className="labels">
            <input type='button' onClick={handleShootingIndicator} className="label shootIndicator" value='Toogle Shooting'/>
            <input type='button' className={shootingIndicatorFlag ? "label shootIndicatorFlag":"backgroundRed label shootIndicatorFlag"}  value={shootingIndicatorFlag ? 'Shoot at will' : 'Shooting not available'}/>
            <input type='button' onClick={startShootingAnimation} className="activateShoot shootAnimation" value='Activate'/>

            {startShootingFlag ? <img src={waterAnimation} className="waterImage" /> : null}
          </div>
          
        </div>
      </div>
    </Styles>
  )
}

export default Activity1