import React from 'react';
import styled from "styled-components";
import squirtTarget from "../images/fossil-fun-game-target.jpg";
import waterAnimation from "../images/water-animation.gif";
import { useState } from 'react';


const Styles = styled.div`
  .flex-row-activity1 {
    display: flex;
    align-content: center;
    flex-direction: row;
  }
  .map-container {
      position: relative;
      height: 850px;
    }
    
    .map {
      position: relative;
      height: 100%;
      pointer-events: none;
    }
    .label {
      position: relative;
      z-index: 2;
      padding: 10px 15px;
      background: rgb(23 60 103);
      color: white;
    
      white-space: nowrap;
    }
    .shootIndicator {
      left: 1300px;
      top: -830px;
  }
  .shootIndicatorFlag {
    left: 1350px;
    top: -830px;
  }
  
  .backgroundRed{
    background-color: red;
  }
  
  .shootAnimation {
    left: 230px;
    top: -320px;
  }
  .activateShoot {
    position: relative;
    z-index: 2;
    padding: 10px 15px;
    background: rgb(23 60 103);
    color: white;
  
    white-space: nowrap;
  }
  
  .waterImage {
    left: 290px;
    top: -250px;
    position: relative;
    z-index: 2;
    width: 50px;
    height: 70px;
    transform: rotate(90deg);
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