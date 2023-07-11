import { TiMail, TiSocialFacebook, TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti';
import 'react-icons/io'
import '../App.css';
import 'react-icons/ti'
import { IoLogoGithub } from 'react-icons/io';
import { Parallax } from 'react-scroll-parallax';

const SocialLinks = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <a href='https://www.linkedin.com/in/mya-schmitz/' target='_blank'><TiSocialLinkedin className='social-styles' size={30} /></a>
            {/* <a href='' target='_blank'><TiSocialGithub className='social-styles' size={30} /></a> */}
            <a href='https://github.com/myaschmitz' target='_blank'><IoLogoGithub className='social-styles' size={30} /></a>
            <a href='https://www.facebook.com/mya.schmitz.37/' target='_blank'><TiSocialFacebook className='social-styles' size={30} /></a>
            <a href='https://www.instagram.com/myaschmitz/' target='_blank'><TiSocialInstagram className='social-styles' size={30} /></a>
            <a href='mailto:myaschm@gmail.com' target='_blank'><TiMail className='social-styles' size={30} /></a>
        </div>
    );
}

export default SocialLinks;