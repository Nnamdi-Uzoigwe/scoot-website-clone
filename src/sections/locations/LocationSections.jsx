import Button from "../../components/Button";

export default function LocationSections() {
    return (
        <div>
            <div className="hidden my-24 px-36 md:flex justify-center">
                <img src="/map.png" alt="" />
            </div>
            {/* Mobile */}
            <div className="mt-24 mb-16 flex flex-col px-8 md:hidden justify-center">
                <img src="/mapSmall.png" alt="" />

                <div className="mt-14">
                    <div className="bg-lightYellow p-4 flex justify-center items-center text-lg text-darkNavy font-semibold mb-4">New York</div>
                    <div className="bg-lightYellow p-4 flex justify-center items-center text-lg text-darkNavy font-semibold mb-4">London</div>
                    <div className="bg-lightYellow p-4 flex justify-center items-center text-lg text-darkNavy font-semibold mb-4">Jakarta</div>
                    <div className="bg-lightYellow p-4 flex justify-center items-center text-lg text-darkNavy font-semibold mb-4">Yokohama</div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row px-8 lg:px-36 justify-between items-center mb-28 md:mb-36">
                <h2 className="hidden md:block text-darkNavy font-semibold text-4xl">Your City <br />Not Listed?</h2>
                {/* Mobile */}
                <h2 className="text-darkNavy block md:hidden font-semibold text-3xl text-center">Your City Not <br /> Listed?</h2>
                <p className=" my-6 xl:my-0 w-[100%] xl:w-[40%] text-center xl:text-left text-dimgrey font-Lexend leading-8">
                    If you'd like to see Scoot in your hometown, be sure to let us know.
                    We track requests and plan launches based on demand. Feel free to 
                    message us by clicking the link or messaging us on social.
                </p>
                <Button>Message Us</Button>
            </div>
        </div>
    )
}