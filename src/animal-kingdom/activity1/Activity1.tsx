import React, { useState } from 'react';
import styled from "styled-components";
import background from './images/target.png';
import backgroundSplashed from './images/splashedTarget.png';
import shoot from './images/shoot.png';
import tryAgain from './images/tryAgain.png';

const Styles = styled.div`
  body {
    background-color: #b7dee9;
  }

  .container {
    margin: 0;
  }

  img { display: block }

  .img-button {
    align-content:center;
    max-height:175px;
  }

  .img-background {
    max-height:575px;
  }
`;

function Activity1() {

  const [shooting, setShooting] = useState(false);

  return (
    <Styles>
      <div className="container">
        <img className="img-background" src={shooting ? backgroundSplashed : background} />
        <input type="image" className="img-button" src={shooting ? tryAgain : shoot} alt="Shoot!" onClick={() => setShooting(!shooting)}></input>
      </div>
    </Styles>
  )
}

export default Activity1