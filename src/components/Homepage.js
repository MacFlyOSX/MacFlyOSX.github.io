import React from 'react';
import './main.css';
import splash from '../assets/splash.png';
import techstack from '../assets/techstack.png';
import pearbnb from '../assets/pearbnb.png';
import squeal from '../assets/squeal.png';
import amalgamate from '../assets/amalgamate.png';

const Homepage = () => {
  return (
    <div className='flex-col' id='main-body'>
        <div className='flex-col' id='splash-hero'>
            <h1 id='main-title'>Full Stack Software Engineer</h1>
            <span id='below-title'>
                The only REST I get is with APIs.
            </span>
            <img src={splash} alt='splash' id='splash-image' />
        </div>
        <div className='flex-col' id='about-me'>
            <h2 id='hello-world'>
                Hello world, I'm Brandon.
            </h2>
            <span id='about-blurb'>
                Since transitioning from teaching High School Mathematics, I have designed, coded, and deployed three full stack projects (two solo projects and one team project). I am constantly striving to improve my understanding and fluency of the various programming languages and technologies, and am always eager to take on the next challenge.
            </span>
            <img id='techstack' src={techstack} alt='techstack' />
        </div>
        <div className='flex-col' id='projects'>
            <h2 id='projects-title'>Projects</h2>
            <div className='project-container margin-bottom flex-row'>
                <img src={pearbnb} alt='pearbnb' className='project-computer' />
                <div className='project-blurb flex-col'>
                    <span className='project-title'>PearBnB</span>
                    <span className='project-descript'>
                    I chose to recreate AirBnB because of how attractive the site is designed and how extensive the backend is. It was an amazing experience for me to take on the challenge of a site with such incredible CSS styling.
                    </span>
                    <a href='https://pearbnb-final.herokuapp.com/' rel="noopener noreferrer" target='_blank'>
                        <button className='project-link'>Live Site</button>
                    </a>
                </div>
            </div>
            <div className='project-container margin-bottom flex-row'>
                <img src={squeal} alt='squeal' className='project-computer' />
                <div className='project-blurb flex-col'>
                    <span className='project-title'>Squeal</span>
                    <span className='project-descript'>
                    This was my first group project that I ever worked on, and we made an application inspired by Yelp. It was such an awesome experience working with other talented developers to complete this project in a one-week timeframe.
                    </span>
                    <a href='https://squeal-yelp.herokuapp.com/' rel="noopener noreferrer" target='_blank'>
                        <button className='project-link'>Live Site</button>
                    </a>
                </div>
            </div>
            <div className='project-container flex-row'>
                <img src={amalgamate} alt='amalgamate' className='project-computer' />
                <div className='project-blurb flex-col'>
                    <span className='project-title'>AmalgamateUp</span>
                    <span className='project-descript'>
                    My first ever full stack project was an application based on the popular site Meetup. It was not without its challenges, but it was such a great feeling to deploy something that I literally made from scratch.
                    </span>
                    <a href='https://amalgamate-up.herokuapp.com/' rel="noopener noreferrer" target='_blank'>
                        <button className='project-link'>Live Site</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage;
