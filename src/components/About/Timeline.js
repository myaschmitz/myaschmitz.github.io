import React, { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"

const Timeline = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
    };

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', overflow: 'initial' }}>
                <div style={{ width: '80%', justifyContent: 'center' }}>
                    <h2 style={{ textAlign: 'center', justifyContent: 'center' }}>My History</h2>
                    <Slider {...settings}>
                        {/* <div className="slider-section">
                            <h3>September 2017 - December 2017</h3>
                            <p>Selected for my high school's mentorship program where I had the opportunity to shadow
                                various engineers working with artificial aortic heart valves at Medtronic.</p>
                        </div>
                        <div className="slider-section">
                            <h3>June 2018</h3>
                            <p>Graduated from Eagan High School.</p><br />
                        </div> */}
                        <div className="slider-section">
                            <h3>September 2018</h3>
                            <p>Began studies in Computer Engineering and Computer Science and a certificate in French at
                                the University of Wisconsin-Madison.</p>
                        </div>
                        <div className="slider-section">
                            <h3>May 2019 - August 2019</h3>
                            <p>Interned at Medtronic as a Software Engineering Intern designing a .NET web application which
                                boosted the efficiency of a localization process.</p>
                        </div>
                        <div className="slider-section">
                            <h3>May 2020 - August 2020</h3>
                            <p>Interned at Collins Aerospace as a Software Engineering Intern updating and refining a .NET
                                web application to streamline users' experiences.</p>
                        </div>
                        <div className="slider-section">
                            <h3>May 2021 - August 2021</h3>
                            <p>Interned for a second summer at Collins Aerospace as a Software Engineering Intern. I worked
                                on a brand new project to automate a process for the customers and developers alike through web development.</p>
                        </div>
                        <div className="slider-section">
                            <h3>May 2022</h3>
                            <p>Graduated from the University of Wisconsin-Madison!</p>
                        </div>
                        <div className="slider-section">
                            <h3>August 2022 - Present</h3>
                            <p>Continuing to work for Collins Aerospace working as a .NET developer on the InteliSight Ground Portal!</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Timeline;