import Button from "../../components/Button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden z-30">
      {/* Hero Background Image */}
      <img
        src="/hero.jpg"
        alt=""
        className="h-[650px] w-full object-cover"
      />

      {/* Content Overlay */}
      <div className="content absolute top-0 left-0 w-[100%] lg:w-[80%] h-full lg:h-[650px] px-10 lg:px-0 flex flex-col justify-center overflow-x-hidden">
        {/* Heading */}
        <div className="text-center lg:text-left lg:ml-36 mb-10 lg:mb-20 xl:mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Scooter sharing
          </h1>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            made simple
          </h1>
        </div>

        {/* Description and Call-to-Action */}
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-6 md:gap-10">
          {/* Decorative Line */}
          <div className="hidden lg:block h-[16px] w-[200px] bg-mainYellow mt-6"></div>

          {/* Text Content */}
          <div className="w-full xl:w-[50%] text-white text-center lg:text-left relative">
            <p className="mb-6 lg:mb-8 font-Lexend text-base">
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you're away!
            </p>
            
            <div className="flex justify-center">
                <Button>Get Scootin</Button>
            </div>
          </div>

          {/* Arrow Image */}
          <img
            src="/arrowRight.png"
            alt=""
            className="mt-4 absolute left-[-300px] md:left-[-130px] top-[450px] lg:static"
          />

        </div>
      </div>

      <div className="hidden md:block w-[62px] h-[62px] rounded-[50%] absolute bg-transparent border-4 bottom-12 right-[130px] border-white"></div>
      <div className="hidden md:block w-[62px] h-[62px] rounded-[50%] absolute bg-transparent border-4 bottom-12 right-[50px] border-white"></div>
      <div className="hidden md:block w-[62px] h-[62px] rounded-[50%] absolute bottom-12 right-[-30px] bg-white overflow-hidden"></div>
    </div>
  );
}


