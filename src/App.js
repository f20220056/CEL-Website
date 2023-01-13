import React, { useState } from 'react';
import NavBar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

function Start() {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );

}

export default Start;