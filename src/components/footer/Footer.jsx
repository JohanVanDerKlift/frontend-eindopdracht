import React from 'react';
import './Footer.css';
import facebookIcon from '../../assets/facebook-icon.png'
import youtubeIcon from '../../assets/youtube-icon.png'
import twitterIcon from '../../assets/twitter-icon.png'
import instaIcon from '../../assets/instagram-icon.png'

function Footer(props) {
  return (
    <footer className="footer-container">
      <h3>Johan van der Klift @ NOVI Hogeschool</h3>
      <ul>
        <li><img src={facebookIcon} alt="Facebook icon"/></li>
        <li><img src={instaIcon} alt="Instagram icon"/></li>
        <li><img src={twitterIcon} alt="twitter icon"/></li>
        <li><img src={youtubeIcon} alt="Youtube icon"/></li>
      </ul>
    </footer>
  );
}

export default Footer;