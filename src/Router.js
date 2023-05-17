import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/Homepage/Home';
import VideoPage from './Components/VideoPlayer/Player';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/video" element={<VideoPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;