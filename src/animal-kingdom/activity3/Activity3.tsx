import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  color: black;
  
  .container {
    max-width: 900px;
  }

  button {
    background-color: #ccc;
    margin: 5px;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .buttonMenu {
    background-color: white; 
    color: black; 
    border: 2px solid #008CBA;
    margin:5px;
    padding:5px;
  }

  .buttonMenu:hover {
    background-color: #008CBA;
    color: white;
  }
`;

function Activity3() {
  return (
    <Styles>
      <div className="container">
        <h1>Walking around the Zoo</h1>
        <nav>
          <Link className="buttonMenu" to="Lion">Visit Lion</Link>
          <Link className="buttonMenu" to="Zebra">Visit Zebra</Link>
          <Link className="buttonMenu" to="Giraffe">Visit Giraffe</Link>
          <Link className="buttonMenu" to="Chimpanzee">Visit Chimpanzee</Link>
        </nav>
      </div>
    </Styles>
  )
}

export default Activity3