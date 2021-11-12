import React, { useState } from 'react';
import styled from "styled-components";

import spaceImg from "./resources/image/spaceshipearth.jpeg";

import GlobeComponent from './glopeComponent';



const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;



function Activity1() {

  const [riding, setRiding] = useState(true);

  return (
  
    <GlobeComponent riding={riding} />

    
  )
}

export default Activity1