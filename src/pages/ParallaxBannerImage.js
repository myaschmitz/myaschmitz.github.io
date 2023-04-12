import '../App.css';

import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import mtnBg from '../images/mar11.jpg';
import { SlArrowDown } from 'react-icons/sl';
import "../styles.css";

const ParallaxBannerImage = ({ aboutRef }) => {
    const headline = {
        translateY: [0, 2],
        scale: [3.0, 0.4, "easeOutCubic"],
        opacity: [1, 0],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="inset center" style={{ lineHeight: 0.05 }}>
                <h1>Let's go!</h1>
                <Parallax scale={[1., 0.4, "easeOutCubic"]}>
                    <a className="banner-downarrow" onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        <SlArrowDown size={40} />
                    </a>
                </Parallax>
            </div>
        )
    };

    const bannerImage = {
        image: mtnBg,
        shouldAlwaysCompleteAnimation: true,
    }

    const gradientOverlay = {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
    };

    return (
        <ParallaxBanner
            layers={[bannerImage, gradientOverlay, headline]}
            className="full"
            style={{
                height: "100vh",
                alignText: 'center',
                justifyContent: "center",
                alignItems: "center",
            }}
        />
    );
}

export default ParallaxBannerImage;