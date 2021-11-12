import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import securityCameras from "./images/security-cameras.jpg";
import CrossCountryCreekImg from "./images/Cross-Country-Creek.jpg";
import MeltAwayBayImg from "./images/Melt-Away-Bay.jpg";
import RunoffRapidsImg from "./images/Runoff-Rapids.jpg";
import SnowStormersImg from "./images/Snow-Stormers.jpg";
import DialogBoxChild from "./images/dialog-box-child-f.png";

import {UserContext} from '../../../captain-only/context';

const Styles = styled.div`
  .btn {
    color: #050;
    font: bold 84% 'trebuchet ms', helvetica, sans-serif;
    background-color: #fed;
    border: 1px solid;
    border-color: #696 #363 #363 #696;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    width: 11%;
    height: 100px;
  }
  
  
  .flex-row-activity3 {
    display: flex;
    align-content: center;
    flex-direction: row;
  }
  
  .map-container3 {
    position: relative;
    height: 400px;
  }
  
  .map3 {
    position: relative;
    /* height: 100%; */
    pointer-events: none;
    width: 40%;
    height: 350px;
  }
  
  .crossCountryCreek {
    left: 2%;
    top: -333px;
    position: relative;
    z-index: 2;
    padding: 10px 15px;
  }
  
  .meltAwayBay {
    left: 2%;
    top: -342px;
    position: relative;
    z-index: 2;
    padding: 10px 15px;
  }
  
  .runoffRapids {
    left: 26%;
    top: -572px;
    position: relative;
    z-index: 2;
    padding: 10px 15px;
  }
  
  .snowStormers {
    left: 26%;
    top: -572px;
    position: relative;
    z-index: 2;
    padding: 10px 15px;
  }
  
  .imgcontainer {
    width: 450px;
    height: 450px;
    margin-left: 20px;
  }
  .dialogBox{
    left: 12%;
    top: -433px;
    position: relative;
    z-index: 2;

    width: 350px;
    height: 350px;
  }

`;


function CrossCountryCreek() {
 
  return (
      <React.Fragment>
        <img src={CrossCountryCreekImg} className="imgcontainer"/>;
      </React.Fragment> 
  )
  
}

function MeltAwayBay() {
  return (
    <React.Fragment>
      <img src={MeltAwayBayImg} className="imgcontainer"/>;
    </React.Fragment> 
)
}

function RunoffRapids() {
  return (
    <React.Fragment>
      <img src={RunoffRapidsImg} className="imgcontainer"/>;
    </React.Fragment> 
)
}

function SnowStormers() {
  return (
    <React.Fragment>
      <img src={SnowStormersImg} className="imgcontainer"/>;
    </React.Fragment> 
)
}

function Team() {
  return <h1>Team</h1>;
}

function Activity3() {
  const initialValue = { id: 0, name: "", description:"", type:"", quantity:0 };
  const [menu, setMenu] = useState([initialValue]);

  const context = useContext(UserContext);
  
  const {store} = context;

  const {userType} = store;

  return (
    <Styles>

      <h1>Security</h1>
      <div className=".flex-row-activity3">
        <div className="map-container3">
          <img src={securityCameras} className="map3"/>
         

          <div className='crossCountryCreek'>
            <Link to="crossCountryCreek" className=''> 
            <button type="button" className='btn ' >
              Cross Country Creek
            </button></Link>{" "}
          </div>
          <div className='meltAwayBay'>
            <Link to="meltAwayBay"> 
            <button type="button" className='btn'>
              Melt Away Bay
            </button></Link>{" "}
          </div>
          <div className='runoffRapids'>
            <Link to="runoffRapids"> 
            <button type="button" className='btn'>
              Runoff Rapids
            </button></Link>{" "}
          </div>
          <div className='snowStormers'>
            <Link to="snowStormers"> 
            <button type="button" className='btn'>
              Snow Stormers
            </button></Link>{" "}
          </div>
          {userType === 'Child' ? <div className=''>
          <img src={DialogBoxChild} className="dialogBox"/>
          </div> : null}
          
              <Outlet />
          </div>
        </div>
      


     <Routes>
     
        <Route path="crossCountryCreek" element={<CrossCountryCreek />} />
        <Route path="meltAwayBay" element={<MeltAwayBay />} />
        <Route path="runoffRapids" element={<RunoffRapids />} />
        <Route path="snowStormers" element={<SnowStormers />} />

      
    </Routes>

    </Styles>
  )
}

export default Activity3