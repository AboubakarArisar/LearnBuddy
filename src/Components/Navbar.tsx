import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className='w-full sticky bg-white top-0 z-50 h-[15vh] shadow-md flex p-12 items-center'>
      <nav className='w-full h-full flex justify-center items-center'>
        <div className='flex justify-between items-center w-full'>
          <div>
            <img
              src='/logo.svg'
              className='w-24 cursor-pointer'
              onClick={() => navigate("/")}
              alt='Logo'
            />
          </div>
          <div>
            <div className='flex gap-2'>
              <Button
                text='Login'
                className='bg-blue-300 hover:bg-blue-500 text-black p-2 outline-none rounded w-20'
                onClick={handleLoginClick}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
