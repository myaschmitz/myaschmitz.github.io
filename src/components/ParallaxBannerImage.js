import '../App.css';

import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import mtnBg from '../images/mar11.jpg';
import { HiOutlineArrowSmDown } from 'react-icons/hi';
import "../styles.css";

const ParallaxBannerImage = ({ aboutRef }) => {
    const headline = {
        translateY: [0, 2],
        scale: [2.0, 0.4, "easeOutCubic"],
        opacity: [1, 0],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="inset center" style={{ lineHeight: 0.05 }}>
                <h1 style={{fontSize: '4vw', verticalAlign: "middle"}}>Hi! I'm <span style={{color: '#b6d1d6'}}>Mya</span></h1>
                <Parallax scale={[1., 0.4, "easeOutCubic"]}>
                    <a className="banner-downarrow" onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        <h2 className="view-work"><HiOutlineArrowSmDown style={{verticalAlign: "middle"}} /></h2>
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
        opacity: [0.2, 1, "easeOutCubic"],
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