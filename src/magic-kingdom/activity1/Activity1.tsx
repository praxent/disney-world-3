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

const [ riding, setRiding ] = useState(false);

  return (
    <Styles>
      <div className="container">
	  
       Ride Boat
	   	   
	   <Riding shows={riding}/>
	   
	   <br/><br/>
	   <button onClick={() =>  setRiding(true) }>Hit</button> 
	   
	   <button onClick={() =>  setRiding(false) }>Clear</button> 
	   		   			   			   			
      </div>	  
    </Styles>
  )
    
}

export default Activity1