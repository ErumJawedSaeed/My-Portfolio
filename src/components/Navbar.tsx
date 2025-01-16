import { hasExternalOtelApiPackage } from 'next/dist/build/webpack-config';
import Link from 'next/link';
import React from 'react'
import { CgMenuRound } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='container pt-15 '>
        <div className='flex justify-between items-center'>
            <div className='tex-xl font-medium'>EJS Western Shine</div>
            <div className='text-blue-300'>
            <ul className='gap-10 lg:gap-16 hidden md:flex '>
              <li className='menulink' ><Link href="#hero">Home</Link></li>
              <li className='menulink'><Link href='shop'>Shop</Link></li>
              <li className='menulink'><Link href='page'>Page</Link></li>
              <li className='menulink'><Link href='blog'>Blog</Link></li>
              <li className='menulink'><Link href='contact'>Contact</Link></li>
            </ul>
            </div>
          
            <CgMenuRound className='md:hidden' size={35}/>
        </div>
    </div>
  )
}

export default Navbar
