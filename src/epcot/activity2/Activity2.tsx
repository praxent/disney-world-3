import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import './resources/styles/pagestyle.css';

import restaurantImg from './resources/image/restaurantimg.jpeg';

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;



function Activity2() {


  const [data, setData]  = useState([])
  useEffect(() => {
      fetch("http://localhost:4000/space_220")
      .then(response => response.json())
      .then(res => setData(res));
  }, [])

  function changeItem(id) {
 
    let items = data;

    let item = data.filter(item => item.id === id);
    let itemIndex = data.findIndex(item => item.id === id)

    item.quantity = item.quantity - 1;

    items[itemIndex] = item;
  
    setData({items});
  }

  return (
    <div style={{ backgroundImage: `url(${restaurantImg})`, height:"1200px", width:"2000px" } }>
         

    <div className="form-box">
      <div className="header-text">
        Restaurant
      </div>

      
      {data.map(( listValue, index ) => {
          return (
            <tr className="" key={index}>
              <td> <button >{listValue.id}</button>  </td>
              <td>{listValue.name}</td>
              <td>{listValue.description}</td>
              <td>{listValue.quantity}</td>
            </tr>
          );
        })}



	  </div>

    </div>
  )
}

export default Activity2