import '../App.css';
import ParallaxBannerImage from '../components/ParallaxBannerImage';
import About from './about';
import Resume from './resume';
import Skills from './skills';
import Projects from './projects';
import SocialLinks from '../components/SocialLinks';
import SoftwareDeveloper from '../components/About/SoftwareDeveloper';
import { useRef } from 'react';
import Explorer from '../components/About/Explorer';

function Home() {
  const aboutRef = useRef(null);

  return (
    <div style={{ verticalAlign: 'center' }}>
      <ParallaxBannerImage aboutRef={aboutRef} />
      <About ref={aboutRef} />
      <SoftwareDeveloper />
      <Explorer />
      <Resume id="resume" />
      <Skills />
      <Projects />
      <SocialLinks />
    </div>
  );
}

export default Home;