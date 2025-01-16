import React from 'react'
import Navbar from './Navbar'
import { FaBold } from 'react-icons/fa'

const Hero = () => {
  return  (
    <div>   
        <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/banner.ejs.jpg)] bg-left lg:bg-[30%] bg-cover'
        style={{backgroundSize:"50%" , backgroundPosition:"left 150px , right 100px" }}>
         
          <Navbar/>
            <div className='container grid lg:grid-colos-2 h-[calc(100vh-60px)]'>
             <div className='hidden lg:block'></div>
              <div className='text-[80px] sm:[100px] font-bold leading-tight flex justify-end justify-item-end'>
              <div>
          <p data-aos="zoom-in-down">Western Shine</p>
          <p data-aos="zoom-in-down"> EJS </p>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Hero

