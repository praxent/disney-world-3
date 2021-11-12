import React,{useState,useEffect } from 'react';
import styled from "styled-components";
import image from "./tabern.png"

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;


function Activity2() {

const [ data, setData ]=useState([]);

 useEffect(() => {
      fetch("http://localhost:5000/liberty_tree")
      .then(response => response.json())
      .then(res => setData(res));
  }, [])

  return (
    <Styles>
      <div className="container">
        Hello from Activity 2 Magic Kingdom
		<br/>
		<br/>
		<img src={image} alt="Boat"  />
		
      </div>
    </Styles>
  )
}

export default Activity2