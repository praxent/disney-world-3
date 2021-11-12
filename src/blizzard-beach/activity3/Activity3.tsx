import './Activity3.css';
import React from 'react';
import styled from "styled-components";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import securityCameras from "./images/security-cameras.jpg";
import CrossCountryCreekImg from "./images/Cross-Country-Creek.jpg";
import MeltAwayBayImg from "./images/Melt-Away-Bay.jpg";
import RunoffRapidsImg from "./images/Runoff-Rapids.jpg";
import SnowStormersImg from "./images/Snow-Stormers.jpg";


const Styles = styled.div`
  color: Grey;
  
  .container {
    
    margin: 0 auto;
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