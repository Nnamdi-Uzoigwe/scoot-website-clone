import Button from "./Button"

function Jumbotron({ role, location }) {
    return (
        <div className="w-[300px] md:w-[700px] xl:w-[1110px] h-auto md:h-[128px] bg-snow p-10 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
                <h4 className="text-2xl font-semibold text-darkNavy mb-2 text-center md:text-left">{role}</h4>
                <p className="font-Lexend text-base font-medium text-darkNavy text-center md:text-left">{location}</p>
            </div>

            <div className="hidden md:block">
                <Button>Apply</Button>
            </div>
            {/* Mobile */}
            <div className="w-full block md:hidden">
                <button className="w-full bg-mainYellow border-[2px] border-transparent hover:bg-white hover:border-mainYellow text-white hover:text-mainYellow text-medium py-2 px-6 cursor-pointer">Apply</button>
            </div>
        </div>
    )
}

export default Jumbotron