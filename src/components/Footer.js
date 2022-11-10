import React from 'react';
import './main.css';

const Footer = () => {
  return (
    <div id='footer-container' className='flex-row'>
        <div id='footer-left' className='footer'>
            Designed and coded by Brandon Tasaki
        </div>
        <div id='footer-right' className='footer'>
            <a className='footer footer-link' id='footer-github' href='https://github.com/MacFlyOSX/' rel="noopener noreferrer" target='_blank'>GitHub</a>
            <a className='footer footer-link' href='https://www.linkedin.com/in/brandon-tasaki/' rel="noopener noreferrer" target='_blank'>Linkedin</a>
        </div>
    </div>
  )
}

export default Footer;
