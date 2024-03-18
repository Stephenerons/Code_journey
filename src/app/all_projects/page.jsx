"use client"
import React , {useState} from 'react'
import projects from '../conponents/projects'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'

export default function Projects() {

  const [currentState, setCurrentState] = useState('All')

  const [activeStyling, setActiveStyling] = useState('All')

  const activeState = (item) => {
    setActiveStyling(item === activeStyling ? null : item);
  };

  const filteredFrontend = projects.filter( project => project.major_category === 'Frontend')
  
  const frontEnd = filteredFrontend.map((front) => (
 <Link key={front.id} href={`/all_projects/${front.project_title.split(' ').join('-')}`}>
<article className='md:w-[21.5rem] w-80 h-fit rounded-lg shadow-cards md:h-fit md:rounded-lg md:shadow-cards'>

{/* image hero start */}
<div className={`md:bg-home bg-home md:bg-no-repeat bg-no-repeat md:bg-cover bg-cover md:h-48 h-40 md:w-[21.5rem] md:rounded-t-lg rounded-t-lg md:bg-black`}>
</div>
{/* image hero end */}


{/* card contents large screen and small screen start  */}
    <div className='md:w-80 md:h-56 w-80 h-64 '>
      <div className='md:mt-8 mt-8 md:w-fit w-80 md:p-3 p-3'>

        <h2 className='md:text-cyan-950 text-zinc-900 text-lg font-semibold md:text-xl md:font-semibold md:mb-2  text-center md:text-start'>
          {front.project_title}
        </h2>

        <p className='md:text-black md:text-sm md:font-normal text-slate-400 text-base font-normal text-center'>
          {front.subtitle}
        </p>

      </div>
      
      {/* content for large screen starts  */}

      <div className='md:p-3 hidden md:block'>

      <div className='md:mb-10 md:flex md:gap-2'>
        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className=' md:text-sm md:font-normal md:text-white md:text-center '>
            {front.category_1}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex  md:justify-center md:items-center md:gap-2.5 '>
          <p className='md:text-white md:text-sm md:font-normal md:text-center '>
            {front.category_3}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className='md:text-white md:text-sm md:font-normal '>
            {front.category_2}
          </p>
        </div>


      </div>

      {/* div containing view project button and arrow icon starts */}


      <div className='md:flex  '>
        <button>
          <p className='text-slate-400 text-sm font-normal'>
            View Project
          </p>
        </button>

        <span className='text-center'>
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
  ))

 const filteredBackend = projects.filter( backend => backend.major_category === 'Backend' )

  const backEnd = filteredBackend.map((back) => (

<Link key={back.id} href={`/all_projects/${back.project_title.split(' ').join('-')}`}>
<article className='md:w-[21.5rem] w-80 h-fit rounded-lg shadow-cards md:h-fit md:rounded-lg md:shadow-cards'>

{/* image hero start */}
<div className={`md:bg-home bg-home md:bg-no-repeat bg-no-repeat md:bg-cover bg-cover md:h-48 h-40 md:w-[21.5rem] md:rounded-t-lg rounded-t-lg md:bg-black`}>
</div>
{/* image hero end */}


{/* card contents large screen and small screen start  */}
    <div className='md:w-80 md:h-56 w-80 h-64 '>
      <div className='md:mt-8 mt-8 md:w-fit w-80 md:p-3 p-3'>

        <h2 className='md:text-cyan-950 text-zinc-900 text-lg font-semibold md:text-xl md:font-semibold md:mb-2  text-center md:text-start'>
          {back.project_title}
        </h2>

        <p className='md:text-black md:text-sm md:font-normal text-slate-400 text-base font-normal text-center'>
          {back.subtitle}
        </p>

      </div>
      
      {/* content for large screen starts  */}

      <div className='md:p-3 hidden md:block'>

      <div className='md:mb-10 md:flex md:gap-2'>
        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className=' md:text-sm md:font-normal md:text-white md:text-center '>
            {back.category_1}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex  md:justify-center md:items-center md:gap-2.5 '>
          <p className='md:text-white md:text-sm md:font-normal md:text-center '>
            {back.category_3}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className='md:text-white md:text-sm md:font-normal '>
            {back.category_2}
          </p>
        </div>


      </div>

      {/* div containing view project button and arrow icon starts */}


      <div className='md:flex  '>
        <button>
          <p className='text-slate-400 text-sm font-normal'>
            View Project
          </p>
        </button>

        <span className='text-center'>
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
  ))

 const filteredFullStack = projects.filter(product => product.major_category === 'Fullstack')

  const fullstack = filteredFullStack.map((product) => (

<Link key={product.id} href={`/all_projects/${product.project_title.split(' ').join('-')}`}> 
<article className='md:w-[21.5rem] w-80 h-fit rounded-lg shadow-cards md:h-fit md:rounded-lg md:shadow-cards'>

{/* image hero start */}
<div className={`md:bg-home bg-home md:bg-no-repeat bg-no-repeat md:bg-cover bg-cover md:h-48 h-40 md:w-[21.5rem] md:rounded-t-lg rounded-t-lg md:bg-black`}>
</div>
{/* image hero end */}


{/* card contents large screen and small screen start  */}
    <div className='md:w-80 md:h-56 w-80 h-64 '>
      <div className='md:mt-8 mt-8 md:w-fit w-80 md:p-3 p-3'>

        <h2 className='md:text-cyan-950 text-zinc-900 text-lg font-semibold md:text-xl md:font-semibold md:mb-2  text-center md:text-start'>
          {product.project_title}
        </h2>

        <p className='md:text-black md:text-sm md:font-normal text-slate-400 text-base font-normal text-center'>
          {product.subtitle}
        </p>

      </div>
      
      {/* content for large screen starts  */}

      <div className='md:p-3 hidden md:block'>

      <div className='md:mb-10 md:flex md:gap-2'>
        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className=' md:text-sm md:font-normal md:text-white md:text-center '>
            {product.category_1}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex  md:justify-center md:items-center md:gap-2.5 '>
          <p className='md:text-white md:text-sm md:font-normal md:text-center '>
            {product.category_3}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className='md:text-white md:text-sm md:font-normal '>
            {product.category_2}
          </p>
        </div>


      </div>

      {/* div containing view project button and arrow icon starts */}


      <div className='md:flex  '>
        <button>
          <p className='text-slate-400 text-sm font-normal'>
            View Project
          </p>
        </button>

        <span className='text-center'>
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
  ))

  const allCards = projects.map((single) => (

<article key={single.id} className='md:w-[21.5rem] w-80 h-fit rounded-lg shadow-cards md:h-fit md:rounded-lg md:shadow-cards'>
  <Link  href={`/all_projects/${single.project_title.split(' ').join('-')}`}>

{/* image hero start */}
<div className={`md:bg-home bg-home md:bg-no-repeat bg-no-repeat md:bg-cover bg-cover md:h-48 h-40 md:w-[21.5rem] md:rounded-t-lg rounded-t-lg md:bg-black`}>
</div>
  
{/* image hero end */}


{/* card contents large screen and small screen start  */}
    <div className='md:w-80 md:h-56 w-80 h-64 '>
      <div className='md:mt-8 mt-8 md:w-fit w-80 md:p-3 p-3'>

        <h2 className='md:text-cyan-950 text-zinc-900 text-lg font-semibold md:text-xl md:font-semibold md:mb-2  text-center md:text-start'>
          {single.project_title}
        </h2>

        <p className='md:text-black md:text-sm md:font-normal text-slate-400 text-base font-normal text-center'>
          {single.subtitle}
        </p>

      </div>
      
      {/* content for large screen starts  */}

      <div className='md:p-3 hidden md:block'>

      <div className='md:mb-10 md:flex md:gap-2'>
        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className=' md:text-sm md:font-normal md:text-white md:text-center '>
            {single.category_1}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex  md:justify-center md:items-center md:gap-2.5 '>
          <p className='md:text-white md:text-sm md:font-normal md:text-center '>
            {single.category_3}
          </p>
        </div>

        <div className='md:w-fit md:h-6 md:p-1 md:bg-slate-400 md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
          <p className='md:text-white md:text-sm md:font-normal '>
            {single.category_2}
          </p>
        </div>


      </div>

      {/* div containing view project button and arrow icon starts */}


      <div className='md:flex  '>
        <button>
          <p className='text-slate-400 text-sm font-normal'>
            View Project
          </p>
        </button>

        <span className='text-center'>
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
    </Link>
  </article>
  ))


  return (  
    <main>
    <section>
      <div className={`md:bg-projects bg-projects bg-no-repeat bg-cover w-full h-[50%] md:bg-no-repeat md:bg-cover md:w-full md:h-[35.313rem] md:rounded-b-2xl ` }>

              {/* Background with transparent overlay starts */}
              <div className="md:relative relative w-full h-[50%]  md:w-full md:h-[35.313rem] md:rounded-b-2xl">
                  
                  {/* Background overlay starts */}
                  <div className="md:absolute absolute md:inset-0 inset-0 md:bg-cyan-950 bg-cyan-950 opacity-20 md:opacity-20 md:rounded-b-2xl"></div>

                  {/* Text content */}
                  <div className="md:relative relative pl-4 pt-14  md:pl-[6.25rem] md:pt-[7.12rem]">
                    <h1 className="md:w-[33rem] md:text-white text-white md:text-5xl text-xl font-semibold md:font-semibold md:mb-6 mb-[0.81rem]">
                      <span className='md:text-slate-400 text-slate-400'>Explore</span> my works
                    </h1>

                    <p className="md:w-[33rem] md:text-white md:text-base md:font-medium w-60 text-white text-sm font-normal  ">
                    Discover my work organized into distinct categories, each offering a unique glimpse into my skills and capabilities. Whether you&apos;re interested in web development, mobile apps, design, or other specialized fields, you&apos;ll find a curated selection of projects that demonstrate my commitment to excellence and innovation.
                    </p>
                </div>

      </div>
        {/* Background overlay ends */}
      {/* Background with transparent overlay ends */}

      </div>      
    </section>

{/* main content starts */}
    <section className='md:w-full w-full md:h-fit h-fit bg-stone-50 pb-[6.75rem] md:bg-white md:pb-[6.75rem] '>
      <div className='md:pt-24 pt-24 mx-14 md:mx-[6.25rem] flex flex-col justify-center items-center md:flex md:justify-center md:items-center'>
      <div >
        <h2 className='md:text-black md:text-5xl md:font-semibold md:text-center text-center text-black text-xl font-semibold '>
            All Projects
        </h2>

        <p className='md:text-slate-400 md:text-2xl md:font-medium pt-[1.37rem] text-slate-400 text-sm font-medium pb-14'>
          Explore Our Impressive Projects
        </p>
      </div>
      </div>

{/* buttons start */}
      <div className='md:mx-[6.25rem] md:mt-14 md:flex md:justify-end md:gap-6 mx-4 flex justify-center items-center gap-4 '>

      <button
    onClick={() => { setCurrentState('All'); activeState('All'); }}
    className={activeStyling !== 'All' ? 'md:w-fit w-fit  h-8 p-2 bg-zinc-300 rounded-md flex justify-center items-center gap-2 md:h-10 md:p-2.5 md:bg-zinc-300 md:rounded-lg md:justify-center md:items-center md:gap-2.5 md:hover:md:shadow-buttons hover:shadow-buttons' : 'w-fit h-8 p-2 bg-slate-400 rounded-md flex justify-center items-center gap-2 md:w-fit md:h-10 md:p-2.5 md:bg-slate-400 md:hover:bg-slate-400 md:rounded-lg md:justify-center md:items-center md:gap-2.5 md:shadow-buttons shadow-buttons'}
  >
    <p className='text-stone-50 text-xs font-normal md:text-center md:text-stone-50 md:text-base md:hover:text-white md:font-normal'>All</p>
  </button>
        
  <button
    onClick={() => { setCurrentState('Frontend'); activeState('Frontend'); }}
    className={activeStyling !== 'Frontend' ? 'w-fit  h-8 p-2 bg-zinc-300 rounded-md flex justify-center items-center gap-2  md:w-fit md:h-10 md:p-2.5 md:bg-zinc-300 md:rounded-lg md:justify-center md:items-center md:gap-2.5 md:hover:shadow-buttons ' : 'w-fit h-8 p-2 bg-slate-400 rounded-md flex justify-center items-center gap-2 md:w-fit md:h-10 md:p-2.5 md:bg-slate-400 md:hover:bg-slate-400 md:rounded-lg md:justify-center md:items-center md:gap-2.5 md:shadow-buttons'}
  >
    <p className='text-stone-50 text-xs font-normal md:text-center md:text-white md:text-base md:hover:text-white md:font-normal'>Frontend</p>
  </button>
        
  <button
    onClick={() => { setCurrentState('Backend'); activeState('Backend'); }}
    className={activeStyling !== 'Backend' ? 'w-fit  h-8 p-2 bg-zinc-300 rounded-md flex justify-center items-center gap-2  md:w-fit md:h-10 md:p-2.5 md:bg-zinc-300 md:rounded-lg md:justify-center md:items-center md:gap-2.5 md:hover:shadow-buttons' : 'w-fit h-8 p-2 bg-slate-400 rounded-md flex justify-center items-center gap-2 md:w-fit md:h-10 md:p-2.5 md:bg-slate-400 md:hover:bg-slate-400 md:rounded-lg md:justify-center md:items-center md:gap-2.5 md:shadow-buttons'}
  >
    <p className='text-stone-50 text-xs font-normal md:text-center md:text-white md:text-base md:hover:text-white md:font-normal'>Backend/Api</p>
  </button>
        
  <button
    onClick={() => { setCurrentState('Fullstack'); activeState('Fullstack'); }}
    className={activeStyling !== 'Designs' ? 'w-fit  h-8 p-2 bg-zinc-300 rounded-md flex justify-center items-center gap-2  md:w-fit md:h-10 md:p-2.5 md:bg-zinc-300 md:rounded-lg md:justify-center md:items-center md:gap-2.5 md:hover:shadow-buttons' : 'w-fit h-8 p-2 bg-slate-400 rounded-md flex justify-center items-center gap-2 md:w-fit md:h-10 md:p-2.5 md:bg-slate-400 md:hover:bg-slate-400 md:rounded-lg md:justify-center md:items-center md:gap-2.5 md:shadow-buttons'}
  >
    <p className=' text-stone-50 text-xs font-normal md:text-center md:text-white md:text-base md:hover:text-white  md:font-normal'>Fullstack</p>
  </button>

      </div>
{/* button ends */}

{/* cards start */}
      <div className='md:mx-[6.25rem] mx-4  md:flex flex md:flex-row flex-col justify-center items-center gap-y-14 md:flex-wrap md:gap-y-6 md:gap-x-3 md:mt-16 mt-8  '>
        {currentState === 'All' ? allCards :
         currentState === 'Frontend' ? frontEnd :
         currentState === 'Backend' ? backEnd :
         currentState === 'Fullstack' ? fullstack : null
        }
      </div>
{/* cards ends */}


    </section>
    {/* main content ends */}
    </main>
  )
}
