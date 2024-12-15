import ArrowLeft from "../../components/ArrowLeft"
import Accordion from "../../components/Accordion"
import data from "../../faq"


export default function AboutSection() {
    return (
        <div className="h-auto mt-20 xl:mt-40">
            {/* Mobility */}
            <div className="flex flex-col-reverse xl:flex-row items-center justify-between px-10 lg:px-20 xl:px-36 mt-24 lg:mt-36 relative overflow-x-hidden">
                    <div className="content">
                        <h2 className="mt-14 xl:mt-0 text-3xl md:text-5xl font-semibold text-darkNavy text-center xl:text-left">Mobility for the <br />digital era</h2>
                        <p className="font-Lexend text-dimgrey mt-8 mb-10 w-[100%] xl:w-[60%] text-center xl:text-left">
                            Getting around should be simple (and even fun!) for everyone.
                            We embrace technology to provide low cost, smart access to 
                            scooters at your fingertips.
                        </p>
                    </div>

                    <img src="/mobilityImg.png" alt="" className="h-[345px] md:h-[445px] w-[445px] rounded-[50%] object-cover" />

                <div className="absolute z-30 right-[-330px] md:right-[-5px] top-[200px]">
                    <ArrowLeft />
                </div>

                <div className="bg-lightGrey hidden md:block h-[445px] w-[445px] absolute right-[-360px] top-0 rounded-[50%]"></div>      
            </div>

            {/* Better Urban Living */}
            <div className="mt-24 xl:mt-40 px-10 lg:px-20 xl:px-36 flex flex-col xl:flex-row justify-between items-center w-full relative">
  
                <img src="/urbanImg.png" alt="" />

                
                <div className="content flex flex-col items-center xl:items-start w-[100%] xl:max-w-[50%]">
                    <h2 className="mt-14 xl:mt-0 text-3xl md:text-5xl font-semibold text-darkNavy text-center xl:text-left">Better urban<br />living</h2>
                    <p className="font-Lexend text-center xl:text-left text-dimgrey mt-8 mb-10 w-[100%] xl:w-[80%]">
                        We're helping connect cities and bring people closer together. 
                        Our scooters are also fully-electric and we offset the minimal 
                        carbon footprint for each ride.
                    </p>
                </div>

                <img src="/arrowRight.png" alt="" className="absolute top-0 left-[-120px]" />
                <div className="bg-lightGrey hidden md:block h-[445px] w-[445px] absolute left-[-360px] rounded-[50%]"></div>
            </div>

            {/* Our Values */}
            <div className="mt-16 xl:mt-36 mb-20">
                <h3 className="text-4xl md:text-5xl font-semibold text-darkNavy text-center">Our Values</h3>

                {/* grid container */}
                <div className="mt-20 xl:mt-24 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-10 lg:px-36">
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
                        <p className="w-[100%] md:w-[80%] text-center font-Lexend text-dimgrey leading-8">
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
                        <p className="w-[100%] md:w-[80%] text-center font-Lexend text-dimgrey leading-8">
                            We are fully committed to deliver a great yet safe, 
                            sustainable micro-mobility experience in every city we serve.
                        </p>

                    </div>
                    {/* Card */}
                    <div className="card flex flex-col items-center mt-10 xl:mt-0 lg:col-span-2 xl:col-span-1 lg:place-self-center">
                        <div className="relative flex flex-col mb-20">
                            <img src="/communityImg.png" alt="" className="w-[240px]" />
                            <div 
                                className="absolute bottom-[-48px] left-[70px] bg-mainYellow w-[96px] h-[96px] text-darkNavy rounded-[50%] flex justify-center items-center font-semibold text-3xl"
                            >
                                03
                            </div>
                        </div>

                        <h3 className="text-3xl font-semibold text-darkNavy mb-4">Our community</h3>
                        <p className="w-[100%] md:w-[80%] text-center font-Lexend text-dimgrey leading-8">
                            We support every community we serve. All workers are paid a living wage 
                            based on their location and are Scoot employees.
                        </p>

                    </div>

                </div>
            </div>

            {/* FAQs */}
            <div className="h-auto my-20">
                <h2 className="text-darkNavy text-5xl text-center font-semibold mb-10 md:mb-20">FAQs</h2>

                    {/* desktop */}
                <div className="hidden lg:block lg:px-16 xl:px-36">
                    <div className="flex justify-between">
                        <h2 className="mt-14 text-darkNavy text-2xl text-center mb-10 font-semibold">How it works</h2>
                        <div>
                                {data.slice(0,3).map((item) => (
                                    <div key={item.id} className="mb-4">
                                        <Accordion
                                            question={item.question}
                                            answer={item.answer}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                    

                    <div className="flex justify-between">
                            <h2 className="mt-14 text-darkNavy text-2xl text-center mb-10 font-semibold">Safe driving</h2>
                            <div>
                                {data.slice(3,6).map((item) => (
                                    <div key={item.id} className="mb-4">
                                        <Accordion
                                            question={item.question}
                                            answer={item.answer}
                                        />
                                    </div>
                                ))}
                            </div>
                    </div>
                    
                </div>

                {/* Mobile */}
                <div className="block lg:hidden px-10">
                    <h2 className="mt-14 text-darkNavy text-2xl text-center mb-10 font-semibold">How it works</h2>

                    {data.slice(0,3).map((item) => (
                        <div key={item.id} className="mb-4">
                            <Accordion
                                question={item.question}
                                answer={item.answer}
                            />
                        </div>
                    ))}


                    <h2 className="mt-14 text-darkNavy text-2xl text-center mb-10 font-semibold">Safe driving</h2>

                    {data.slice(3,6).map((item) => (
                        <div key={item.id} className="mb-4">
                            <Accordion
                                question={item.question}
                                answer={item.answer}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}