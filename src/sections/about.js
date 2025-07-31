import { forwardRef } from "react";
import "../index.css";
import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax'
import headshot from "../images/mya-fullsize.jpg";
import { aboutContent } from "../content";

const About = forwardRef((props, ref) => {
    const [showDevDesc, setShowDevDesc] = useState(false);
    const [showIntroDesc, setshowIntroDesc] = useState(false);

    const handleIntroEnter = () => {
        setShowDevDesc(true);
    }

    const handleAboutTitleEnter = () => {
        setshowIntroDesc(true);
    }

    return (
        <div className="section-container" id="About" ref={ref}>
            <h1 className="section-header">ABOUT ME</h1>
            <div className="underline" style={{ background: 'var(--color-tertiary)' }}></div>
            <div className='section-about' >
                <Parallax onEnter={() => handleAboutTitleEnter()}>
                    <img src={headshot} alt="Mya Schmitz" className={`about-headshot ${showIntroDesc ? "visible" : ""}`} />
                </Parallax>
                <Parallax onEnter={() => handleIntroEnter()}>
                    <p className={`about-description ${showDevDesc ? "visible" : ""}`}>
                        {aboutContent.jobDescription}
                    </p>
                    <p className={`about-hobby ${showDevDesc ? "visible" : ""}`}><b>When I'm not coding... </b>{aboutContent.hobbiesDescription}</p>
                </Parallax>
            </div>
        </div >
    );
});

export default About;