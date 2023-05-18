import React from 'react';
import VideoJS from './VideoJS/VideoPlayer';
import { useLocation } from 'react-router-dom';
import './Player.css'
import { useRef } from 'react';

const VideoPage = () => {
  const location = useLocation();
  const fileLocations = location.state.fileLocations;
  const playerRefs = [useRef(), useRef(), useRef(), useRef()];

  const switchCam = (camId) => {
    for (let i = 0; i < playerRefs.length; i++) {
      playerRefs[i].current.style.visibility = 'hidden';
    }
    if (camId >= 1 && camId <= playerRefs.length) {
      playerRefs[camId - 1].current.style.visibility = 'visible';
    }
  };
  

  function generateVideoJsOptions(fileSource, isMuted) {
    return {
      autoplay: true,
      muted: isMuted,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: fileSource,
        type: 'video/mp4'
      }],
      aspectRatio: '16:9',
      loop: true
    };
  }

  return (
    <div className="grid-container">
      <div className="player">
        <div className="video-wrapper">
          {fileLocations.map((fileLocation, index) => (
            <div ref={playerRefs[index]} className="video-player" key={index}>
              <VideoJS options={generateVideoJsOptions(fileLocation, index !== 0)} />
            </div>
          ))}
        </div>
      </div>
      <div className='view-selection'>
        {Array.from({ length: 4 }, (_, index) => (
          <div className='camera' key={index + 1}>
            <button className='camera-button' onClick={() => switchCam(index + 1)}>
              Camera {index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default VideoPage;
