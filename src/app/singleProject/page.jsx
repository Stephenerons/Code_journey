"use client"
import React from 'react'
import { GoClockFill } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

export default function singleProject() {

  return (
    <main>
<section>
      <div className= {`md:bg-singlePage bg-singlePage md:bg-no-repeat bg-no-repeat md:bg-cover bg-cover md:w-full w-full h-80  md:h-[35.3125rem] md:rounded-b-2xl ` }>

              {/* Background with transparent overlay starts */}
              <div className="md:relative relative w-full h-80 md:w-full md:h-[35.3125rem] md:rounded-b-2xl">
                  
                  {/* Background overlay starts */}
                  <div className="md:absolute absolute inset-0 bg-cyan-950 opacity-20 md:inset-0 md:bg-cyan-950 md:opacity-20 md:rounded-b-2xl"></div>

                  {/* Text content */}
                  <div className="md:relative relative pl-4 pt-14 md:pl-[6.25rem] md:pt-[10rem]">
                    <h1 className="md:w-[33rem] md:text-white md:text-5xl md:font-semibold md:mb-6 mb-6 text-slate-400 text-xl font-semibold ">
                     Project 1
                    </h1>

                    <div className='md:w-72 w-fit h-6 md:flex gap-2 md:h-8 flex md:gap-2.5   '>
                    <div className='md:w-20 md:h-8 md:px-6 md:py-2 md:bg-black md:rounded-md md:justify-center md:items-center md:gap-6 w-fit h-6 px-5 py-1.5 bg-black rounded flex justify-center items-center gap-4 '>
                        <p className='md:text-white md:text-sm md:font-normal text-white text-xs font-normal '>
                            web
                        </p>
                    </div>

                    <div className='md:w-fit md:h-8 md:px-6 md:py-2 md:bg-black md:rounded-md md:justify-center md:items-center md:gap-6  w-fit h-6 px-5 py-1.5 bg-black rounded flex justify-center items-center gap-4 '>
                        <p className='md:text-white md:text-sm md:font-normal text-white text-xs font-normal'>
                            Design
                        </p>
                    </div>

                    <div className='md:w-fit md:h-8 md:px-6 md:py-2 md:bg-black md:rounded-md md:justify-center md:items-center md:gap-6  w-fit h-6 px-5 py-1.5 bg-black rounded flex justify-center items-center gap-4 '>
                        <p className='md:text-white md:text-sm md:font-normal text-white text-xs font-normal '>
                            Api
                        </p>
                    </div>


                    </div>


                    
                    <div className=' md:flex md:mt-10 mt-6 flex '>

                      <span className='md:text-white text-white flex justify-center items-center pr-1 md:flex md:justify-center md:items-center md:pr-1 '><GoClockFill /></span><p className='md:text-slate-400 text-slate-400 text-xs font-normal md:pr-2 md:text-sm md:font-normal pr-2'>Last updated:</p><p className='md:text-white text-white text-xs font-normal md:text-sm md:font-normal '>04/2022</p>
                    </div>
                </div>

      </div>
        {/* Background overlay ends */}
      {/* Background with transparent overlay ends */}

      </div>      
    </section>

{/* main content starts */}
    <section className='md:w-full w-full h-fit pb-20 bg-stone-50 md:h-fit md:pb-[5.62rem] md:bg-stone-50 px-4'>
      <div className='md:pt-24 pt-14 md:mx-[6.25rem] md:flex md:justify-center md:items-center'>
      <div >
        <h2 className='md:text-black md:text-5xl md:font-semibold md:text-center text-black text-xl font-semibold   text-center'>
            Overview
        </h2>

        <p className='md:text-black md:text-base md:font-light md:mt-14 text-black text-xs font-light  mt-6 text-center'>
        Lorem ipsum dolor sit amet consectetur. Tristique eget diam semper placerat. Tincidunt praesent lorem lectus at morbi in a habitasse. Odio turpis neque vitae suscipit vel vestibulum. Vitae egestas cras aliquam quis risus pulvinar tincidunt tincidunt dui. Velit nec egestas egestas enim velit cum turpis mattis. Sed sodales id in ac vestibulum. Elementum bibendum purus faucibus commodo arcu sit interdum donec duis. Scelerisque commodo urna risus arcu convallis lacus habitant eu. Arcu semper cursus scelerisque in purus lacus arcu.
        </p>
      </div>
      </div>

{/* parent container div */}
      <div className='md:pt-10 md:mx-[6.25rem] md:flex'>
  
   {/* container div 1 starts */}
        <div className='md:w-1/2 md:h-[225px] h-fit w-full mt-10 '>
          <h2 className=' md:text-slate-400 md:text-2xl md:font-medium text-slate-400 text-xl font-medium text-center mb-4'>
          Process and Approach
          </h2>
          
          <p className='md:mt-4 md:text-black md:text-start md:w-[33rem]  md:text-base md:font-light text-black text-xs font-light text-center md:pr-4 pr-0  '>
          Lorem ipsum dolor sit amet consectetur. Tristique eget diam semper placerat. Lorem ipsum dolor sit amet consectetur. Tristique eget diam semper placerat. Lorem ipsum dolor sit amet consectetur. Tristique eget diam semper placerat. Lorem ipsum dolor sit amet consectetur. Tristique eget diam semper placerat
          </p>
        </div>
   {/* container div 1 ends */}

    {/* container div 2 starts */}
        <div className='md:w-1/2 w-full mt-10'>
        <h2 className=' md:text-slate-400 md:text-2xl md:font-medium text-slate-400 text-xl font-medium text-center mb-4 '>
          Problems
        </h2>

          <p className='md:mt-4 mt-4  text-black text-sm font-normal '><span className='md:text-black md:text-xl  md:font-medium md:mt-4 text-cyan-950 text-sm font-medium '>Research Phase :</span>  Lorem ipsum dolor sit amet consectetur. Tristique eget diam semper placerat. </p>
          <p className='md:mt-6 mt-4 text-black text-sm font-normal'><span className='md:text-black md:text-xl md:font-medium text-cyan-950 text-sm font-medium '>Design Phase :</span> Lorem ipsum dolor sit amet consectetur. Tristique eget diam semper placerat. </p>
          <p className='md:mt-6 md:mb-14 mt-4 text-black text-sm font-normal' ><span className='md:text-black md:text-xl md:font-medium md:mt-6 text-cyan-950 text-sm font-medium '>Development Phase :</span> Lorem ipsum dolor sit amet consectetur. Tristique eget diam semper placerat. </p>

        </div>
    {/* container div 2 ends */}

      </div>
{/* parent container div ends */}


 {/* parent start */}
      <div className=' '>
        <h2 className='md:mt-14 md:text-center md:text-cyan-950 md:text-4xl md:font-medium mt-10 text-cyan-950 text-xl font-medium text-center'>Technologies used</h2>
        
{/* container start */}
        <div className='md:flex md:mx-[6.25rem]'>
          {/* sub container start 1 */}
          <div className=' md:w-1/2 w-full'>



          <div className=' md:mt-14 mt-6 '>
            <p className='md:text-black md:text-base md:font-normal text-black text-xs font-normal  '><span className='md:text-slate-400 md:text-xl md:font-medium text-slate-400 text-sm font-medium  '>Frontend :</span> Below are a list of frontend technologies used .</p>
            <ul className=''>
              <li className='md:pt-4 pt-4 md:text-black md:text-base md:font-normal text-black text-xs font-normal'>Tailwind Css</li>
              <li className='md:py-4 py-4 md:text-black md:text-base md:font-normal text-black text-xs font-normal' >Html</li>
              <li className='md:text-black md:text-base md:font-normal text-black text-xs font-normal'>Next js</li>
            </ul>
          </div>

          <div className='md:mt-8 mt-4'>
            <p className='md:text-black md:text-base md:font-normal text-black text-xs font-normal '><span className='md:text-slate-400 md:text-xl md:font-medium md:mt-8 text-slate-400 text-sm font-medium '>Frontend :</span> Below are a list of frontend technologies used .</p>
            <ul className='list-item'>
              <li className='md:pt-4 pt-4 md:text-black md:text-base md:font-normal text-black text-xs font-normal'>Tailwind Css</li>
              <li className='md:py-4 py-4 md:text-black md:text-base md:font-normal text-black text-xs font-normal' >Html</li>
              <li className='md:text-black md:text-base md:font-normal text-black text-xs font-normal' >Next js</li>
            </ul>
          </div>

          <div className='md:mt-8 mt-4'>
            <p className='md:text-black md:text-base md:font-normal text-black text-xs font-normal '><span className='md:text-slate-400 md:text-xl md:font-medium md:mt-8 text-slate-400 text-sm font-medium '>Frontend :</span> Below are a list of frontend technologies used .</p>
            <ul className=''>
              <li className='md:pt-4 pt-4 md:text-black md:text-base md:font-normal text-black text-xs font-normal'>Tailwind Css</li>
              <li className='md:py-4 py-4 md:text-black md:text-base md:font-normal text-black text-xs font-normal' >Html</li>
              <li className='md:text-black md:text-base md:font-normal text-black text-xs font-normal' >Next js</li>
            </ul>
          </div>

          
          </div>

          <div className='md:mt-14 mt-14 flex justify-center items-center md:flex md:justify-center md:items-center '>

{/* playback Section starts */}


  <div className={`md:bg-card bg-card md:bg-no-repeat bg-no-repeat md:bg-cover bg-cover w-80 h-56 rounded-lg md:w-[33rem] md:h-[23.3125rem] md:rounded-2xl` }>

    {/* Background with transparent overlay starts */}
    <div className="md:relative relative w-80 h-56 rounded-lg md:w-[33rem] md:h-[23.3125rem] md:rounded-2xl">
      
      {/* Background overlay starts */}
      <div className="md:absolute absolute inset-0 bg-cyan-950 md:inset-0 opacity-20 md:bg-cyan-950 rounded-2xl w-80 h-56 md:opacity-20 md:rounded-2xl md:w-[33rem] md:h-[23.3125rem] "></div>

      {/* Text content */}
      <div className="md:relative relative w-80 h-56 md:w-[33rem] md:h-[23.3125rem] flex justify-center items-center ">
          <span className=''>
          <FaPlay className='w-14 h-14 text-slate-400' />
          </span>
      </div>

    </div>
      {/* Background overlay ends */}
    {/* Background with transparent overlay ends */}

  </div>

{/* playback section ends */}
          </div>


        </div>
      </div>

    </section>
    {/* main content ends */}
    </main>
  )
}
