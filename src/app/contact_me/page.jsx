import React from 'react'
import { LiaUserTagSolid } from "react-icons/lia";
import { BsChatTextFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";

export default function Contact() {
  return (
    <main className='md:max-w-7xl md:mx-auto'>

    {/* parent container */}
    <div className='py-16 md:flex md:justify-center md:items-center flex justify-center items-center mx-4 md:h-screen h-fit'>
    {/* main container starts  */}
    <div className={`md:w-[46.1875rem] md:h-fit md:shadow-contact md:rounded-lg md:bg-slate-400 md:pb-4 pb-10 w-80 h-fit bg-slate-400 rounded-lg`}>


    <h2 className='md:text-center md:text-white md:text-4xl md:font-medium md:pt-8 text-center text-white text-xl font-medium pt-8'>
        Contact
    </h2>
    
    <form className='md:mx-[3.75rem] mx-4 pt-8 md:pt-8' action="">
{/* input 1 */}
        <div className=' md:flex md:flex-col flex flex-col md:gap-0 gap-1 mb-1 ' >
        <div className='md:flex md:items-center md:gap-[0.62rem] gap-3 md:mb-[0.75rem] flex items-center  '>

            <span className='md:w-4 w-fit h-fit md:h-4 md:text-teal-300 text-teal-300'><LiaUserTagSolid />
            </span>


            <label htmlFor="" className=' md:text-white md:text-base md:font-medium text-center text-white text-xs font-medium'>Your Name
            </label>

        </div>
            <input className='md:w-[38.6875rem] md:h-12 md:pl-[0.62rem] md:text-neutral-400 md:text-sm md:font-medium md:rounded-md w-full h-6 px-1 py-2 bg-white rounded justify-start items-center gap-2.5 mt-1 ' type="text" placeholder='Enter name' name="" id="" />
        </div>

{/* input 2 */}

<div className=' md:flex md:flex-col flex flex-col md:gap-0 gap-1 mt-4 ' >
        <div className='md:flex md:items-center md:gap-[0.62rem] gap-3 md:mb-[0.75rem] mb-1 flex items-center '>

            <span className='md:w-4 w-fit h-fit md:h-4 md:text-teal-300 text-teal-300'><BsChatTextFill />
            </span>


            <label htmlFor="" className=' md:text-white md:text-base md:font-medium text-center text-white text-xs font-medium'>Your Email
            </label>

        </div>
            <input className='md:w-[38.6875rem] md:h-12 md:pl-[0.62rem] md:text-neutral-400 md:text-sm md:font-medium md:rounded-md w-full h-6 px-1 py-2 bg-white rounded justify-start items-center gap-2.5 ' type="text" placeholder='Enter email' name="" id="" />
        </div>


{/* input 3 */}
        <div className='md:mt-8 mt-4'>
        <div className='md:flex md:items-center md:gap-[0.62rem] gap-[0.62rem] md:mb-[0.75rem] flex items-center mb-3'> 
            <span className='md:w-4 w-4 h-4 md:h-4 md:text-teal-300 text-teal-300 '><FaMessage /></span><label htmlFor="" className=' md:text-white text-white  text-xs font-medium md:text-base md:font-medium'>Message</label>
        </div>
            <input className='w-72 h-20 px-1 py-2 bg-white rounded justify-start items-center gap-2.5  md:w-[38.6875rem] md:h-24 md:pl-[0.62rem] md:text-black md:text-sm md:font-medium md:rounded-md text-[#1b1b1b] ' type="text" placeholder='Input Message' name="" id="" />
        </div>

        <button className='md:w-24 md:h-10 md:p-2.5 md:bg-teal-300 md:rounded-lg md:flex md:justify-center md:items-center w-20 h-9 px-6 py-2.5 bg-teal-300 rounded justify-center items-center gap-2.5 mt-8'>
            <p className='md:text-center md:text-white md:text-base md:font-normal text-center text-white text-xs font-normal '>Send</p>
        </button>

    </form>
        
    </div>
{/* main container ends  */}

    </div>
    </main>
  )
}
