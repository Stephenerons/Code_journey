"use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import style from './app.module.css'
import { useRouter } from 'next/navigation'



export default function page() {

  const router =useRouter()
  const navigate = ()=>{
      router.push("/homepage")
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/homepage');
    }, 6000);

    return () => clearTimeout(timer);
  }, [router]);
  
  return (

    <main>

  {/* splash starts */}
    <div className='md:w-screen w-screen h-screen md:h-screen  bg-gradient-to-r from-slate-400 to-cyan-950 flex justify-center items-center md:flex md:justify-center md:items-center' >
   
   {/* transparent overlay starts */}
       <div className='md:w-[42.9375rem] w-full h-fit relative md:justify-center md:items-center md:relative '>
      {/* containing 3 colors behind transparent div */}
            <div className='mb-8 md:w-full w-full flex justify-center items-center md:flex md:justify-center md:items-center '>
              <div className='md:w-72 md:h-28 md:bg-slate-400 opacity-80 md:rounded-full w-28 h-11 bg-slate-400 bg-opacity-50 rounded-3xl '></div>
            </div>

            <div className='md:flex flex justify-center items-center gap-20 md:gap-[12.44rem] md:justify-center md:items-center '> 
              <div className='md:w-52 md:h-40 md:bg-black md:bg-opacity-40 md:rounded-full w-20 h-14 bg-black bg-opacity-40 rounded-3xl'></div>
              <div className='md:w-72 md:h-48 md:bg-white md:bg-opacity-40 md:rounded-full md:backdrop-blur-3xl w-28 h-20 bg-white bg-opacity-40 rounded-3xl backdrop-blur-xl'></div>
            </div>
       {/* containing 3 colors behind transparent div ends*/}
      
      </div>
   {/* transparent overlay ends*/}
      <div className='md:bg-white absolute bg-white h-[11.125rem] w-full bg-opacity-50 backdrop-blur-3xl flex justify-center items-center md:h-[400px] md:w-[859px] md:absolute md:bg-opacity-50 md:backdrop-blur-3xl md:flex md:justify-center md:items-center'> 
      <div className='md:relative relative hidden md:block'>
        <Image className={` opacity-0 ${style.visible}`} width={436} height={191} src='/logo.svg' alt='' ></Image>
      </div>

      <div className='md:relative relative md:hidden'>
        <Image className={` opacity-0 ${style.visible}`} width={222} height={100} src='/splash_mobile.svg' alt='' ></Image>
      </div>

      <div className='md:absolute absolute hidden md:block'>
        <Image className={`opacity-0 ${style.text}`}  width={722} height={115} src='/text.svg' alt='' ></Image>
      </div>

      <div className='md:absolute absolute md:hidden'>
        <Image className={`opacity-0 ${style.text}`}  width={328} height={68} src='/Bringing_visions_to_life_one_function_at_a_time_mobile.svg' alt='' ></Image>
      </div>


      </div> 

    </div>
{/* splash ends */}



    
    </main>
  )
}
