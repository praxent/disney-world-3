import React,{useState,useEffect , useContext} from 'react';
import styled from "styled-components";
import image from "./tabern.png"

import {UserContext} from '../../../captain-only/context';



const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    text-align:center;
  }

  .image{

   
  }

`;


function Activity2() {

  const initialValue = { id: 0, name: "", description:"", type:"", quantity:0 };
  const [menu, setMenu] = useState([initialValue]);
  
  const context = useContext(UserContext);
  
  const {store} = context;

  const {userType} = store;

  console.log(userType);

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
  fetch('http://localhost:5000/liberty_tree')
      .then(response => response.json())
      .then(data => setMenu(data));
}, []);

  return (
    <Styles>
      <div className="container">
        Hello from Activity 2 Magic Kingdom
		<br/>
		<br/>
		<img src={image} alt="Boat"  className="image" />
		<br/><br/>
    <table className='productTable tablePosition'>
            <thead>
              <tr>                
                <th>Product</th>
                <th>Description</th>
                <th>For</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {menu.map(item => {
                return (
                  <tr key={item.id}>                    
                    <td>{ item.name }</td>
                    <td >{ item.description }</td>
                    <td>{ item.type }</td>
                    <td>{item.quantity}</td>
                    {(item.type === 'Adult' || item.type === 'Child') && userType === 'Adult' ? (
                          <td>{item.quantity > 0 ? <button className="buttonMenu" onClick={() => sellItem(item.id)}>Sell</button> : ''}</td>
                        ) : (
                          <td>{item.quantity > 0 && item.type === 'Child' ? <button className="buttonMenu" onClick={() => sellItem(item.id)}>Sell</button> : ''}</td>
                        )}
                   
                    
                  </tr>
                );
              })}
            </tbody>
          </table>


      </div>
    </Styles>
  )
}

export default Activity2