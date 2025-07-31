import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import 'react-icons/fa';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { workExperience } from "../../content";

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
                {workExperience.map((job, index) => (
                    <div className="column" key={index}>
                        <div className="dates">{job.dateRange}</div>
                        <div className="job-descriptions">
                            <div className="job-subdescriptions">
                                <span className="job-title">{job.jobTitle}</span><span className="company-name">@<a className="company-name" target="_blank" rel="noopener noreferrer" href={job.companyUrl}>{job.company}</a></span>
                            </div>
                            <span className="separator">---</span>
                            <div>
                                {job.description}
                            </div>
                        </div>
                    </div>
                ))}
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