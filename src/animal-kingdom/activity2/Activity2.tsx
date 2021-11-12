import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import background from './images/rainForestCafe.png';

const Styles = styled.div`
  color: black;
  
  .container {
    max-width: 900px;
  }

  .img-background {
    max-height:400px;
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

  .styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  .styled-table thead tr {
    background-color: #008CBA;
    color: #ffffff;
    text-align: left;
  }

  .styled-table th,
  .styled-table td {
      padding: 12px 15px;
  }
`;

function Activity2() {
  const initialValue = { id: 0, name: "", description:"", type:"", quantity:0 };
  const [menu, setMenu] = useState([initialValue]);
  
  const sellItem = (id: number) => {
    let updatedMenu = menu.map(item => 
      {
        if (item.id == id){
          return {...item, quantity: item.quantity - 1};
        }
        return item;
      });
  
    setMenu(updatedMenu);
  }

  useEffect(() => {
    fetch('http://localhost:5000/rainforest_cafe')
        .then(response => response.json())
        .then(data => setMenu(data));
  }, []);

  return (
    <Styles>
      <div className="container">
        <img className="img-background" src={background} />
        <h1>Menu</h1>
        <table className="styled-table">
          <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              menu.map((item, key) => (
                  <tr key={key}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.type}</td>
                      <td>{item.quantity}</td>
                      <td>{item.quantity > 0 ? <button className="buttonMenu" onClick={() => sellItem(item.id)}>Sell</button> : ''}</td>
                  </tr>
                ))
            }
          </tbody>
      </table>
      </div>
    </Styles>
  )
}

export default Activity2