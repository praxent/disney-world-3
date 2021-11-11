import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import background from './images/giraffe.jpg';

const Styles = styled.div`
  color: black;
  
  .container {
    max-width: 900px;
  }

  .img-background {
    max-height:400px;
  }
`;

function Giraffe() {

  return (
    <Styles>
      <div className="container">
        <h1>Giraffe</h1>
        <img className="img-background" src={background} />
        
      </div>
    </Styles>
  )
}

export default Giraffe