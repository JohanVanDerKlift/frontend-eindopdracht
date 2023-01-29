import React from 'react';
import './Footer.css';
import facebookIcon from '../../assets/facebook-icon.png'
import youtubeIcon from '../../assets/youtube-icon.png'
import twitterIcon from '../../assets/twitter-icon.png'
import instaIcon from '../../assets/instagram-icon.png'

function Footer(props) {
  return (
    <footer className="footer-container">
      <h3>Johan van der Klift @ <a href="https://www.novi.nl">NOVI Hogeschool</a></h3>
      <ul>
        <li><a href="https://www.facebook.com/f1"><img src={facebookIcon} alt="Facebook icon"/></a></li>
        <li><a href="https://www.instagram.com/f1"><img src={instaIcon} alt="Instagram icon"/></a></li>
        <li><a href="https://www.twitter.com/f1"><img src={twitterIcon} alt="twitter icon"/></a></li>
        <li><a href="https://www.youtube.com/f1"><img src={youtubeIcon} alt="Youtube icon"/></a></li>
      </ul>
    </footer>
  );
}

export default Footer;