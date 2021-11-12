import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import './resources/styles/pagestyle.css';

import restaurantImg from './resources/image/restaurantimg.jpeg';

import {UserContext} from '../../../captain-only/context';

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;



function Activity2() {
  const [data, setData]  = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const context = useContext(UserContext);
  const {store} = context;
  const {userType} = store;

  useEffect(() => {
    function getData(){
      fetch("http://localhost:5000/space_220")
      .then(response => response.json())
      .then(res => setData(res));
    }
    getData();
  }, [refreshKey])

  function changeItem(id: number) {

    var items = data;

    var item = items.filter(item => item.id === id);
    var itemIndex = items.findIndex(item => item.id === id)

    item[0].quantity = item[0].quantity - 1;

    items[itemIndex] = item[0];
  
    setData(items);
    setRefreshKey(oldKey => oldKey +1)
  }

  const renderBody = () => {
    return data && data.map(({ id, name, description, quantity, type }) => {
        return (
            <tr key={id}>
                {(type === 'Adult' || type === 'Child') && userType === 'Adult' ? (
                  <td>{quantity > 0 ? <button onClick={() => changeItem(id)}>Buy</button> : ''}</td>
                ) : (
                  <td>{quantity > 0 && type === 'Child' ? <button className="buttonMenu" onClick={() => changeItem(id)}>Buy</button> : ''}</td>
                )}
                <td>{name}</td>
                <td>{description}</td>
                <td>{quantity}</td>
            </tr>
        )
    })
}

  return (
    <div style={{ backgroundImage: `url(${restaurantImg})`, height:"1200px", width:"2000px" }}>
      <div className="form-box">
        <div className="header-text">
          Restaurant
        </div>

        <table>
          <tbody>
            {renderBody()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Activity2