// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from "framer-motion"
import profile from '../../assets/images/profile.svg'

function Home() {
  return (

    <>

      <div className='flex justify-between mt-12 mx-20 text-tprimary'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <img src={profile} alt="" className='h-96' />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='self-center basis-6/12'>
          <div className="flex justify-center flex-col  ">
            <div className="slogan text-3xl">Designing with Purpose, Coding with Precision</div>
            <div className='flex '>
              <a href="resume/resume.pdf" download><button className="buttons">Unveil CV</button></a> <a href="https://www.fiverr.com/s/8ByxAg" target="_blank" rel="noopener noreferrer"><button className="buttons">Hire Me</button></a>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className='h-[170px]'>
   
    </motion.footer>

    </>
  )
}

export default Home