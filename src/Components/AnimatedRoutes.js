import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Import pages
import Home from '../Pages/Home';
import Info from '../Pages/Info';
import Projects from '../Pages/Projects';

// Import animation libraries
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
