import '../App.css';
import Resume from './resume';
import Projects from './projects';
import ParallaxBannerImage from './ParallaxBannerImage';
import About from './about';

import { useRef } from 'react';

function Home() {
  const aboutRef = useRef(null);

  return (
    <div style={{ verticalAlign: 'center' }}>
      <ParallaxBannerImage aboutRef={aboutRef}></ParallaxBannerImage>
      <About ref={aboutRef}></About>
      <Resume id="resume"></Resume>
      <Projects></Projects>
    </div>
  );
}

export default Home;