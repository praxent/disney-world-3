import React,{useState,useContext} from 'react';
import styled from "styled-components";
import imageFire from './fire.png'
import imageDark from './dark.png'
import imageWater from './Water.png'
import imageLightning from './lightning.png'
import {UserContext} from '../../../captain-only/context';


const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .border{
	border:5px solid red;
  }
  
  .wand:hover{
	cursor:grab;
  }

  .danger{
		font-size: 2em !important;
		color: red !important;
  }
  
`;

function Outlet(props) {
  
	

  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);

  const context = useContext(UserContext);
  
  const {store} = context;

  const {userType} = store;

  console.log(userType);	
  

		//console.log(props.spellProp);
		if( props.spellProp=="Fire" ){
			return <img src={imageFire}
			className={hovered ? 'pulse animated' : ''}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			/>
		}
		
		if( props.spellProp=="Dark" ){
			return <img src={imageDark} 
			className={hovered ? 'pulse animated' : ''}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			/>
		}
		
		if( props.spellProp=="Water" ){
			return <img src={imageWater}  className={hovered ? 'pulse animated' : ''}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}/>
		}
		
		if( props.spellProp=="Lightning" && userType=="Adult" ){
			return <img src={imageLightning}  className={hovered ? 'pulse animated' : ''}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}/>
		}
		else{
			return <span className="danger">CHILD NOT ALLOWED</span>

		}
		
		
		
		

  // return (
  
    // <Styles>
      
	  // {props.spellProp}
	  
    // </Styles>
  // )
   
}

export default Outlet