import React from 'react';
import {  
  Routes,
  Route,
  Link,
  Outlet} from "react-router-dom";
import styled from "styled-components";
import solarimg from './resources/images/solar-system.jpeg';
import earth from './resources/images/earth.jpeg';
import mars from './resources/images/mars.jpeg';
import jupiter from './resources/images/jupiter.jpeg';
import saturn from './resources/images/saturn.jpeg';
import windowspace from './resources/images/windowspace.jpeg';
import spaceaudio from './resources/audio/space-audio.mp3';
import earthsaudio from './resources/audio/earthaudio.mp3';
import marsaudio from './resources/audio/marsaudio.mp3';
import jupiteraudio from './resources/audio/jupiteraudio.mp3';
import saturnsaudio from './resources/audio/saturnaudio.mp3';



const Styles = styled.div`
  color: green;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

const audio = new Audio(spaceaudio);

const listenEarth = new Audio(earthsaudio);
const listenMars = new Audio(marsaudio);
const listenJupiter = new Audio(jupiteraudio);
const listenSaturn = new Audio(saturnsaudio);

function Activity3() {

  //audio.play();
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="earth" element={<Earth />} />
          <Route path="mars" element={<Mars />} />
          <Route path="jupiter" element={<Jupiter />} />
          <Route path="saturn" element={<Saturn />} />
        </Route>
      </Routes>
    );
}

function Layout() {
  stopAllAudios();
  audio.play();

  return (

    <div style={{backgroundPosition: 'center', textAlign: 'center'}}>
      

    <div style={{ backgroundImage: `url(${windowspace})`, height:"900px", backgroundRepeat: 'no-repeat',   color:'white', top: '50%', left: '50%'} }>
      <h1>Welcome to Space!</h1>
      <nav>
        <Link to="earth"><button type="button">
          Earth
     </button></Link> {" "}
        <Link to="mars"><button type="button">
          Mars
     </button></Link> {" "}
        <Link to="jupiter"><button type="button">
          Jupiter
     </button></Link> {" "}
        <Link to="saturn"><button type="button">
          Saturn
     </button></Link>{" "}
     <Link to=""><button type="button" onClick={()=> ReturnBase()}>
          Return Base
     </button></Link>
     
     <div style={{marginTop:'70px'}}> <button onClick={()=> audio.pause()}>Pause Song</button> </div>

      </nav>
      <div className="content">
        <Outlet />
      </div>

      
    </div>


    </div>

  );
}

function Earth() {
  stopAllAudios();
  listenEarth.play();

  return (
  <div style={{ backgroundImage: `url(${earth})`, backgroundSize:'100% 100%', height:'270px', width:'500px', marginLeft:'550px', marginTop:'50px'}}>


  </div>
    )
  ;
}

function Mars() {
  stopAllAudios();
  listenMars.play();

  return (
  <div style={{ backgroundImage: `url(${mars})`, backgroundSize:'100% 100%', height:'270px', width:'500px', marginLeft:'550px', marginTop:'50px'}}>


  </div>
    )
  ;
}

function Jupiter() {
  stopAllAudios();

  listenJupiter.play();
  return (
  <div style={{ backgroundImage: `url(${jupiter})`,backgroundSize:'100% 100%', height:'270px', width:'500px', marginLeft:'550px', marginTop:'50px'}}>


  </div>
    )
  ;
}

function Saturn() {
  stopAllAudios();

  listenSaturn.play();
  return (
  <div style={{ backgroundImage: `url(${saturn})`,backgroundSize:'100% 100%', height:'270px', width:'500px', marginLeft:'550px', marginTop:'50px'}}>


  </div>
    )
  ;
}


function stopAllAudios(){
  audio.pause();
  listenEarth.pause();
  listenMars.pause();
  listenJupiter.pause()
  listenSaturn.pause();
}

function ReturnBase(){
  stopAllAudios();
}

export default Activity3