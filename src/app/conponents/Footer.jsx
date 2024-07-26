import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer>
    {/* parent div start */}

{/*large screen parent div starts */}
    <div className='md:w-full w-full h-fit md:h-fit py-6 md:py-8 md:bg-black  hidden md:block'>
      <div className=' md:max-w-7xl mx-auto'>
      {/* first sub parent start */}

      <div className='md:flex md:justify-between md:items-center md:mx-[6.25rem] mx-4 md:mb-10 '>
         <Link href='../homepage'>
            <div>
                <Image width={54} height={57} src="/code_journey 1.svg" alt=''/>
            </div>
         </Link>

            <ul className='md:flex md:gap-10'>
              <Link href='../all_project'>
                <li className='md:text-slate-400 md:text-xs md:font-normal  md:w-fit w-20 text-center text-teal-300 text-xs font-normal'>Explore Projects</li>
                </Link>

                <Link href=''>
                <li className='md:text-slate-400 md:text-xs md:font-normal'>Get inspired</li>
                </Link>

                <Link href=''>
                <li className='md:text-slate-400 md:text-xs md:font-normal'>Connect with us</li>
                </Link>

                <Link href='../contact'>
                <li className='md:text-slate-400 md:text-xs md:font-normal'>Contact us</li>
                </Link>
            </ul>

{/* icons start*/}

            <div className='md:flex md:gap-[1.06rem]'>
              
            <Link target='_blank' href='https://github.com/Stephenerons'>
          <div>
          <FaGithub className='md:w-4 md:h-4 text-white' />
          </div>
          </Link>

          <Link target='_blank' href='google.com'>
          <div><FcGoogle className='md:w-4 md:h-4' />
          </div>
          </Link>

          <Link target='_blank' href='https://www.linkedin.com/in/momoh-eromosele/'>
          <div>
          <BsLinkedin className='md:w-4 md:h-4 rounded-sm bg-sky-600 ' />
          </div>
          </Link>

              
            </div>
            {/* icons end */}

             </div>
            {/* first sub parent ends */}

            {/* second sub parent starts */}
            <div className='md:border md:border-white md:mb-10 md:mx-[6.25rem]'>
            </div>
            {/* second sub parent ends */}


            {/* Third sub parent starts */}
            <div className='md:flex md:justify-center md:items-center md:gap-8'>
              <div>
                <p className='text-center text-white text-xs font-normal'>
                &#169; 2023  Codejourney All rights reserved
                </p>
              </div>

              <div>
                <p className='text-center text-white text-xs font-normal'>
                Privacy Policy
                </p>

              </div>


              <div>
                <p className='text-center text-white text-xs font-normal'>
                  Terms and conditions 
                </p>
              </div>

              <div>
                <p className='text-center text-white text-xs font-normal'>
                  Cookies preferences 
                </p>
              </div>
            </div>
            {/* Third sub parent ends */}

      </div>




    </div>
{/*large screen parent div ends */}





{/*small screen parent div starts */}
<div className='md:w-full w-full h-fit md:h-fit py-6 md:py-8 md:bg-black bg-black  md:hidden '>

{/* first sub parent start */}
<div className=''>
<div className='md:flex md:justify-between md:items-center md:mx-[6.25rem] mx-4 md:mb-10 flex justify-between items-center'>
   <Link href='../homepage'>
      <div>
          <Image width={54} height={57} src="/code_journey 1.svg" alt=""/>
      </div>
   </Link>



{/* icons start*/}
      <div className='md:flex md:gap-[1.06rem] flex gap-5'>
        
        <Link target='_blank' href='https://github.com/Stephenerons'>
          <div>
          <FaGithub className='md:w-4 md:h-4 text-white' />
          </div>
          </Link>

          <Link target='_blank' href='google.com'>
          <div><FcGoogle className='md:w-4 md:h-4' />
          </div>
          </Link>

          <Link target='_blank' href='https://www.linkedin.com/in/momoh-eromosele/'>
          <div>
          <BsLinkedin className='md:w-4 md:h-4 rounded-sm bg-sky-600 ' />
          </div>
          </Link>

        
      </div>
      {/* icons end */}
    </div>

      {/* nav links starts */}
      <nav className='flex justify-center items-center mt-4'>
      <ul className='md:flex md:gap-10 flex gap-6'>
        <Link href='../all_project'>
          <li className='md:text-slate-400 md:text-xs md:font-normal w-20 text-center text-teal-300 text-xs font-normal'>Explore Projects</li>
          </Link>

          <Link href=''>
          <li className='md:text-slate-400 md:text-xs md:font-normal w-14 text-center text-teal-300 text-xs font-normal'>Get inspired</li>
          </Link>

          <Link href=''>
          <li className='md:text-slate-400 md:text-xs md:font-normal w-20 text-center text-teal-300 text-xs font-normal'>Connect with us</li>
          </Link>

          <Link href='../contact'>
          <li className='md:text-slate-400 md:text-xs md:font-normal w-12 text-center text-teal-300 text-xs font-normal'>Contact us</li>
          </Link>
      </ul>
      </nav>
      {/* nav links ends */}

       </div>
      {/* first sub parent ends */}


      {/* second sub parent starts */}
      <div className='md:border md:border-white md:mb-10 md:mx-[6.25rem]'>
      </div>
      {/* second sub parent ends */}


      {/* Third sub parent starts */}
      <div className='md:flex md:justify-center md:items-center md:gap-8 flex justify-center items-center my-1.5'>
        <div>
          <p className='text-center text-white text-xs font-normal'>
          &#169; 2023  Codejourney All rights reserved.
          </p>
        </div>

      </div>
      {/* Third sub parent ends */}




</div>

{/*large screen parent div starts */}

</footer>
  )
}
