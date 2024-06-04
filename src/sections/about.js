import { forwardRef } from "react";
import "../index.css";
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
        <div className="section-container" id="About" ref={ref}>
            <h1 className="section-header">ABOUT ME</h1>
            <div className="underline" style={{ background: 'var(--color-tertiary)' }}></div>
            <div className='section-about' >
                <Parallax onEnter={() => handleAboutTitleEnter()}>
                    <img src={headshot} alt="Mya Schmitz" className={`about-headshot ${showDevDesc ? "visible" : ""}`} />
                </Parallax>
                <Parallax onEnter={() => handleIntroEnter()}>
                    <p className={`about-description ${showDevDesc ? "visible" : ""}`}>
                        As a software engineer at Collins Aerospace, my work revolves around developing and maintaining a growing, dynamic .NET web application. I enjoy exploring all facets of technology,
                        from software to hardware, with my passions currently driving me deeper into the realm of full stack web development. Outside of my work, I love delving into and implementing new 
                        technologies in my personal coding projects.
                    </p>
                    <p className={`about-hobby ${showDevDesc ? "visible" : ""}`}><b>When I'm not coding... </b>I'm often rock climbing, running, skiing, rollerblading, playing ultimate frisbee, or reading a good book.
                        Traveling and exploring the world is one of my greatest excitements and I'm always eager to experience new corners of the globe. I also cherish connecting with others and listening to
                        the stories that have shaped them into who they are today.</p>
                </Parallax>
            </div>
        </div >
    );
});

export default About;