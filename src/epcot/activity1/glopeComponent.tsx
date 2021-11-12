import React, { useState } from 'react';
import spaceImg from "./resources/image/spaceshipearth.jpeg";
import globeGif from "./resources/image/globeGif.gif";


function GlobeComponent(props) {

    const [riding, setRiding] = useState(props.riding);

    let globe;

    if (riding){
        globe = <div style={{marginLeft:"1040px"}}><img src={globeGif} style={{height:"200px", marginTop:"180px"}}/></div>
    }

    return (
        <div style={{ backgroundImage: `url(${spaceImg})`, height:"800px", } }>
         {globe}
         <button onClick={() => setRiding(!riding)}>Riding</button>
        </div>
      
    )
  }
  
  export default GlobeComponent