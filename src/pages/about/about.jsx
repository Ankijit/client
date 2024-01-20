// eslint-disable-next-line no-unused-vars
import React from 'react';
import profile from '../../assets/images/profile.svg'
import html from './../../assets/images/icons/html.svg'
import css from './../../assets/images/icons/css.svg'
import js from './../../assets/images/icons/javascript.svg'
import react from './../../assets/images/icons/react.svg'
import node from './../../assets/images/icons/nodejs.svg'
import mongo from './../../assets/images/icons/mongodb.svg'
import express from './../../assets/images/icons/express.svg'
import tailwind from './../../assets/images/icons/tailwind.svg'
import Bootstrap from './../../assets/images/icons/bootstrap.svg'
import github from './../../assets/images/icons/git.svg'
import jquery from './../../assets/images/icons/jquery.svg'
import ejs from './../../assets/images/icons/ejs.svg'
import mysql from './../../assets/images/icons/mysql.svg'
import figma from './../../assets/images/icons/figma.svg'



function About() {
  return (

    <>
      <div id="about" className='mt-12 mx-16'>
        <h1 className='text-3xl text-center'>WEB WIZARD: MEET THE DEVELOPER</h1>
        <div id="description" className='flex justify-between gap-14 mt-8'>
          <img src={profile} alt="" className='h-72' />
          <div className='self-center'>
            <h2 className='text-3xl'>Hello,</h2>
            I&apos;m Ankijit, an intermediate web developer with a passion for creating dynamic digital experiences. My skills span HTML, CSS, JavaScript, React, Express.js, Node.js, MongoDB, and APIs. I thrive on learning and pushing my boundaries to craft engaging web solutions. My goal is to keep evolving and make an impact in the web development world.
          </div>
        </div>
      </div>
      <div id="skills" className='mt-12'>
        <h1 className='text-3xl text-center'>My SKILL ARSENAL</h1>

        <div className="skillset grid grid-cols-7 w-full place-items-center mt-12">
          <div>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div>
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div>
            <img src={js} alt="" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src={tailwind} alt="" />
            <p>Tailwind</p>
          </div>
          <div>
            <img src={Bootstrap} alt="" />
            <p>Bootstrap</p>
          </div>
          <div>
            <img src={jquery} alt="" />
            <p>JQuery</p>
          </div>
          <div>
            <img src={react} alt="" />
            <p>React</p>
          </div>


          <div>
            <img src={node} alt="" />
            <p>Node JS</p>
          </div>
          <div>
            <img src={express} alt="" />
            <p>Express</p>
          </div>
          <div>
            <img src={ejs} alt="" />
            <p>EJS</p>
          </div>
          <div>
            <img src={mysql} alt="" />
            <p>My SQL</p>
          </div>
          <div>
            <img src={mongo} alt="" />
            <p>MongoDB</p>
          </div>
          <div>
            <img src={figma} alt="" />
            <p>UI/UX</p>
          </div>
          <div>
            <img src={github} alt="" />
            <p>Git</p>
          </div>
        </div>

        <div className="projects">
          <h1 className='text-3xl text-center mt-12'>PROJECTS PORTFOLIO: MY CODING CREATIONS</h1>
          <div className="pcarousal">
            <div className="pcarousalcont">
              <div className="pcarosalitem">
                <div></div>
                <div></div>
              </div>
              <div className="pcarosalitem">
              <div></div>
                <div></div>
              </div>
              <div className="pcarosalitem">
              <div></div>
                <div></div>
              </div>
            </div>
            <div className="prev"></div>
            <div className="next"></div>
            <div className="dots"></div>
          </div>
        </div>
        <a href="https://github.com/Ankijit2" target="_blank" rel="noopener noreferrer"><button className="buttons button1">Show More</button></a>
      </div>
    </>
  )
}

export default About