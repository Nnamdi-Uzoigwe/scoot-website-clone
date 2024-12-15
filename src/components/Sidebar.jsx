import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import Button from './Button';



function Sidebar({ isOpen, toggleSidebar }) {
  
  return (
    <div 
      className={`block md:hidden fixed top-0 left-0 h-full w-[70%] bg-footer text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-40`}
    >
    
      <div className="flex justify-start items-center bg-white mt-0 h-[96px] sm:h-[114px] px-8">
        <button className="text-3xl font-extrabold" onClick={toggleSidebar}><FaTimes className='text-4xl font-black text-mainYellow' /></button>
        <h2 className="text-3xl font-semibold ml-24 text-darkNavy"><Link smooth to="/">scoot</Link></h2>
      </div>
      

      <div className="mt-40 px-6">
        <div className=' p-4'>
            <Link smooth to="/" onClick={toggleSidebar} className="not-italic">Home</Link>
        </div>

        <div className='p-4'>
            <Link smooth to="/about" onClick={toggleSidebar} className="not-italic">About</Link>
        </div>

        <div className='p-4'>
            <Link smooth to="/careers" onClick={toggleSidebar} className='not-italic'>Careers</Link>
        </div>

        <div className=' p-4'>
            <Link smooth to="/locations" onClick={toggleSidebar} className='not-italic'>Locations</Link>
        </div>
        
      </div>

      <div className='w-full absolute bottom-5 left-0 px-8'>
                <button className="w-[100%] bg-mainYellow hover:bg-white hover:border-[2px]  border-mainYellow text-white hover:text-mainYellow text-medium py-2 px-6 cursor-pointer">Get Scootin</button>
      </div>
    </div>
  );
}

export default Sidebar;
