import solarSystem from "../images/solar-system-ss.jpg";
import demic from "../images/demic-ss.png";
import cpu from "../images/cpu-image.webp";

const Projects = () => {
    return (
        <div className="section-container" style={{ color: 'var(--light-font-color)', background: 'var(--color-tertiary)' }}>
            <h1 className="section-header">PROJECTS</h1>
            <div className="underline" style={{ background: 'var(--color-red-accent' }}></div>
            <div className="project-grid">
                <div className="project-card">
                    <figure>
                        {/* <a target="_blank" href="https://cs559-spring22.github.io/wbfinal-myaschmitz/for_students/final-grtown.html"> */}
                        <img src={solarSystem} alt="Solar system screenshot" />
                        <div class="overlay">
                            <p>The Solar System</p>
                        </div>
                        {/* </a> */}
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        {/* <a target="_blank" href=""> */}
                        <img src={cpu} alt="Image of a CPU" />
                        <div class="overlay">
                            <p>Pipelined Processor</p>
                        </div>
                        {/* </a> */}
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        {/* <a target="_blank" href="http://demicapp.com"> */}
                        <img src={demic} alt="Screenshot of Demic app" />
                        <div class="overlay">
                            <p>Demic App</p>
                        </div>
                        {/* </a> */}
                    </figure>
                </div>
            </div>

            <br />
        </div>
    );
};

export default Projects;