import React,{useState} from 'react';
import styled from "styled-components";
import image from './boat.png'

import Riding from './Riding'

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .border{
	border:5px solid red;
  }
`;



function Activity1() {

const [ riding, setRiding ] = useState(true);

  return (
    <Styles>
      <div className="container">
	  
       Ride Boat
	   	   
	   <Riding shows={riding}/>
	   		   			   			   			
      </div>	  
    </Styles>
  )
    
}

export default Activity1