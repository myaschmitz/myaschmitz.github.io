import { Parallax } from "react-scroll-parallax";

const SoftwareDeveloper = () => {

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                {/* <Parallax translateX={[0, 100, "easeIn"]} opacity={[0.1, 0, "easeoutCubic"]}>
                    <h1 className="word-bg">Develop.</h1>
                </Parallax> */}
                <p>
                    I have experience with a variety of technologies ranging from software to hardware,
                    but I enjoy working in web development the most.
                </p>
                {/* <div className="timeline" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <h2>My History</h2>
                    <div className="timeline-line"></div>
                    <h3>September 2017 - December 2017</h3>
                    <p className="timeline-p">Selected for my high school's mentorship program where I had the opportunity to shadow
                        various engineers working with artificial aortic heart valves at Medtronic.</p>
                    <h3>June 2018</h3>
                    <p>Graduated From Eagan High School.</p>
                </div> */}
                <h2 style={{ textAlign: 'center', justifyContent: 'center' }}>My History</h2>
                <div className="timeline">
                    <ul>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">September 2017 - December 2017</h3>
                                <p className="timeline-description">Selected for my high school's mentorship program where I had the opportunity to shadow
                                    various engineers working with artificial aortic heart valves at Medtronic.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">June 2018</h3>
                                <p className="timeline-description">Graduated from Eagan High School.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">September 2018</h3>
                                <p className="timeline-description">Began studies in Computer Engineering and Computer Science and a certificate in French at the University of Wisconsin-Madison.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">May 2019 - August 2019</h3>
                                <p className="timeline-description">Interned at Medtronic as a Software Engineering Intern designing a .NET web application to boost efficiency of a localization process.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">May 2020 - August 2020</h3>
                                <p className="timeline-description">Interned at Collins Aerospace as a Software Engineering Intern updating and refining a .NET web application to streamline users' experiences.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">May 2021 - August 2021</h3>
                                <p className="timeline-description">Interned for a second summer at Collins Aerospace as a Software Engineering Intern. I worked on a brand new project to automate a process for the customers and developers alike through web development</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">May 2022</h3>
                                <p className="timeline-description">Graduated from UW-Madison!</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">August 2022 - Present</h3>
                                <p className="timeline-description">Continuing to work for Collins Aerospace working as a .NET developer on the InteliSight Ground Portal!</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SoftwareDeveloper;