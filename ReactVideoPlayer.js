import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from 'react-player/lazy'
// you need install react-player

const ReactPlayer = () =>{
  return(
    <>
  <ReactPlayer
  url={companyWebsiteVideoUrl}
  muted={true}
  playing={true}
  width="100%"
  height="44rem"
  volume={1}
  controls={true}
  />
</>
)}
export default  ReactPlayer;
