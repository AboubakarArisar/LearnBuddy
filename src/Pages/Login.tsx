import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { RiLockPasswordFill, RiMailFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCreateAccountClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='p-8 w-[50%] bg-white rounded-lg shadow-lg'>
        <div className='flex flex-col justify-center items-center'>
          <img src='/logo.svg' alt='Logo' className='w-14 h-14 mb-4' />
          <h1 className='text-center text-xl text-black font-bold'>Sign In</h1>
          <form className='flex flex-col w-full gap-4 mt-4'>
            <div className='relative'>
              <div className='flex items-center bg-gray-300 rounded'>
                <RiMailFill className='absolute left-2 text-gray-500' />
                <input
                  type='email'
                  className='w-full p-2 pl-10 bg-transparent outline-none h-12 rounded'
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='relative'>
              <div className='flex items-center bg-gray-300 rounded'>
                <RiLockPasswordFill className='absolute left-2 text-gray-500' />
                <input
                  type={showPassword ? "text" : "password"}
                  className='w-full p-2 pl-10 bg-transparent outline-none h-12 rounded'
                  placeholder='Password'
                />
                <div
                  className='absolute right-2 cursor-pointer'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-gray-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 17v1m0-8V7'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-gray-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 4v.01M8 8l4 4 4-4M8 16h8'
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <Button
              className='w-full h-12 rounded bg-orange-400 hover:bg-orange-500 text-white font-semibold shadow-lg hover:shadow-xl duration-300 ease-in-out'
              text='Login'
              onClick={handleLoginClick}
            />
            <Link
              to='/login'
              className='text-center text-gray-500 hover:text-orange-800'
            >
              Forgot your password?
            </Link>
            <Button
              className='w-full h-12 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out mt-2'
              text='Create New Account'
              onClick={handleCreateAccountClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
