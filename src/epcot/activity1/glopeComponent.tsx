import React, { useState } from 'react';
import spaceImg from "./resources/image/spaceshipearth.jpeg";
import globeGif from "./resources/image/globeGif.gif";


function GlobeComponent(props) {

    let globe;

    if (props.riding){
        globe = <div style={{marginLeft:"1040px"}}><img src={globeGif} style={{height:"200px", marginTop:"180px"}}/></div>
    }

    return (
        <div style={{ backgroundImage: `url(${spaceImg})`, height:"800px", } }>
         {globe}
        </div>
      
    )
  }
  
  export default GlobeComponent