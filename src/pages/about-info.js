import "../index.css";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

const AboutInfo = ({ nameRef }) => {
    const textMoveLeft = {
        translateX: [100, 0.5],
        opacity: [0, 1, "easeInCubic"],
        speed: [10],
        startScroll: (nameRef?.current?.getBoundingClientRect().top + window.pageYOffset)/2,
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div>
                <h1>hello test move left</h1>
            </div>
        )
    }

    const text2MoveLeft = {
        translateX: [100, 0.5],
        endScroll: (nameRef?.current?.getBoundingClientRect().top + window.pageYOffset)*2,
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div>
                <h1>hello another test</h1>
            </div>
        )
    }

    return (
        <div>
            <ParallaxBanner
                layers={[textMoveLeft]}
                style={{
                    height: "10vh"
                }}>
            </ParallaxBanner>
            <ParallaxBanner
                layers={[text2MoveLeft]}
                style={{
                    height: "10vh"
                }}>
            </ParallaxBanner>
            <h1>test test test</h1>
        </div>
    );
}

export default AboutInfo;