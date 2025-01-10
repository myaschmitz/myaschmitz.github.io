import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import 'react-icons/fa';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Timeline = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     arrows: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     nextArrow: <FaChevronRight />,
    //     prevArrow: <FaChevronLeft />
    // };

    return (
        <div className="section-container" style={{ color: 'var(--light-font-color)', background: 'var(--color-tertiary)' }}>
            <h2 className={"section-header"} style={{ color: 'var(--light-font-color)' }}>WORK EXPERIENCE</h2>
            <div className="underline" style={{ background: 'var(--color-brown-accent)', paddingBottom: '10px' }}></div>
            <div className="timeline-format">
                <div className="column">
                    <div className="dates">August 2022 - Present</div>
                    <div className="job-descriptions">
                        <div className="job-subdescriptions">
                            <span className="job-title">SOFTWARE ENGINEER II</span><span className="company-name">@<a className="company-name"  target="_blank" rel="noopener noreferrer" href="https://www.collinsaerospace.com/">Collins Aerospace</a></span>
                        </div>
                        <span className="separator">---</span>
                        <div>
                            In my current role, I manage multiple concurrent projects. For one of the projects, I'm enhancing a Python test suite for a Django application, focusing on 
                            expanding test coverage and ensuring test independence and reliability.
                            Another project centers around a .NET application where I serve multiple responsibilities. I've developed Amazon CloudWatch dashboards to track 20 essential 
                            services, supporting continuous uptime monitoring and system health. I also help maintain Azure Pipelines configurations using YAML to automate the build 
                            and deployment processes. Within this same .NET project, I'm upgrading and maintaining the application across multiple services and more than 20 pages.
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="dates">May 2021 - August 2022</div>
                    <div className="job-descriptions">
                        <div className="job-subdescriptions">
                            <span className="job-title">SOFTWARE ENGINEER INTERN</span><span className="company-name">@<a className="company-name"  target="_blank" rel="noopener noreferrer" href="https://www.collinsaerospace.com/">Collins Aerospace</a></span>
                        </div>
                        <span className="separator">---</span>
                        <div>
                            During my second internship with Collins, I played a key role in a new project developing a web application using React and Flask to optimize customer workflows.
                            As an early member on the project, I contributed to establishing the project's foundation by creating and enhancing an automated test suite using Robot framework.
                            Our team followed Agile methodologies, implementing Scrum and Kanban practices, while using Bitbucket and Git to handle version control and team collaboration.
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="dates">May 2020 - August 2020</div>
                    <div className="job-descriptions">
                        <div className="job-subdescriptions">
                            <span className="job-title">SOFTWARE ENGINEER INTERN</span><span className="company-name">@<a className="company-name"  target="_blank" rel="noopener noreferrer" href="https://www.collinsaerospace.com/">Collins Aerospace</a></span>
                        </div>
                        <span className="separator">---</span>
                        <div>
                            During my internship, I generated a more streamlined user experience of a widely used .NET web application through enhancing the design and functionality of 20+ pages.
                            I also contributed to refining the app for responsiveness across diverse browsers.
                            To efficiently deliver these updates to the web application, my team worked within an Agile framework and used Git and Azure DevOps for code management and deployment.
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="dates">May 2019 - August 2019</div>
                    <div className="job-descriptions">
                        <div className="job-subdescriptions">
                            <span className="job-title">SOFTWARE ENGINEER INTERN</span><span className="company-name">@ <a className="company-name"  target="_blank" rel="noopener noreferrer" href="https://www.medtronic.com/">Medtronic</a></span>
                        </div>
                        <span className="separator">---</span>
                        <div>
                            At Medtronic, I helped upgrade a .NET web application to facilitate and streamline communication across 2000+ translation string files.
                            I also revamped features to enable smooth user interactions with threaded comments using jQuery and AJAX requests.
                            These updates brought forth a more intuitive, organized user interface and helped reduce a translations process time by 
                            upwards of 40% from what it was originally.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // Code for slider to display work experience
        // <div className="section-container" style={{ color: 'var(--light-font-color)', background: 'var(--color-tertiary)' }}>
        //     <h2 className={"section-header"} style={{ color: 'var(--light-font-color)' }}>WORK EXPERIENCE</h2>
        //     <div className="underline" style={{ background: 'var(--color-brown-accent)' }}></div>
        //     <div style={{ width: '80%', marginBottom: '2em' }}>
        //         <Slider {...settings}>
        //             <div className="slider-section">
        //                 <h2 style={{ fontWeight: 'normal', margin: '0.75 em 0 0 0' }}>COLLINS AEROSPACE</h2>
        //                 <h4 style={{ fontWeight: 'lighter' }}>Software Engineer I <span className="slider-desc-span">//</span> August 2022 - Present</h4>
        //                 <p>
        //                     I currently maintain a .NET web application by identifying, troubleshooting and resolving issues and bugs. 
        //                     Given its diverse functions and expanding user base, I also work to improve the app through implementing software version upgrades. 
        //                     I also often collaborate with team members and utilize the Agile methodology to achieve the efficient delivery of these updates to the app.
        //                 </p>
        //             </div>
        //             <div className="slider-section">
        //                 <h2 style={{ fontWeight: 'normal', margin: '0.75 em 0 0 0' }}>COLLINS AEROSPACE</h2>
        //                 <h4 style={{ fontWeight: 'lighter' }}>Software Engineer Intern <span className="slider-desc-span">//</span> May 2021 - August 2022</h4>
        //                 <p>
        //                      At my second internship with Collins, I developed a web application leveraging React and Flask to streamline customer workflows. 
        //                      I also created and refined an automated test suite with Robot framework for efficiently testing code. 
        //                      Collaborating within an Agile framework and incorporating Scrum and Kanban, my team utilized Git and Bitbucket for handling code management and collaboration.
        //                 </p>
        //             </div>
        //             <div className="slider-section">
        //                 <h2 style={{ fontWeight: 'normal', margin: '0.75 em 0 0 0' }}>COLLINS AEROSPACE</h2>
        //                 <h4 style={{ fontWeight: 'lighter' }}>Software Engineer Intern <span className="slider-desc-span">//</span> May 2020 - August 2020</h4>
        //                 <p>
        //                      During my internship, I generated a more streamlined user experience of a widely used .NET web application through enhancing the design and functionality of 15+ pages. 
        //                      I also contributed to refining the app for responsiveness across diverse browsers. 
        //                      To efficiently deliver these updates to the web application, my team worked within an Agile framework to seamlessly deliver updated with Git and Azure DevOps.
        //                 </p>
        //             </div>
        //             <div className="slider-section">
        //                 <h2 style={{ fontWeight: 'normal', margin: '0.75 em 0 0 0' }}>MEDTRONIC</h2>
        //                 <h4 style={{ fontWeight: 'lighter' }}>Software Engineer Intern <span className="slider-desc-span">//</span> May 2019 - August 2019</h4>
        //                 <p>
        //                      I achieved rapid delivery using Agile methodology to develop and design a .NET web application that facilitates communication across 2000+ string files. 
        //                      I revamped features to enable smooth user interactions with threaded comments using jQuery and AJAX requests. 
        //                      These updates significantly enhanced the efficiency of a translations localization process by reducing the process time by upwards of 40%.
        //                      My team was able to quickly push out these updates through utilizing an Agile framework and effective collaboration.
        //                 </p>
        //             </div>
        //         </Slider>
        //         <br />
        //     </div>
        //     <br />
        // </div>
    );
}

export default Timeline;