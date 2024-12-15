
function Button({ children }) {
    return (
      <div className="w-fit bg-mainYellow border-[2px] border-transparent hover:bg-white hover:border-mainYellow text-white hover:text-mainYellow text-medium py-2 px-6 cursor-pointer">
        {children}
      </div>
    );
  }
  
  export default Button;
  