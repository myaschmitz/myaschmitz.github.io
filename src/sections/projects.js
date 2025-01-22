import solarSystem from "../images/solar-system-ss.jpg";
import cpu from "../images/cpu-2.jpg";
import demic from "../images/demic-ss.png";
import financeApp from "../images/finance-app.png";
import climbDb from "../images/climbdb.png";

const Projects = () => {
    const projects = [{
        name: "The Solar System",
        desc: "Designed and built the Solar System using 3D graphics concepts and elements of THREE.js.",
        href: "https://cs559-spring22.github.io/wbfinal-myaschmitz/for_students/final-grtown.html",
        img: solarSystem,
        alt: "Screenshot of the Solar System built using 3D graphics concepts and THREE.js elements."
    },
    {
        name: "Pipelined Processor",
        desc: "Designed and built a 5 stage pipelined processor for the WISC-SP13 ISA.",
        href: null,
        img: cpu,
        alt: "CPU"
    },
    {
        name: "Demic Web App",
        desc: "Mobile app designed using React Native to facilitate classmate connections.",
        href: "http://demicapp.com",
        img: demic,
        alt: "Screenshot of Demic web app with a phone displaying the user interface for the chat feature. Also features the text, Connect with classmates at University of Wisconsin-Madison"
    },
    {
        name: "(IN PROGRESS) Finance Tracker App",
        desc: "A Next.js app using PostgreSQL to track financial spending and budgeting.",
        href: null,
        img: financeApp,
        alt: "Finance graphic showing a financial institution in the middle with other icons depicting things that are expenditures in life."
    },
    {
        name: "(IN PROGRESS) Climbing Gym Database",
        desc: "An app to track climbing gyms using TypeScript, Svelte, SvelteKit, and Firebase.",
        href: "https://climbdb.app/",
        img: climbDb,
        alt: "Screenshot showing a climbing database map."
    }
];

    return (
        <div className="section-container" style={{ color: 'var(--light-font-color)', background: 'var(--color-tertiary)' }}>
            <h1 className="section-header">PROJECTS</h1>
            <div className="underline" style={{ background: 'var(--color-extra-accent7)' }}></div>
            <div className="project-grid">
                {projects.map((project) => {
                    return(
                    <div className="project-card">
                        <figure>
                            <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer" href={project.href}>
                                <img src={project.img} alt={project.alt} />
                                <div className="overlay">
                                    <div style={{ position: "relative" }}>
                                        <h4>{project.name}</h4>
                                        <p style={{ width: '95%', display: 'inline-block' }}>{project.desc}</p>
                                    </div>
                                </div>
                            </a>
                        </figure>
                    </div>
                    )
                })}
            </div>

            <br />
        </div>
    );
};

export default Projects;