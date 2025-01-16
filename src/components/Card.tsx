import React from 'react'
import Image from 'next/image';

interface propsType {
    title: string ;
    desc : string ;
     img :  string ;
    tags: string [] | undefined;
    price: string;
}

const Card:React.FC<propsType> = ({title, desc, img, tags, price }) => {
  return (
    <div className='border border-Black w-[300px] sm:w-[350px]' data-aos="zoom-in-down"> 
      <div>
        <Image className='w-[300px] sm:w-[350px] h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      </div>

      <div className='p-4 y-4'>
        <div className='text 4xl font-extradark'>{title}</div>
        <div>{desc}</div>
        {tags && tags.map((el, index) => (
         <div className='tags' key={index}>
         {el}
          </div>
                ))}
        </div>

        <div className='card'>
          <div className='price-tag'>
            <p>price :${price}</p>
          </div>
        </div>
      </div>
  )
}

export default Card

