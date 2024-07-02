import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className=' bg-slate-900 flex flex-col justify-center items-center   bottom-0 z-10 sm:min-h-[40vh]  w-full p-12 gap-8  sm:p-8'>
        <div className=' grid grid-cols-1 gap-12 sm:gap-0 sm:grid-cols-3 sm:place-items-center w-full '>
          <div className='flex flex-col gap-4'>
            <img src='/logo.svg' alt='' className='w-12 h-12' />
            <p className='text-white'>
              Sukkur, <span className='text-yellow-500'>Pakistan</span>
            </p>
            <p className='text-white'>
              Email:{" "}
              <span className='text-yellow-500'>info@learnBuddy.com</span>
            </p>
            <p className='text-white'>
              Phone <span className='text-yellow-500'>+923483624912</span>
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-white'>Menu</h1>
            <Link className='text-white text-base  duration-200' to='/'>
              Our Team
            </Link>
            <Link className='text-white text-base  duration-200' to='/'>
              About us
            </Link>
            <Link className='text-white text-base duration-200' to='/'>
              Blog
            </Link>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-white'>Contact Support</h1>
            <Link className='text-white text-base  duration-200' to='/'>
              Contact us
            </Link>
            <Link className='text-white text-base  duration-200' to='/'>
              Privacy & Policy
            </Link>
            <Link className='text-white text-base  duration-200' to='/'>
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className='w-[90%] border-t-2 border-gray-600 p-6 flex flex-col sm:flex-row gap-5  justify-between items-center'>
          <p className='text-white text-center'>
            &copy; 2024 LearnBuddy. All Rights Reserved.
          </p>
          <div className='text-white text-xl sm:text-2xl flex gap-4'>
            <FaFacebook className='cursor-pointer' />
            <IoLogoInstagram className='cursor-pointer' />
            <IoLogoYoutube className='cursor-pointer' />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
