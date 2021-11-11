import React,{useState} from 'react';
import styled from "styled-components";
import image from './boat.png'


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

function Riding(props) {

const [riding,setRiding]=useState(props.shows);

console.important = function() {
    
console.log(props.shows);
console.log(riding);

}

  return (
    
    <Styles>
      
	  {riding
	  ?
		<img src={image} alt="Boat" className="border"  />
	  :
	  <img src={image} alt="Boat" />
	  }
    </Styles>
  )
    
}

console.important();

export default Riding