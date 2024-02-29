import React from 'react';
import style from './nav.module.css';

export default function Page() {
    return (
        <main className='md:w-screen md:h-screen md:bg-white'>
            <article className='md:relative md:overflow-hidden'>
                {/* card image start */}
                <div className={`md:absolute md:h-[25.8125rem] md:w-[21.5rem] md:bg-card md:bg-no-repeat md:bg-cover md:rounded-lg ${style.image}`}>
                </div>
                {/* card image stop */}

                {/* backdrop start */}
                <div className={`md:h-[25.8125rem] md:w-[21.5rem] bg-black relative opacity-70 translate-y-full ${style.backdrop}`}>
                </div>
                {/* backdrop stop */}

                {/* main card content starts */}
                <div className='md:absolute md:inset-0 transform translate-y-full'>
                    <div className='md:pt-14 md:w-[21.5rem]'>
                        <h2 className='md:text-white md:text-2xl md:font-semibold md:mb-6 md:w-[21.5rem] md:text-center'>
                            Project 1
                        </h2>
                    </div>

                    <div className='md:w-[21.5rem]'>
                        <p className='md:text-slate-400 md:text-base md:font-normal md:mb-8 md:w-[21.5rem] md:text-center'>
                            Lorem ipsum dolor amet sit
                        </p>
                    </div>

                    <div className='md:w-[21rem]'>
                        <p className='md:text-white md:text-sm md:font-normal md:w-[21.5rem] px-3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia a placeat nihil aliquid
                            quam voluptates harum? Maxime hic tempore facere, ipsum, iure, enim doloremque et eum ea
                            ad incidunt doloribus vel animi inventore vero. Officia laboriosam quaerat qui officiis
                            esse.
                        </p>
                    </div>

                    <div className='md:mb-10 md:flex md:ml-4 md:mt-[1.62rem] md:gap-2'>
                        <div
                            className='md:w-fit md:h-6 md:p-1 md:bg-white md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
                            <p className=' md:text-sm md:font-normal md:text-black md:text-center '>
                                Web
                            </p>
                        </div>

                        <div
                            className='md:w-fit md:h-6 md:p-1 md:bg-white md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5 '>
                            <p className='md:text-black md:text-sm md:font-normal md:text-center '>
                                Design
                            </p>
                        </div>

                        <div
                            className='md:w-fit md:h-6 md:p-1 md:bg-white md:rounded-md md:flex md:justify-center md:items-center md:gap-2.5'>
                            <p className='md:text-black md:text-sm md:font-normal md:text-center'>
                                Development
                            </p>
                        </div>
                    </div>
                    {/* main card content ends  */}
                </div>
            </article>
        </main>
    );
}