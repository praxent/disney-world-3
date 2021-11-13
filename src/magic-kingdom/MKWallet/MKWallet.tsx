import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    left: 900px;
    top: 10px;
    /*background-color: red;*/
    /*height: 100px    ;*/
    position: absolute;
    width: 300px    ;
    border:1px solid black;
    text-align:center;
  }

  .titleText{
    color:black !important;    
  }
  
.balance{
  color:black;
  font-size:2em;
  font-weight:bold;
}

`;

function MKWallet() {

  const [money, setMoney] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/wallets")
      .then(response => response.json())
      .then(res => setMoney(res));
  }, [])
  return (


    <Styles>
      <div className="container">
        <span className="titleText">Wallet Magic Kingdowm Balance</span>
        <br /><br />
        {
              money.map((item, key) => (              
                      <span className="balance">$ {item.credits}</span>                                    
))
}
      </div>
    </Styles>
  )

}

export default MKWallet