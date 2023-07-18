import { forwardRef } from "react";
import "../index.css";
import { useRef } from "react";
import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax'
import headshot from "../images/mya-sq-sm.jpg";

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
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} id="About" ref={ref}>
            <h1 className="section-header">ABOUT ME</h1>
            <div className="underline" style={{ background: 'var(--color-tertiary)' }}></div>
            <div className='section-about' >
                <Parallax onEnter={() => handleAboutTitleEnter()}>
                    <img src={headshot} alt="Photo of Mya Schmitz" className={`about-headshot ${showDevDesc ? "visible" : ""}`} />
                </Parallax>
                <Parallax onEnter={() => handleIntroEnter()}>
                    <p className={`about-description ${showDevDesc ? "visible" : ""}`}>
                        I'm currently a software engineer working on a .NET web application at Collins Aerospace. I have experience with a variety of technologies ranging from software to hardware,
                        but I enjoy web development the most.
                    </p>
                    <p className={`about-hobby ${showDevDesc ? "visible" : ""}`}><b>When I'm not coding... </b>I'm often rock climbing, running, rollerblading, and playing ultimate frisbee. I also love traveling the world with a good book in hand.</p>
                </Parallax>
            </div>
        </div >
    );
});

export default About;