import React,{useState} from 'react';
import styled from "styled-components";
import imageFire from './fire.png'
import imageDark from './dark.png'
import imageWater from './Water.png'
import imageLightning from './lightning.png'


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
  
`;

function Outlet(props) {
  	    
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);

		
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
		
		if( props.spellProp=="Lightning" ){
			return <img src={imageLightning}  className={hovered ? 'pulse animated' : ''}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}/>
		}
		
		
		
		

  // return (
  
    // <Styles>
      
	  // {props.spellProp}
	  
    // </Styles>
  // )
   
}

export default Outlet