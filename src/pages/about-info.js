import "../index.css";

import { useState } from "react";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

const AboutInfo = ({ nameRef }) => {
    // const textMoveLeft = {
    //     translateX: [100, 0.5],
    //     opacity: [0, 1, "easeInCubic"],
    //     speed: [10],
    //     startScroll: (nameRef?.current?.getBoundingClientRect().top + window.pageYOffset)/2,
    //     shouldAlwaysCompleteAnimation: true,
    //     expanded: false,
    //     children: (
    //         <div>
    //             <h1>hello test move left</h1>
    //         </div>
    //     )
    // }

    // const text2MoveLeft = {
    //     translateX: [100, 0.5],
    //     endScroll: (nameRef?.current?.getBoundingClientRect().top + window.pageYOffset)*2,
    //     shouldAlwaysCompleteAnimation: true,
    //     expanded: false,
    //     children: (
    //         <div>
    //             <h1>hello another test</h1>
    //         </div>
    //     )
    // }

    const [showDevDesc, setShowDevDesc] = useState(false);
    const [showIntroDesc, setshowIntroDesc] = useState(false);

    const handleIntroEnter = () => {
        setShowDevDesc(true);
    }

    const handleAboutTitleEnter = () => {
        setshowIntroDesc(true);
    }


    return (
        <div>
            {/* <ParallaxBanner
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
            </ParallaxBanner> */}
            <Parallax onEnter={() => handleAboutTitleEnter()} /*opacity={[0, 1, "easeInOut"]}*/>
                {/* <h2 className={`about-intro ${showDevDesc ? "visible" : ""}`} style={{fontSize: '2.4vw'}}>Software developer | Explorer | Dreamer.</h2> */}
            </Parallax>
            <Parallax onEnter={() => handleIntroEnter()}>
                <p className={`about-description ${showDevDesc ? "visible" : ""}`}>
                    I recently graduated from the University of Wisconsin-Madison with a degree in Computer Engineering and Computer Science.
                    I also earned a certificate in French during my studies. I have experience with a variety of technologies ranging from software to hardware,
                    but I enjoy working in web development the most.
                </p>
            </Parallax>
        </div>
    );
}

export default AboutInfo;