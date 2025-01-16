import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data =[
  {
    id: 0 ,
    title :"Design Guilt",
    desc : "Baggy jeans with stylish open long shirt",
    img :"/Projecrts.wear1.jpg" ,
    tags: ["Active Wear" , "Cotton-Lawn Shirt & demin" , "XS,S,M,L,XL" , "Seasonal Collection" ],
    Price:"30",
  },
{
  id: 1,
  title :"Striped ling frock",
  desc :"Casual western wear pocket friendly long frock in striped design",
  img :"/Projects.wear2.webp",
  tags:["Active Wear" , "Cotton Fabric" , "XS,S,M,L,XL" , " Seasonal Collection"],
  Price:"15",
},
{
  id: 2,
  title :"Block Pattern Short Frock",
  desc :"Full sleeves block patterns short frock with dusky brown leather belt and the pair of long dusky boots",
  img :"/Projects.3.jpg",
  tags:["Active Wear" , "Silk Fabric" , "XS,S,M,L,XL" , "Limited Edition"],
  Price:"50",
},
{
  id: 3,
  title :"Long Slit Dress",
  desc :"long side flared round pattern silk maxi with leather belt",
  img :"/Projects.4.jpg",
  tags:["Party Wear" ,  "Cotton Silk fabric" , "XS,S,M,L,XL" , "Limited Edition"  ],
  Price:"20",
},
{
  id: 4,
  title :"White fitted bodice frock",
  desc :"white chiffon frock with top crop shoulder vintage sleeves and square neck",
  img :"/Projects.5.jpg",
  tags:["Party Wear" , "Chiffon " , "XS,S,M,L,XL" , "Seasonal Collection" ],
  Price:"12",
},
{
  id:5,
  title : "Black short sleeves sundress",
  desc :"short sleeves square collar bubble simple and delicate design ",
  img :"/Projects.6.jpg",
  tags: ["Casual Wear" , "Polyester" , "XS,S,M,L,XL" , "Seasonal Collection"],
  Price:"16",
},
{
  id:6,
  title : "Above the knee dress",
  desc :"white short shirt with short sleevless denim and trenchy bottom ",
  img :"/Projects.7.jpg",
  tags:["Party Wear" , "cotton & Denim" , "XS,S,M,L,XL" , "Limited Edition" ],
  Price:"30",
},
{
  id:7,
  title : "Skirt with offwhite shirt",
  desc :"Offwhite silk shirt with long blue waist maxi with round white patches ",
  img :"/Projects.8.jpg",
  tags:[ "Party Wear" , "Silk & cotton" , "XS,S,M,L,XL" , "Limited Edition" ],
  Price:"40",
},
{
  id:8,
  title : "Bell bottom jeans and leader top",
  desc :"Bell bottom jeans with coffe brown leader furry top ",
  img :"/Projects.9.jpg",
  tags:[ "Party Wear" , "Leader & denim" , "XS,S,M,L,XL" , "Limited Edition" ],
  Price:"38",
},
{
  id:9,
  title :"Black jeans ,tank and open coat",
  desc :"Black jeans and inner tank with open coat and furr lace on the bottom",
  img :"/Projects.10.jpg",
  tags:["Casual Wear" , "Polyester & denim" , "XS,S,M,L,XL" , "Limited Edition" ],
  Price: "48",
},
]

const Projects = () => {
  return (
    <div id='unique' className='container pt-32'>
      <Heading title='Western Shine EJS' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            price={el.Price}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;