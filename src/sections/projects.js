import solarSystem from "../images/solar-system-ss.jpg";
import demic from "../images/demic-ss.png";
import cpu from "../images/cpu-image.webp";

const Projects = () => {
    return (
        <div className="section-container" style={{ color: 'var(--light-font-color)', background: 'var(--color-tertiary)' }}>
            <h1 className="section-header">PROJECTS</h1>
            <div className="underline" style={{ background: 'var(--color-extra-accent7)' }}></div>
            <div className="project-grid">
                <div className="project-card">
                    <figure>
                        <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" href="https://cs559-spring22.github.io/wbfinal-myaschmitz/for_students/final-grtown.html">
                            <img src={solarSystem} alt="Solar system screenshot" />
                            <div class="overlay">
                                <div style={{ position: "relative" }}>
                                    <h4>The Solar System</h4>
                                    <p>Designed and built the Solar System using 3D graphics concepts and elements of THREE.js.</p>
                                </div>
                            </div>
                        </a>
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        {/* <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" href=""> */}
                        <img src={cpu} alt="Image of a CPU" />
                        <div class="overlay">
                            <div style={{ position: "relative" }}>
                                <h4>Pipelined Processor</h4>
                                <p>Designed and built a 5 stage pipelined processor for the WISC-SP13 ISA.</p>
                            </div>
                        </div>
                        {/* </a> */}
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" href="http://demicapp.com">
                            <img src={demic} alt="Screenshot of Demic app" />
                            <div class="overlay">
                                <div style={{ position: "relative" }}>
                                    <h4>Demic Web App</h4>
                                    <p>Designed using React to facilitate app discovery and offer user guidance.</p>
                                </div>
                            </div>
                        </a>
                    </figure>
                </div>
            </div>

            <br />
        </div>
    );
};

export default Projects;