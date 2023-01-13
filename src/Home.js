import React from 'react';
import './Home.css'
import arrow from './assets/arrow.png'

function Home() {
    return (
        <section className="section" id="top" data-section="section1">
            <div className="header-text">
                <div className="caption">
                    <h1>CENTER FOR ENTREPRENEURIAL LEADERSHIP</h1>
                    <div className="main-button">
                        <div className="scroll"><a href="#about">
                            <br/>
                            <br/>
                            <br/>
                            <img src={arrow} width='40px'/>
                            </a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;