import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import Outlet from './Outlet'


const Styles = styled.div`
  color: green;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function Activity3() {

const [spell, setSpell]= useState("Dark")

  return (
    <Styles>
      <div className="container">
        Hello from Activity 3 Magic Kingdom
		
		<button onClick={() =>  setSpell("Dark") }>Dark Spell</button> 
		<button onClick={() => setSpell("Fire")}>Fire Spell</button> 
		<button onClick={() =>  setSpell("Water")}>Water Spell</button> 
		<button onClick={() => setSpell("Lightning")}>Lightning Spell</button> 
		
		
		
		<br/>
		<br/>
		<br/>
		<Outlet spellProp={spell}/>
		
		
      </div>
    </Styles>
  )
}

export default Activity3