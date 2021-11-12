import React, {useState, useContext, useEffect} from 'react';

import {UserContext} from './context';


function UserToogle() {
    const context = useContext(UserContext);

    const {actions, store} = context;

    const {setAdult, setChild} = actions;

    
    useEffect(() => {
        console.log(store);
    },[store]);
  
    return (



        <>
        <button onClick={() => setChild()}>Set Child</button>
        <button onClick={() => setAdult()}>Set Adult</button>

        </>
    );
  };

  export default UserToogle