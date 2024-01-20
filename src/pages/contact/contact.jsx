// eslint-disable-next-line no-unused-vars
import React from 'react'
import facebook from '../../assets/images/icons/facebook.svg'
import github from '../../assets/images/icons/github.svg'
import instagram from '../../assets/images/icons/instagram.svg'
import linkedin from '../../assets/images/icons/linkedin.svg'
import gmail from '../../assets/images/icons/gmail.svg'

function Contact() {
  return (
    <div id="contact" className='flex justify-between gap-16 mx-14 mt-12'>
      <div className='flex flex-col gap-5'>
        <h3 className='text-2xl'>Get in touch</h3>
        <a href="mailto:ankijit123@gmail.com" className='flex'>
          <img src={gmail} alt="" className='socialicons' />
          <span className='ml-4'>ankijit123@gmail.com</span>
        </a>
        <div className="flex gap-6">
          <a href="https://www.facebook.com/profile.php?id=100091178284158" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="" className='socialicons' />
          </a>
          <a href="https://github.com/Ankijit2" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="" className='socialicons' />
          </a>
          <a href="https://www.instagram.com/a.r_design.s/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="" className='socialicons' />
          </a>
          <a href="https://www.linkedin.com/in/ankijit-roy-642409263" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="" className='socialicons' />
          </a>
        </div>
      </div>
      <div className=" basis-7/12 contform">
        <form action="/contactme" method="post" className='flex flex-col gap-2'>
          <h3 className='text-2xl'>For clients</h3>
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea name="Message" rows="6" placeholder="Your Requirements"></textarea>
          <button className="buttons">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact