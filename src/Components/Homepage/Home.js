import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);

    if (fileArray.length === 4) {
      setSelectedFiles(fileArray);
    } else {
      event.target.value = null;
      setSelectedFiles([]);
      alert('Please select exactly 4 video files.');
    }
  };

  const handleNext = () => {
    const fileLocations = selectedFiles.map((file) => URL.createObjectURL(file));
    navigate('/video', { state: { fileLocations } });
  };

  return (
    <div className="file-picker-container">
        <label className="file-picker-label">
          Select 4 Video Files:
          <input className="file-picker-input" type="file" accept="video/*" multiple onChange={handleFileChange} />
        </label>
        <button className="file-picker-button" onClick={() => { document.querySelector('.file-picker-input').click(); }}>
          Choose Files
        </button>
      {selectedFiles.length === 4 && (
        <button className="file-picker-button" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );


};

export default HomePage;
