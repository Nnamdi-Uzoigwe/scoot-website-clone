import Button from "../../components/Button";
import ArrowLeft from "../../components/ArrowLeft"

export default function MainSection() {
    return (
        <div className="h-auto">
            <header className="hidden md:block mt-40 relative mb-20">
                <div className="bg-lightGrey hidden xl:block h-[15px] w-auto lg:w-[970px]"></div>

                <div className="flex flex-col xl:flex-row justify-between absolute w-auto xl:w-[970px] top-[-80px] xl:top-[-40px]">

                    <div className="w-[96px] ml-[37px] xl:ml-36 h-[96px] bg-mainYellow rounded-[50%] flex items-center justify-center">
                        <img src="/locate.png" alt="" />
                    </div>

                    <div className="w-[96px] mt-40 xl:mt-0 ml-[37px] xl:ml-0 h-[96px] bg-mainYellow rounded-[50%] flex items-center justify-center">
                        <img src="/scooter.png" alt="" />
                    </div>

                    <div className="w-[96px] mt-44 xl:mt-0 ml-[37px] xl:ml-0 h-[96px] bg-mainYellow rounded-[50%] flex items-center justify-center">
                        <img src="/rider.png" alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 w-[700px] xl:w-[1300px] gap-20 mt-10 xl:mt-20 font-Lexend px-36 mb-[600px] xl:mb-0">
                    <div className="absolute top-[-100px] left-[200px] xl:static">
                        <h3 className="text-2xl mb-4 font-semibold text-darkNavy">Locate with app</h3>
                        <p className="text-dimgrey font-Lexend w-[75%] xl:w-[100%]">
                            Use the app to find the nearest scooter to you.
                            We are continuously placing scooters in the areas
                            with most demand, so no one should never be too far away.
                        </p>
                    </div>

                    <div className="absolute top-[170px] left-[200px] xl:static">
                        <h3 className="text-2xl mb-4 font-semibold text-darkNavy">Pick your scooter</h3>
                        <p className="text-dimgrey font-Lexend w-[75%] xl:w-[100%]">
                            We show the most important info for the 
                            scooters closest to you. So you know how much 
                            charge they have left and can see roughly how much it will cost.
                        </p>
                    </div>

                    <div className="absolute top-[430px] left-[200px] xl:static">
                        <h3 className="text-2xl mb-4 font-semibold text-darkNavy">Enjoy the ride</h3>
                        <p className="text-dimgrey font-Lexend w-[75%] xl:w-[100%]">
                            Scan the QR code and the bike will unlock.
                            Retract the cable lock, put on a helmet, and
                            you're off! Always lock bikes away from
                            walkways and accessibility ramps.
                        </p>
                    </div>
                </div>
                
            </header>
            {/* Mobile Screens */}
            <header className="block md:hidden px-10 mt-20 ">
                <div>
                    <div className="relative flex flex-col items-center">
                        <div className="w-[66px] h-[66px] bg-mainYellow rounded-[50%] flex flex-col items-center justify-center">
                        <img src="/locate.png" alt="" className="w-[50%]" />
                    </div>
                    
                        <h3 className="mt-4 md:mt-0 text-2xl mb-4 font-semibold text-darkNavy text-center">Locate with app</h3>
                        <p className="text-dimgrey text-center font-Lexend">
                            Use the app to find the nearest scooter to you.
                            We are continuously placing scooters in the areas
                            with most demand, so no one should never be too far away.
                        </p>
                    </div>

                </div>
                <div>
                    <div className="relative flex flex-col items-center mt-8">
                        <div className="w-[66px] h-[66px] bg-mainYellow rounded-[50%] flex flex-col items-center justify-center">
                        <img src="/scooter.png" alt="" className="w-[60%]" />
                    </div>
                    
                        <h3 className="mt-4 md:mt-0 text-2xl mb-4 font-semibold text-darkNavy">Pick your scooter</h3>
                        <p className="text-dimgrey text-center font-Lexend">
                            We show the most important info for the 
                            scooters closest to you. So you know how much 
                            charge they have left and can see roughly how much it will cost.
                        </p>
                    </div>

                </div>
                <div>
                    <div className="relative flex flex-col items-center mt-8">
                        <div className="w-[66px] h-[66px] bg-mainYellow rounded-[50%] flex flex-col items-center justify-center">
                        <img src="/rider.png" alt="" className="w-[60%]" />
                    </div>
                    
                        <h3 className="mt-4 md:mt-0 text-2xl mb-4 font-semibold text-darkNavy">Enjoy the ride</h3>
                        <p className="text-dimgrey text-center font-Lexend">
                            Scan the QR code and the bike will unlock.
                            Retract the cable lock, put on a helmet, and
                            you're off! Always lock bikes away from
                            walkways and accessibility ramps.
                        </p>
                    </div>

                </div>
            </header>

            {/* Telemetry */}
            <div className="flex flex-col-reverse xl:flex-row items-center justify-between px-10 xl:px-36 mt-32 md:mt-40 relative overflow-x-hidden">
                    <div className="content">
                        <h2 className="mt-14 xl:mt-0 text-3xl text-center xl:text-left md:text-5xl font-semibold text-darkNavy">Easy to use <br />riding telemetry</h2>
                        <p className="font-Lexend text-center xl:text-left text-dimgrey mt-8 mb-10 w-[100%] xl:w-[60%]">
                            The scoot app is available with riding telemetry. This means
                            it can show you your average speed, how long you've been using
                            the scooter, your traveling distance, and many more things all in 
                            easy to use app.
                        </p>

                        <div className="flex justify-center xl:justify-start">
                            <Button>Learn More</Button>
                        </div>
                    </div>

                    <img src="/teleImg.png" alt="" />

                <div className="absolute z-30 right-[-400px] md:right-[-5px] top-[200px] md:top-[280px]">
                    <ArrowLeft />
                </div>

                <div className="bg-lightGrey hidden md:block h-[445px] w-[445px] absolute right-[-360px] top-0  rounded-[50%]"></div>      
            </div>

            {/* Coming to a city */}
            <div className="mt-32 md:mt-40 px-10 xl:px-36 flex flex-col xl:flex-row justify-between items-center w-full relative">
  
                <img src="/comingImg.png" alt="" />
                
                <div className="content flex flex-col items-center xl:items-start w-[100%] xl:max-w-[50%]">
                    <h2 className="mt-14 xl:mt-0 text-3xl md:text-5xl font-semibold text-darkNavy text-center xl:text-left">Coming to a city <br />near you</h2>
                    <p className="font-Lexend text-center xl:text-left text-dimgrey mt-8 mb-10 w-[100%] xl:w-[80%]">
                    Scoot is available in 4 major cities so far. We're expanding rapidly, so be sure to let us know
                    if you want to see us in your hometown. We're aiming to let our scooters loose on 23 cities over the coming year.
                    </p>
                    <Button>Learn More</Button>
                </div>

                <img src="/arrowRight.png" alt="" className="absolute top-[70px] md:top-0 left-[-90px] md:left-[-120px]" />
                <div className="bg-lightGrey hidden md:block h-[445px] w-[445px] absolute left-[-360px] rounded-[50%]"></div>
            </div>

            {/* Zero Hassle */}
            <div className="flex flex-col-reverse xl:flex-row items-center justify-between px-10 xl:px-36 mt-32 md:mt-40 relative overflow-x-hidden mb-32 md:mb-40">
                    <div className="content">
                        <h2 className="mt-14 xl:mt-0 text-3xl md:text-5xl font-semibold text-darkNavy text-center xl:text-left">Zero hassle <br /> payments</h2>
                        <p className="font-Lexend text-dimgrey mt-8 mb-10 w-[100%] xl:w-[70%] text-center xl:text-left">
                            Our payment is as easy as one two three. We accept 
                            most credit cards and debit cards. You can also link
                            your PayPal account inside the app. Need to pay later?
                            No worries! You can defer payment for up to a month.
                        </p>

                        <div className="flex justify-center xl:justify-start">
                            <Button>Learn More</Button>
                        </div>
                    </div>

                    <img src="/zeroHassleImg.png" alt="" className="w-[445px] lg:h-[445px]" />

                <div className="absolute z-30 right-[-500px] md:right-[-390px] top-[100px]">
                    <ArrowLeft />
                </div>

                <div className="bg-lightGrey hidden md:block h-[445px] w-[445px] absolute top-0 right-[-360px] rounded-[50%]"></div>      
            </div>

        </div>
    )
}