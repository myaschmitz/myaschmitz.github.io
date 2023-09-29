import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import 'react-icons/fa';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Timeline = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <FaChevronRight />,
        prevArrow: <FaChevronLeft />
    };

    return (
        <div className="section-container" style={{ color: 'var(--light-font-color)', background: 'var(--color-tertiary)' }}>
            <h2 className={"section-header"} style={{ color: 'var(--light-font-color)' }}>WORK EXPERIENCE</h2>
            <div className="underline" style={{ background: 'var(--color-brown-accent)' }}></div>
            <div style={{ width: '80%', marginBottom: '2em' }}>
                <Slider {...settings}>
                    <div className="slider-section">
                        <h2 style={{ fontWeight: 'normal', margin: '0.75 em 0 0 0' }}>COLLINS AEROSPACE</h2>
                        <h4 style={{ fontWeight: 'lighter' }}>Software Engineer I <span className="slider-desc-span">//</span> August 2022 - Present</h4>
                        <p>
                            I currently maintain a .NET web application by identifying and resolving issues and bugs.
                            I work to improve the app through implementing upgrades and improvements to .NET 6 from the legacy web application.
                            I also collaborate often with team members and utilize Agile methodology to achieve the efficient delivery of these updates to the app.
                        </p>
                    </div>
                    <div className="slider-section">
                        <h2 style={{ fontWeight: 'normal', margin: '0.75 em 0 0 0' }}>COLLINS AEROSPACE</h2>
                        <h4 style={{ fontWeight: 'lighter' }}>Software Engineer Intern <span className="slider-desc-span">//</span> May 2021 - August 2022</h4>
                        <p>At my second internship with Collins, I developed a web application to help customers optimize their workflow using Flask framework, HTML, and CSS.
                            I also wrote and edited automated tests with Robot framework for efficiently testing code.
                            I worked with my team using Agile, Scrum, and Kanban for our software development process along with Git and Bitbucket for handling code and collaboration.
                        </p>
                    </div>
                    <div className="slider-section">
                        <h2 style={{ fontWeight: 'normal', margin: '0.75 em 0 0 0' }}>COLLINS AEROSPACE</h2>
                        <h4 style={{ fontWeight: 'lighter' }}>Software Engineer Intern <span className="slider-desc-span">//</span> May 2020 - August 2020</h4>
                        <p>During my internship, I generated a more streamlined user experience of a widely used .NET web application through enhancing the design and functionality of 15+ pages.
                            I also aided in refining the web app, ensuring responsiveness to various web browser environments.
                            To deliver these updates to the web application, I utilized Git and Azure DevOps.
                        </p>
                    </div>
                    <div className="slider-section">
                        <h2 style={{ fontWeight: 'normal', margin: '0.75 em 0 0 0' }}>MEDTRONIC</h2>
                        <h4 style={{ fontWeight: 'lighter' }}>Software Engineer Intern <span className="slider-desc-span">//</span> May 2019 - August 2019</h4>
                        <p>At Medtronic, I achieved rapid delivery using Agile methodology to develop and design a .NET web application that effectively handles communication across 2000+ files.
                            I aided in revamping the web application’s features to allow for seamless user interactions using jQuery/AJAX requests for threaded comments.
                            Through a number of updates, I also helped to boost the efficiency of a translations localization process by reducing the process time by upwards of 40%.
                        </p>
                    </div>
                </Slider>
                <br />
            </div>
            <br />
        </div>
    );
}

export default Timeline;