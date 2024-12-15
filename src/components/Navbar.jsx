import { Link } from "react-router-dom"
import Button from "./Button"
import { useState } from "react";
import Sidebar from "./Sidebar";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex items-center px-10 lg:px-36 justify-between h-[96px]">
            <div className="flex items-center gap-10 lg:gap-20">
            
                {
                    isOpen ? (
                        <button className="text-3xl font-extrabold" onClick={toggleSidebar}><FaTimes className='text-4xl font-black text-mainYellow' /></button>
                    ) : (

                        <GiHamburgerMenu className="cursor-pointer block md:hidden text-4xl text-mainYellow" onClick={toggleSidebar} />
                    )
                }

                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

                <div className="ml-2 md:ml-0">
                    <Link to="/"><h2 className="text-3xl font-semibold text-darkNavy">scoot</h2></Link>
                </div>
                
                <div className="hidden links text-base lg:text-lg md:flex items-center gap-8 md:gap-4 lg:gap-8">
                    <Link to="/" className="hover:text-mainYellow">Home</Link>
                    <Link to="/about" className="hover:text-mainYellow">About</Link>
                    <Link to="/careers" className="hover:text-mainYellow">Careers</Link>
                    <Link to="locations" className="hover:text-mainYellow">Locations</Link>
                </div>
            </div>

            <div className="hidden md:block">
                <Button>Get Scootin</Button>
            </div>
        </div>
    )
}

export default Navbar