import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="h-auto">
            <div className="flex flex-col lg:flex-row pt-24 pb-32 px-10 lg:px-36 bg-darkNavy justify-between items-center relative overflow-hidden">
                <h2 className="text-3xl md:text-4xl text-white font-semibold z-10 text-center lg:text-left mb-8 lg:mb-0">Sign up and <br />Scoot off today</h2>

                <div className="flex justify-center gap-6">
                    <img src="/appstore.png" alt="" className="z-10 w-[40%] md:[w-80%] lg:w-[100%]" />
                    <img src="/googlePlay.png" alt="" className="z-10 w-[40%] md;w-[80%] lg:w-[100%]" />
                </div>
                {/* Absolutes */}
                <div className="w-[347px] h-[347px] bg-darkNavy border-[10px] opacity-20 absolute border-dimgrey bottom-[-180px] left-[330px] rounded-[50%]"></div>
                
                <div className="w-[347px] h-[347px] bg-darkNavy border-[10px] opacity-20 absolute border-dimgrey bottom-[-180px] right-[400px] rounded-[50%]"></div>
                
                <div className="w-[347px] h-[347px] bg-dimgrey border-[10px] opacity-20 absolute border-dimgrey bottom-[-180px] right-[-160px] rounded-[50%]"></div>
            </div>

            <div className="px-10 lg:px-36 bg-footer py-8 flex flex-col md:flex-row items-center justify-between z-20">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div>
                        <Link to="/"><h2 className="text-3xl font-semibold text-white">scoot</h2></Link>
                    </div>
                    <div className="links text-lg text-dimgrey flex flex-col md:flex-row items-center gap-8">
                        <Link to="/" className="hover:text-mainYellow">Home</Link>
                        <Link to="/about" className="hover:text-mainYellow">About</Link>
                        <Link to="/careers" className="hover:text-mainYellow">Careers</Link>
                        <Link to="locations" className="hover:text-mainYellow">Locations</Link>
                    </div>
                </div>

                <div className="socials mt-14 md:mt-0 flex gap-6">
                    <FaFacebookSquare className="cursor-pointer text-mainYellow hover:text-lightGrey text-2xl" />
                    <FaTwitter className="cursor-pointer text-mainYellow hover:text-lightGrey text-2xl" />
                    <FaInstagram className="cursor-pointer text-mainYellow hover:text-lightGrey text-2xl" />
                </div>
            </div>
        </div>
    )
}

export default Footer