import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <main className='bg-stone-50 '>

    <div className=' md:bg-stone-50 bg-stone-50 h-full md:h-full md:max-w-7xl md:mx-auto'>

<div className='md:px-[6.25rem] md:flex flex md:flex-row md:justify-start md:items-start flex-col justify-center items-center'>


        {/* image start large screen*/}
        <div className='md:w-1/2 md:flex md:justify-center md:mt-[5.5rem] text-center '>
            {/* back */}
            <div className={`md:w-[27.25rem] md:h-[27.125rem] md:bg-black md:rounded-md md:relative mr-[4.12rem] md:shadow-about`}>

            </div>


            {/* front*/}
            <div className='md:absolute  md:w-[27.25rem] md:h-[27.125rem] md:rounded-md md:  '>
                <Image   src="/my_pic.jpg" width={768}  height={768} alt="My image" className='bg-no-repeat md:bg-cover md:w-[27.25rem] md:h-[27.125rem]' />

            </div>

        </div>
        {/* image ends large screen */}

        <div className='md:w-1/2 mx-4 text-center '>
            <div className='mt-8 '>
                <h2 className=' md:text-teal-300 md:text-3xl md:font-medium text-teal-300 text-xl font-medium '>About Me</h2>
                <p className='md:text-black md:text-base md:font-light md:mt-4 text-black text-xs font-light'>Hey there! I&apos;m Eromosele, a versatile full-stack developer with a knack for crafting seamless digital experiences from concept to execution. With a fusion of frontend finesse, backend wizardry, and a keen eye for product design, I thrive on translating ideas into intuitive, impactful solutions.</p>
            </div>

        {/* image start small screen */}
        <div className='md:hidden block'>
        <div className=' md:flex flex justify-center md:justify-center md:mt-[5.5rem] mt-10 text-center '>
            {/* back */}
            <div className={`md:w-[27.25rem] w-[17.80475rem] h-[17.6875rem]  md:h-[27.125rem] bg-neutral-400 rounded-md relative mr-[4.12rem] shadow-about md:bg-neutral-400 md:rounded-md md:relative md:mr-[4.12rem] md:shadow-about`}>

            </div>


            {/* front*/}
            <div className='md:absolute absolute md:bg-black bg-black w-[17.80475rem] h-[17.6875rem] rounded-md md:w-[27.25rem] md:h-[27.125rem] md:rounded-md md:  '>

            </div>

        </div>
        </div>
        {/* image ends small screen */}
            
            <div className=' md:mt-8 mt-8'>
                <h2 className=' md:text-zinc-900 md:text-3xl md:font-medium text-zinc-900 text-xl font-medium '>My Journey</h2>
                <p className='md:font-light md:text-black md:text-base md:mt-4 text-black text-xs font-light mt-4 '>My journey into the world of tech began with an insatiable curiosity for coding and design. Over the years, I&apos;ve honed my skills in both frontend and backend development while delving deep into the nuances of product design. Each step has been a leap towards creating holistic digital experiences.</p>
            </div>
            <div className=' md:mt-8 md:mb-[6.12rem] mt-8 mb-16'>
                <h2 className=' md:text-black md:text-3xl md:font-medium  text-black text-xl font-medium'>Let&apos;s Create Together</h2>
                <p className='md:font-light md:mt-4 text-black text-base font-light mt-4 '>Whether you&apos;re seeking a comprehensive solution spanning frontend development, backend infrastructure, or a captivating product design, I&apos;m eager to collaborate and bring innovative ideas to life. Let&apos;s embark on a journey to craft extraordinary digital experiences!</p>
            </div>
        </div>
        </div>
    </div>

    </main>
  )
}
