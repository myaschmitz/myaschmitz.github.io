import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { HiOutlineArrowSmDown } from 'react-icons/hi';
import mtnBg from '../images/mar11.jpg';

const ParallaxBannerImage = ({ aboutRef }) => {
    const headline = {
        translateY: [0, 2],
        scale: [2.0, 0.4, "easeOutCubic"],
        opacity: [0.8, 0],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="inset center" style={{ lineHeight: 0.05, marginTop: '3em' }}>
                <h1 className="banner-intro" style={{ color: 'var(--light-font-color)', fontSize: '4vw', verticalAlign: 'middle', marginBottom: '0px' }}>Hi! I'm <span style={{ color: 'var(--color-secondary)' }}>Mya</span></h1>
                <Parallax scale={[1., 0.4, "easeOutCubic"]}>
                    <a className="banner-downarrow" onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        <h2 className="view-work"><HiOutlineArrowSmDown style={{ color: 'var(--light-font-color)', verticalAlign: "middle" }} /></h2>
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
        opacity: [0.3, 0.8, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
    };

    return (
        <ParallaxBanner
            layers={[bannerImage, gradientOverlay, headline]}
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