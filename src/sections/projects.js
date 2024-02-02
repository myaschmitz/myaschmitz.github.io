import solarSystem from "../images/solar-system-ss.jpg";
import cpu from "../images/cpu-2.jpg";
import demic from "../images/demic-ss.png";
import financeApp from "../images/finance-app.png";
import climbDb from "../images/climbdb.png";

const Projects = () => {
    return (
        <div className="section-container" style={{ color: 'var(--light-font-color)', background: 'var(--color-tertiary)' }}>
            <h1 className="section-header">PROJECTS</h1>
            <div className="underline" style={{ background: 'var(--color-extra-accent7)' }}></div>
            <div className="project-grid">
                <div className="project-card">
                    <figure>
                        <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer" href="https://cs559-spring22.github.io/wbfinal-myaschmitz/for_students/final-grtown.html">
                            <img src={solarSystem} alt="Screenshot of the Solar System built using 3D graphics concepts and THREE.js elements." />
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
                        <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer" href="https://github.com/myaschmitz/project-pipelined">
                            <img src={cpu} alt="Image of a CPU" />
                            <div class="overlay">
                                <div style={{ position: "relative" }}>
                                    <h4>Pipelined Processor</h4>
                                    <p>Designed and built a 5 stage pipelined processor for the WISC-SP13 ISA.</p>
                                </div>
                            </div>
                        </a>
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer" href="http://demicapp.com">
                            <img src={demic} alt="Screenshot of Demic web app with a phone displaying the user interface for the chat feature.
                                Also features the text, Connect with classmates at University of Wisconsin-Madison" />
                            <div class="overlay">
                                <div style={{ position: "relative" }}>
                                    <h4>Demic Web App</h4>
                                    <p>Designed using React to facilitate app discovery and offer user guidance.</p>
                                </div>
                            </div>
                        </a>
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        {/* <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer" href=""> */}
                        <img src={financeApp} alt="Finance graphic showing a financial institution in the middle with other icons depicting things that are expenditures in life." />
                        <div class="overlay">
                            <div style={{ position: "relative" }}>
                                <h4>(IN PROGRESS)<br />Finance Tracker App</h4>
                                <p>A React app using Express and PostgreSQL to track financial spending and budgeting.</p>
                            </div>
                        </div>
                        {/* </a> */}
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        {/* <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer" href=""> */}
                        <img src={climbDb} alt="Screenshot showing a climbing database map." />
                        <div class="overlay">
                            <div style={{ position: "relative" }}>
                                <h4>(IN PROGRESS)<br />Climbing Gym Database</h4>
                                <p>An app to track climbing gyms using TypeScript, Svelte, SvelteKit, and Firebase.</p>
                            </div>
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