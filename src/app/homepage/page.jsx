"use client"
import React, {useState, useEffect } from 'react'
import projects from '../conponents/projects'
import Image from 'next/image'
import Link from 'next/link'
import style from './homepage.module.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Homepage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const scrollHandler = () => {
      setScrollY(window.scrollY);
    };
  
    window.addEventListener('scroll', scrollHandler);
  
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollOne = scrollY >= 100 ? style.slideAnimate2 : '';
  const scrollTwo = scrollY >= 100 ?  style.popOut2 : '';
  const scrollThree = scrollY > 100 ? style.slideAnimate3 : '';
  const scrollFour = scrollY > 100 ? style.slideAnimate2 : '';
  const scrollFive = scrollY > 100 ? style.slideAnimate5 : '';
  const scrollSix = scrollY > 100 ? style.slideAnimate3 : '';
  const scrollSeven = scrollY > 100 ? style.slideAnimate7 : '';

const cards = projects.slice(0 , 3).map((card) => (

<Link key={card.id} href= {`/homepage/${card.project_title.split(' ').join('-')}`}>
  <article className='md:w-[21.5rem] w-80 h-fit rounded-lg shadow-cards md:h-fit md:rounded-lg md:shadow-cards'>

{/* image hero start */}
<div className={`md:bg-home bg-home md:bg-no-repeat bg-no-repeat md:bg-cover bg-cover md:h-48 h-40 md:w-[21.5rem] md:rounded-t-lg rounded-t-lg md:bg-black`}>
</div>
{/* image hero end */}


{/* card contents large screen and small screen start  */}
    <div className='md:w-80 md:h-56 w-80 h-64 '>
      <div className='md:mt-8 mt-8 md:w-fit w-80 md:p-3 p-3'>

        <h2 className='md:text-cyan-950 text-zinc-900 text-lg font-semibold md:text-xl md:font-semibold md:mb-2  text-center md:text-start'>
          {card.project_title}
        </h2>

        <p className='md:text-black md:text-sm md:font-normal text-slate-400 text-base font-normal text-center'>
          {card.subtitle}
        </p>

      </div>
      
      {/* content for large screen starts  */}

      <div className='md:p-3 hidden md:block'>

      <div className='md:mb-10 md:flex md:gap-2'>
        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className=' md:text-sm md:font-normal md:text-white md:text-center '>
            {card.category_1}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex  md:justify-center md:items-center md:gap-2.5 '>
          <p className='md:text-white md:text-sm md:font-normal md:text-center '>
            {card.category_3}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className='md:text-white md:text-sm md:font-normal '>
            {card.category_2}
          </p>
        </div>


      </div>

      {/* div containing view project button and arrow icon starts */}


      <div className='md:flex '>
        <button>
          <p className='text-slate-400 text-sm font-normal'>
            View Project
          </p>
        </button>

        <span className=' md:my-auto'>
        <MdOutlineKeyboardArrowRight />
        </span>
      </div>

     {/* div containing view project button and arrow icon ends */}

      </div>
{/* content for large screen stops  */}

        {/* contents for small screens starts  */}
        <div className='md:hidden px-4 text-center'>
            <p className=' text-zinc-900 text-xs font-normal '>
            Lorem ipsum dolor sit amet consectetur. Tellus fringilla sed dictum habitasse integer tortor lacus consequat fusce. Mauris duis nunc vel malesuada faucibus convallis morbi sit. Mi urna facilisis donec in malesuada a morbi. Tellus placerat molestie enim in nascetur purus a id. Amet a a non sapien. Ut nunc pharetra et nec et. Sed aenean nisi sem faucibus hendrerit malesuada sed tincidunt ac.
            </p>
        </div>
        {/* contents for small screens stop  */}


    </div>

  </article>
</Link>

// card content large screen and small screen start  ends

)) 


  return ( 
    <main className='w-full md:max-w-7xl h-full md:h-full flex md:flex flex-col md:flex-col justify-center md:justify-center md:items-center items-center'>

{/* Hero Section starts */}
<section className='md:w-full w-full h-[50%] md:h-screen md:bg-slate-600 md:z-30 z-0 '>

  <div className={`md:bg-home bg-home bg-no-repeat bg-cover w-full h-[50%] md:bg-no-repeat md:bg-cover md:w-full md:h-screen :rounded-b-2xl` }>

    {/* Background with transparent overlay starts */}
    <div className="md:relative relative md:w-full w-full h-80 md:h-screen md:rounded-b-2xl">
      
      {/* Background overlay starts */}
      <div className="md:absolute absolute md:inset-0 inset-0 md:bg-cyan-950 bg-cyan-950 md:opacity-20 opacity-20 md:rounded-b-2xl"></div>

      {/* Text content */}
      <div className="md:absolute absolute md:pl-[6.25rem] pl-4 pt-14 md:pt-[7.12rem]">

      <div className={` md:relative relative md:right-[550px] right-[550px] ${style.slideAnimate}`}>

        <h1 className='md:w-[33rem] w-60 md:text-white text-white md:text-5xl text-xl font-semibold  md:font-semibold md:mb-6 mb-4'>
          Captivating <span className='text-teal-300 '>Designs</span> and Seamless Functionality
        </h1>
      </div>

        <p className={`md:w-[33rem] w-60 md:text-white text-white text-sm font-normal opacity-0 md:text-base md:font-medium md:opacity-0 ${style.popOut}`}>
          Welcome to our dynamic portfolio website, showcasing a diverse range of frontend and backend projects alongside stunning product designs. Explore our creations and experience the seamless integration of captivating visuals and intuitive functionality.
        </p>
      </div>

    </div>
      {/* Background overlay ends */}
    {/* Background with transparent overlay ends */}

  </div>

</section>

{/* hero section ends */}

{/* main content start */}
<section  className='md:w-full w-full h-fit  md:h-screen bg-stone-50 md:bg-white'>
    <div className='md:mx-auto mx-auto pt-14 md:pt-24 md:text-center text-center md:mb-16 mb-10 '>
      <h2 className={`md:text-cyan-950 text-cyan-950 md:text-4xl text-xl md:pb-8 pb-4 md:font-semibold font-semibold relative right-[999px] ${style.slideAnimate2} `}>
        Projects
      </h2>

      <p className={`md:text-slate-400 text-slate-400  text-sm font-medium  md:text-2xl md:font-medium opacity-0 ${style.popOut2}`}>
        Explore Our Impressive Projects
      </p>

      <p className={`md:text-black text-center text-black text-xs font-light md:text-base md:font-normal md:mt-6 mt-2`}>Discover a diverse range of frontend and backend projects</p>
    </div>

{/* project cards start */}

<div className=' md:mx-[6.25rem] md:flex md:flex-row justify-center items-center flex-col flex md:flex-wrap md:gap-3 gap-14 '>
  {cards} 
</div>


<Link href='../all_projects'>
<div className='md:flex flex justify-center items-center md:justify-center md:items-center md:mt-14 mt-14 '>
<button className='w-40 h-11 bg-slate-400 rounded-lg justify-center items-center gap-2.5 md:w-56 md:h-16 md:px-14 md:py-4 md:bg-zinc-300 md:rounded-lg md:gap-2.5 hover:md:w-56 hover:md:h-16 hover:md:bg-slate-400 hover:md:rounded-lg hover:md:justify-center hover:md:items-center  hover:md:shadow-view '>
  <p className='md:text-white md:text-2xl md:font-medium text-white text-xl font-medium  hover:md:text-white hover:md:text-2xl hover:md:font-medium md:transition-all md:duration-1000'>
    View All
  </p>
</button>

</div>
</Link>

{/* project cards end */}


</section>



<section  className='md:w-full w-full h-fit md:h-fit md:bg-white bg-stone-50 md:pb-8 '>
  {/* parent containing div */}
  <div className='md:pt-24 pt-24 md:mx-[6.25rem] mx-4 justify-center items-center '>

{/* first part starts */}
    <div className='md:flex md:mb-6'>

{/* content containing div1  starts*/}
<div className='md:w-1/2 md:text-start text-center  '>


        {/* <div className='md:border md:border-cyan-950 md:w-[1px] mr-8'>
        </div> */}

        <div className='md:flex md:justify-start md:items-start flex flex-col justify-center items-center'>
          <h2 className={`text-cyan-950 text-xl font-medium md:text-black md:text-3xl md:font-medium md:mb-6 pb-4 text relative right-[600px] ${scrollFour}`}>
          Explore Our Services
          </h2>

          <p className='md:w-[30.9375rem] w-80 md:text-black md:text-base md:font-light text-black text-xs font-light '>
          We offer a diverse range of services to cater to both creators and enthusiasts. Our services include frontend and backend development, stunning product designs, and personalized options for a unique experience. We also provide support and assistance throughout the process to ensure customer satisfaction.
          </p>

        </div>
                    
     </div>


     <div className='hidden md:block'>

     <div className=' flex justify-center items-center'>
        <div className='md:pl-[19.44rem] '>
          <Image src='/main.svg' width= {224} height= {198} alt='' ></Image>
        </div>

     </div>
        
     </div>

        <div className='md:hidden'>

        <div className=' flex justify-center items-center  pt-8'>
          <Image src='/main_mobile.svg' width= {224} height= {198} alt='' ></Image>
        </div>
        </div>


        </div>
  </div>
{/* first part ends */}

{/* second part starts */}
{/* content containing div1  starts*/}

  <div className=' md:flex md:mb-6 md:mx-[6.25rem] '>
        
      <div className='md:w-1/2 hidden md:block '>
      <Image src='/main2.svg' width= {224} height= {198} alt='' ></Image>
      </div>

    <div className='md:flex text-center'>


      {/* text div starts */}
      <div className='md:text-end flex flex-col md:justify-center md:items-end md:w-full mt-10 '>
          <h2 className='md:text-black md:text-3xl md:font-medium md:mb-6 text-cyan-950 text-xl font-medium pb-4  '>
          Personalized Solutions
          </h2>

          <p className='md:w-[30.9375rem]  md:text-black md:text-base md:font-light text-black text-xs font-light w-80 mx-auto ' >
          We understand that every project is unique, and we strive to provide personalized solutions tailored to your specific needs. Our team of experts will work closely with you to ensure that your vision is brought to life, exceeding your expectations
          </p>

      </div>
{/* text container ends */}
{/* 
        <div className='md:border md:border-[#0F2A3D] ml-8 md:h-[7.9375rem]'>

        </div> */}

          
    </div>

    <div className='md:w-1/2 md:hidden flex justify-center items-center  pt-8 '>
      <Image src='/main 3_mobile.svg' width= {224} height= {198} alt='' ></Image>
      </div>

  </div>

  {/* second part ends */}


{/* Third part starts */}
  {/* parent containing div */}
  
  <div className='md:pt-6 md:mx-[6.25rem] md:flex  '>

    <div className='md:w-1/2 md:flex md:mb-6 '>

{/* 
text container starts  */}
        <div className='md:ml-6 flex flex-col pt-8 justify-center items-center '>
          <h2 className='md:text-black md:text-3xl md:font-medium md:mb-6 text-cyan-950 text-xl font-medium pb-4'>
          Support and Assistance
          </h2>

          <p className='md:w-[30.9375rem] md:text-black md:text-base md:font-light text-black text-xs font-light w-80'>
          We believe in providing exceptional support and assistance to our clients. Whether you have a question, need guidance, or require technical help, our dedicated team is always here to ensure a smooth and successful experience.
          </p>

        </div>
{/* text container ends  */}
                    
     </div>

        <div className='md:flex md:justify-center md:items-center'>
        
        <div className='pl-[11.25rem] hidden md:block'>
        <Image src='/main3.svg' width= {224} height= {198} alt='' ></Image>
        </div> 

        </div>

          <div className='flex justify-center items-center'>
            <div className=' pt-8 md:hidden pb-14'>
            <Image src='/main_mobile2.svg' width= {224} height= {198} alt='' ></Image>
        </div>

          </div>
        
  </div>
    {/* Third part ends */}


</section>

{/* main content ends */}

{/* footer starts */}


    </main>
    
  )
}
