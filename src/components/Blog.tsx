import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const blog = () => {
  return (
    <div id='Blogs' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
         <div data-aos="zoom-in-down">
            <h2 className='text-4xl md-text-5xl'>Fashion wear with EJS Western Shine</h2>
            <p className='text-grey-500 pt-2'>
            Western wear is a category of men's and women's clothing which derives its unique style from the clothes worn in the 19th century Wild West.
             It ranges from accurate historical reproductions of American frontier clothing, to the stylized garments popularized by Western film and television or 
             singing cowboys such as Gene Autry and Roy Rogers in the 1940s and 1950s.
            </p>
            <div className='flex gap-3 items-center'></div>
         </div>
         </div>
          <div className='grid grid-cols-2 text-black text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <div>
                <h2 className='text-1xl md-text-4xl'>Follow us</h2>
                <p className='text-grey-400 text-[18px] pt-2'>
                  Stay connected with us through social plateforms:
                </p>
                <div className='flex gap-3 items-center'></div>
                <div className='text-black-400 text-[18px] pt-2'>
                <p><FaFacebookSquare size={30} />Facebook</p>
                <p><FaInstagram size={30}/>Instagram</p>
                <p><FaLinkedin size={30} />Linkdin</p>
                <p>< FaGithub size={30}/>GitHub</p>
                </div>
                </div>
         </div>
         </div>
    </div>
  )
}

export default blog
