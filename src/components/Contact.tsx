import React from 'react'
import { IoMdContacts } from "react-icons/io";
import { AiFillMail } from "react-icons/ai"
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-3xl' data-aos="zoom-in-down">Contact us</h2>
                <IoMdContacts size={30} /> 
                <p className='text-black-600 text-[18px] pt-2' data-aos="zoom-in-down">
                    Discover the best fashion attire products with us.Elevate your beauty game with confidece top brands & trends.
                </p>
                <div className='flex gap-3 items-center'></div>
                <div className='text-black-400 text-[18px] pt-2' data-aos="zoom-in-down>
                    <li>Return & Exchange</li>
                    <li>Shipping Information</li>
                    <li>Order Status</li>
                </div>
                <div className= 'email address' data-aos="zoom-in-down>
                   < AiFillMail size={30} /> erumjawedsaeed@gmail.com
                </div>  
                <div className='telephone' data-aos="zoom-in-down">
                   < BsFillTelephoneOutboundFill  size={30} /> (021) 000-3334
                </div>  
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                    <label htmlFor="name">Name</label>
                    <input type='text'
                    className='h-[40px] bg-grey border- border-black'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                    <label htmlFor="email">Email</label>
                    <input type='text'
                    className='h-[40px] bg-grey border- border-black'
                    id='email'/>
                </div>
                <div
                   className='flex flex-col gap-1' data-aos="zoom-in-down">
                    <label htmlFor="payment">Payment </label>
                    <input type='text'
                    className='h-[40px] bg-grey border- border-black'
                    id='payment'/>
                  <div/>
                  <button className='bg-black p-2 px-6' data-aos="zoom-in-down">Send</button>
                </div>
              </div>
            </div>
       </div>
  )
}

export default Contact
