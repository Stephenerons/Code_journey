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
 
  const state = (e) => {
    e !== active ? setActive(e) : null;
  } 


  



  return (
    <>
    {/* navigation bar starts here  */}

    <nav className='relative z-50 '> 
      <div className='z-30 md:w-full md:h-[4.1875rem] md:black md:flex md:justify-between  md:px-[2.5rem] md:items-center relative w-full bg-black h-[4.1875rem] flex justify-between items-center '>

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

          <Link href='../homepage' title='home' >
          <li className=' md:text-center md:text-white md:text-xl md:font-medium md:hover:text-slate-400 transition-colors duration-300 focus:text-slate-400  '  >Home</li>
          </Link>


          <Link href='../all_projects' title='projects' >
          <li className= 'md:text-center md:text-white md:text-xl md:font-medium md:hover:text-slate-400 transition-colors duration-300 focus:text-slate-400  ' >Projects</li>
          </Link>

          <Link href='../about_me' title='About' >
          <li className= 'md:text-center md:text-white md:text-xl md:font-medium md:hover:text-slate-400 transition-colors duration-300 focus:text-slate-400  ' >About</li>
          </Link>

          
          <Link href='../contact_me' title='Contact' >
          <li className= 'md:text-center md:text-white md:text-xl md:font-medium md:hover:text-slate-400 transition-colors duration-300 ' >Contact</li>
           </Link>
        </ul>

        <figure className='hidden md:block'>
          <Image src='/code_journey 1.svg' width={54} height={57} alt='' />
        </figure>
      </div>
      {/* major large screen styling ends here  */}
              
      </div>
 
       {/* hamburger styling and nav links for small screens starts here  */}
      <ul className= {toggle ? ' z-30 fixed -top-full flex flex-col justify-center items-center h-screen text-white w-full bg-gradient-to-b from-neutral-700 to-black gap-14 transition-all duration-[1000ms]' : 'fixed top-0 flex flex-col justify-center items-center h-screen text-white w-full bg-gradient-to-b from-neutral-700 to-black gap-14 -z-10 transition-all duration-[1000ms]'}>


        <Link href='./homepage'>
        <li onClick= { () => state('home')} className={active === 'home' ? 'text-slate-400 text-4xl font-medium' : 'text-white text-2xl font-medium'}>Home</li>
        </Link>

        <Link  href='./all_projects'>
        <li onClick= { () => state('project')} className={active === 'project' ? 'text-slate-400 text-4xl font-medium ' : 'text-white text-2xl font-medium'}>Projects</li>
        </Link>

        <Link  href='./about_me'>
        <li onClick= { () => state('about')} className={active === 'about' ? 'text-slate-400 text-4xl font-medium' : ' text-white text-2xl font-medium '}>About</li>
        </Link>

        <Link   href='./contact_me'>
        <li onClick = { () => state('contact')} className={active === 'contact' ? 'text-slate-400 text-4xl font-medium ' : ' text-white text-2xl font-medium '}>Contact</li>
        </Link>

      </ul>
      {/* hamburger styling and nav links ends here  */}


    </nav>
    {/* navigation bar ends here  */}


    </>
  )
}
