import React, { Component, useState } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

const [balance, setBalance] = useState(0);

const yourBalance = (WrappedComponent) => {
    class Wallet extends Component{
        constructor(props) {
            super(props);
            this.state = {
              balance: 0
            };
        }

        componentDidMount() {
            this.payMoney();
         }

         payMoney(){
            this.setState({
                balance: balance - value
            });
         }

    
        render() {
            return (
              <WrappedComponent {...this.props}/>
            );
          };
    
    }


    return Wallet; 


};

export default yourBalance;


