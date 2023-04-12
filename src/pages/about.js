import { forwardRef } from "react";
import AboutInfo from "./about-info";
import "../index.css";
import { useRef } from "react";

const About = forwardRef((props, ref) => {
    const nameRef = useRef(null);

    return (
        <div style={{ textAlign: 'left', padding: '0.5em 0 0 0.5em' }} id="About" ref={ref}>
            <h1 ref={nameRef} style={{ fontSize: '6em', marginBottom: '0' }}>I'm Mya Schmitz.</h1>
            <AboutInfo nameRef={nameRef}></AboutInfo>
        </div>
    );
});

export default About;