import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import background from './images/zebra.jpg';

const Styles = styled.div`
  color: black;
  
  .container {
    max-width: 900px;
  }

  .img-background {
    max-height:400px;
  }
`;

function Zebra() {

  return (
    <Styles>
      <div className="container">
        <h1>Zebra</h1>
        <img className="img-background" src={background} />
        
      </div>
    </Styles>
  )
}

export default Zebra