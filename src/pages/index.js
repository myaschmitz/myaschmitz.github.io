import '../App.css';
import ParallaxBannerImage from '../components/ParallaxBannerImage';
import About from './about';
import Resume from './resume';
import Skills from './skills';
import Projects from './projects';
import SocialLinks from '../components/SocialLinks';
import Timeline from '../components/About/Timeline';
import { useRef } from 'react';

function Home() {
  const aboutRef = useRef(null);

  return (
    <div style={{ verticalAlign: 'center' }}>
      <ParallaxBannerImage aboutRef={aboutRef} />
      <About ref={aboutRef} />
      <Timeline />
      <Skills />
      <Resume id="resume" />
      <Projects />
      <SocialLinks />
    </div>
  );
}

export default Home;