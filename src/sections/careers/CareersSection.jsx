import Button from "../../components/Button"
import ArrowLeft from "../../components/ArrowLeft"
import careers from "../../careers"
import Jumbotron from "../../components/Jumbotron"

export default function CareersSection() {
    return (
        <div>
            {/* Mission */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-10 lg:px-36 mt-24 lg:mt-40 relative overflow-x-hidden">
                    <div className="content z-20">
                        <h2 className="mt-14 lg:mt-0 text-center lg:text-left text-3xl md:text-5xl font-semibold text-darkNavy">Care to join our <br />mission?</h2>
                        <p className=" font-Lexend text-dimgrey text-center lg:text-left mt-8 mb-10 w-[100%] lg:w-[60%]">
                            We're always looking for ambitious individuals to help us on our journey.
                            If you're passionate about our mission to provide clean, accessible 
                            transport to improve urban living we want to hear from you!
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <Button>Say Hello</Button>
                        </div>
                    </div>
                    
                    <img src="/missionImg.png" alt="" className="h-[345px] md:h-[445px] w-[370px] md:w-[445px] lg:w-[800px] rounded-[50%] object-cover" />

                <div className="absolute z-30 right-[-400px] md:right-[-5px] top-[200px] md:top-[280px]">
                    <ArrowLeft />
                </div>

                <div className="bg-lightGrey hidden md:block h-[445px] w-[445px] absolute right-[-360px] z-10 rounded-[50%]"></div>      
            </div>

            {/* Why join us */}
            <div className="mt-24 lg:mt-36 mb-24">
                <h3 className="text-3xl md:text-5xl font-semibold text-darkNavy text-center">Why join us?</h3>

                {/* grid container */}
                <div className="mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-10 lg:px-36">
                    {/* Card */}
                    <div className="card flex flex-col items-center">
                        <div className="relative flex flex-col mb-20">
                            <img src="/techImg.png" alt="" className="w-[240px]" />
                            <div 
                                className="absolute bottom-[-48px] left-[70px] bg-mainYellow w-[96px] h-[96px] text-darkNavy rounded-[50%] flex justify-center items-center font-semibold text-3xl"
                            >
                                01
                            </div>
                        </div>

                        <h3 className="text-3xl font-semibold text-darkNavy mb-4">Our tech</h3>
                        <p className="w-[80%] text-center font-Lexend text-dimgrey leading-8">
                            We're using cutting edge technology to drive accessible urban transportation forward.
                            Our fully electric scooters are a joy to ride!
                        </p>

                    </div>
                    {/* Card */}
                    <div className="card flex flex-col items-center mt-10 lg:mt-0">
                        <div className="relative flex flex-col mb-20">
                            <img src="/techImg.png" alt="" className="w-[240px]" />
                            <div 
                                className="absolute bottom-[-48px] left-[70px] bg-mainYellow w-[96px] h-[96px] text-darkNavy rounded-[50%] flex justify-center items-center font-semibold text-3xl"
                            >
                                02
                            </div>
                        </div>

                        <h3 className="text-3xl font-semibold text-darkNavy mb-4">Our integrity</h3>
                        <p className="w-[80%] text-center font-Lexend text-dimgrey leading-8">
                            We are fully committed to deliver a great yet safe, 
                            sustainable micro-mobility experience in every city we serve.
                        </p>

                    </div>
                    {/* Card */}
                    <div className="card flex flex-col items-center mt-10 xl:mt-0 lg:col-span-2 xl:col-span-1 lg:place-self-center">
                        <div className="relative flex flex-col mb-20">
                            <img src="/techImg.png" alt="" className="w-[240px]" />
                            <div 
                                className="absolute bottom-[-48px] left-[70px] bg-mainYellow w-[96px] h-[96px] text-darkNavy rounded-[50%] flex justify-center items-center font-semibold text-3xl"
                            >
                                03
                            </div>
                        </div>

                        <h3 className="text-3xl font-semibold text-darkNavy mb-4">Our community</h3>
                        <p className="w-[80%] text-center font-Lexend text-dimgrey leading-8">
                            We support every community we serve. All workers are paid a living wage 
                            based on their location and are Scoot employees.
                        </p>

                    </div>

                </div>
            </div>

            {/* Careers */}
            <div className="flex flex-col items-center mb-24">
                {careers.map((item) => (
                    <div key={item.id} className="mb-8">
                        <Jumbotron 
                            role={item.role}
                            location={item.location}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}