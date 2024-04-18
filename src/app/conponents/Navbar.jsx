"use client"
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Test() {
  const [toggle, setToggle] = useState(true);

  const [active, setActive] = useState('')

  const router = useRouter()
  useEffect(() => {

    setActive(router.pathname);
  }, [router.pathname]);

  const change = () => {
    setToggle(prevtoggle => !prevtoggle);
  };

  const state = (e) => {
    setActive(e);
  };


  console.log(active)



  return (
    <div className='bg-black text-white z-50 top-0 sticky w-full'>
    {/* navigation bar starts here  */}

    <nav className='relative z-50 md:z-20 max-w-7xl mx-auto '> 
      <div className='z-50 md:w-full md:h-[4.1875rem] md:black md:flex md:justify-between  md:px-[2.5rem] md:items-center relative w-full max-w-7xl h-[4.1875rem] flex justify-between items-center '>

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
      <div className='hidden md:block md:w-full'>
      <div className=' md:flex md:w-full md:justify-between items-center'>
        <ul className='md:flex gap-6'>
          

          <Link href='/homepage' title='home' >
          <li className=' md:text-center md:text-white md:text-xl md:font-medium md:hover:text-slate-400 transition-colors duration-300 focus:text-slate-400  '  >Home</li>
          </Link>

          <Link href='/all_projects' title='projects' >
          <li className= 'md:text-center md:text-white md:text-xl md:font-medium md:hover:text-slate-400 transition-colors duration-300 focus:text-slate-400  ' >Projects</li>
          </Link>

          <Link href='/about_me' title='About' >
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
      </div>
      {/* major large screen styling ends here  */}
              
      </div>
 
       {/* hamburger styling and nav links for small screens starts here  */}
       <div className='md:hidden sm:block'>
      <ul className= {toggle ? ' z-30 fixed -top-full flex flex-col justify-center items-center h-screen text-white w-full bg-gradient-to-b from-neutral-700 to-black gap-14 transition-all duration-[1000ms]' : 'fixed top-0 flex flex-col justify-center items-center h-screen text-white w-full bg-gradient-to-b from-neutral-700 to-black gap-14 -z-10 transition-all duration-[1000ms]'}>


        <Link href='./homepage'>
        <li onClick= { () => state('home')} className={active === '/homepage' ? 'text-slate-400 text-4xl font-medium' : 'text-white text-2xl font-medium'}>Home</li>
        </Link>

        <Link  href='./all_projects'>
        <li onClick= { () => state('project')} className={active === '/all_projects' ? 'text-slate-400 text-4xl font-medium ' : 'text-white text-2xl font-medium'}>Projects</li>
        </Link>

        <Link  href='./about_me'>
        <li onClick= { () => state('about')} className={active === '/about_me' ? 'text-slate-400 text-4xl font-medium' : ' text-white text-2xl font-medium '}>About</li>
        </Link>

        <Link   href='./contact_me'>
        <li onClick = { () => state('contact')} className={active === '/contact_me' ? 'text-slate-400 text-4xl font-medium ' : ' text-white text-2xl font-medium '}>Contact</li>
        </Link>

      </ul>
      {/* hamburger styling and nav links ends here  */}
       </div>


    </nav>
    {/* navigation bar ends here  */}


    </div>
  )
}
