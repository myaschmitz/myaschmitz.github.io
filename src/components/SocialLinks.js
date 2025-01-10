import { TiMail, TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import 'react-icons/io'
import '../App.css';
import 'react-icons/ti'
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoFlickr } from "react-icons/io5";

const SocialLinks = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <a href='https://flickr.com/people/197895414@N06/' target='_blank' rel="noreferrer"><IoLogoFlickr className='social-styles' size={30} /></a>
            <a href='https://www.linkedin.com/in/mya-schmitz/' target='_blank' rel="noreferrer"><TiSocialLinkedin className='social-styles' size={30} /></a>
            <a href='https://github.com/myaschmitz' target='_blank' rel="noreferrer"><IoLogoGithub className='social-styles' size={30} /></a>
            <a href='https://www.facebook.com/mya.schmitz.37/' target='_blank' rel="noreferrer"><TiSocialFacebook className='social-styles' size={30} /></a>
            <a href='mailto:myalschmitz@gmail.com' target='_blank' rel="noreferrer"><TiMail className='social-styles' size={30} /></a>
        </div>
    );
}

export default SocialLinks;