import React from 'react';
import VideoJS from './VideoJS/VideoPlayer';
import { useLocation } from 'react-router-dom';
import './Player.css'
import { useState, useRef} from 'react';

const VideoPage = () => {
  const location = useLocation();
  const fileLocations = location.state.fileLocations;
  const [playerId, setPlayerId] = useState(1);
  const videoRef1 = useRef();
  const videoRef2 = useRef();
  const videoRef3 = useRef();
  const videoRef4 = useRef();


  const switchCam = (camId) => {
    videoRef4.current.style.opacity = '0';
    videoRef4.current.style.opacity = '0';
    videoRef4.current.style.opacity = '0';
    videoRef4.current.style.opacity = '0';
    if(camId==1){
      videoRef4.current.style.opacity = '1';
    }else if(camId==2){
      videoRef4.current.style.opacity = '1';
    }else if(camId==3){
      videoRef4.current.style.opacity = '1';
    }else{
      videoRef4.current.style.opacity = '1';
    }
  };

  const videoJsOptions1 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: fileLocations[0],
      type: 'video/mp4'
    }],
    aspectRatio: '16:9',
  };
  const videoJsOptions2 = {
    autoplay: true,
    muted: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: fileLocations[1],
      type: 'video/mp4'
    }],
    aspectRatio: '16:9',
  };
  const videoJsOptions3 = {
    autoplay: true,
    muted: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: fileLocations[2],
      type: 'video/mp4'
    }],
    aspectRatio: '16:9',
  };
  const videoJsOptions4 = {
    autoplay: true,
    muted: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: fileLocations[3],
      type: 'video/mp4'
    }],
    aspectRatio: '16:9',
  };

  return (
    <div className="grid-container">
      <div className="player">
        <div className="video-wrapper">
          <div ref={videoRef1} className="video-player">
            <VideoJS options={videoJsOptions1} />
          </div>
          <div ref={videoRef2} className="video-player">
            <VideoJS options={videoJsOptions2} />
          </div>
          <div ref={videoRef3} className="video-player">
            <VideoJS options={videoJsOptions3} />
          </div>
          <div ref={videoRef4} className="video-player">
            <VideoJS options={videoJsOptions4} />
          </div>
        </div>
      </div>
      <div className='view-selection'>
        <div className='camera'><button className='camera-button' onClick={() => switchCam()}>Camera 1</button></div>
        <div className='camera'><button className='camera-button' onClick={() => switchCam()}>Camera 2</button></div>
        <div className='camera'><button className='camera-button' onClick={() => switchCam()}>Camera 3</button></div>
        <div className='camera'><button className='camera-button' onClick={() => videoRef4.current.style.opacity = 1}>Camera 4</button></div>
      </div>
    </div>
  );
};

export default VideoPage;
