"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';


export default function Test() {
  const [toggle, setToggle] = useState(true);

  const [active, setActive] = useState('home')

  const change = () => {
    setToggle(prevtoggle => !prevtoggle)

  }
  



  return (
    <>
    {/* navigation bar starts here  */}

    <nav > 
      <div className='md:w-full md:h-[4.1875rem] md:black md:flex md:justify-between  md:px-[2.5rem] md:items-center relative w-full bg-black h-[4.1875rem] flex justify-between items-center'>

       {/* logo starts */}
      <div className=' md:hidden px-4'>
        <figure><Image src='/code_journey 1.svg' width={54} height={57.016} alt='' /></figure>
        </div>
        {/* logo ends */}


        {/* hamburger button starts  */}
      <button onClick={change} className='md:hidden text-white relative pr-4'>
        <span className='text-[1.75rem]'>
          { toggle ? <RxHamburgerMenu/> : <IoMdClose/> }
        </span>
      </button>
      {/* hamburger button ends */}


      {/* major large screen styling starts here  */}
      
      <div className='hidden md:flex md:w-full md:justify-between items-center'>
        <ul className='md:flex gap-6'>
        <div>
          <li className='md:text-center md:text-white md:text-xl md:font-medium '>Home</li>     
          </div>
          <div className=' w-14 h-0 bg-white '>1</div>
          <div className=' w-0 h-4 bg-white'>2</div>
          <div className=' w-0 h-4 bg-white'>3</div>
          <div className=' w-0 h-4 bg-white'>4</div>   

          
          <li className='md:text-center md:text-white md:text-xl md:font-medium '>Projects</li>


          <li className='md:text-center md:text-white md:text-xl md:font-medium '>About</li>


          <li className='md:text-center md:text-white md:text-xl md:font-medium '>Contact</li>
        </ul>

        <figure className='hidden md:block'>
          <Image src='/code_journey 1.svg' width={54} height={57} alt='' />
        </figure>
      </div>
      {/* major large screen styling ends here  */}
              
      </div>
 
       {/* hamburger styling and nav links starts here  */}
      <ul className= {toggle ? 'fixed -top-full -z-10  flex flex-col justify-center items-center h-screen text-white w-full   bg-gradient-to-b from-neutral-700 to-black gap-14 transition-all duration-[1000ms]' : 'fixed top-0 flex flex-col justify-center items-center h-screen text-white w-full   bg-gradient-to-b from-neutral-700 to-black gap-14 -z-10 transition-all duration-[1000ms]'}>


        <Link href='./'>
        <li className='text-2xl font-medium hover:text-slate-400 hover:text-4xl hover:font-medium '>Home</li>
        </Link>

        <Link  href='./all_projects'>
        <li className='text-2xl font-medium hover:text-slate-400 hover:text-4xl hover:font-medium '>Projects</li>
        </Link>

        <Link  href='./about_me'>
        <li className='text-2xl font-medium hover:text-slate-400 hover:text-4xl hover:font-medium '>About</li>
        </Link>

        <Link   href='./contact_me'>
        <li className='text-2xl font-medium hover:text-slate-400 hover:text-4xl hover:font-medium '>Contact</li>
        </Link>

      </ul>
      {/* hamburger styling and nav links ends here  */}


    </nav>
    {/* navigation bar ends here  */}


    <div className='bg-slate-500 h-20 w-fit py-4 flex  gap-3 px-4' >

      <p>2</p>
      <p>3</p>
      <p>4</p>
    </div>


    </>
  )
}
