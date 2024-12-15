
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

function Accordion({ question, answer }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="bg-snow cursor-pointer hover:bg-lightYellow w-[100%] lg:w-[730px] py-4 px-3 md:p-6 lg:p-10"
      onClick={() => setClicked((prev) => !prev)}
    >
      <div className="flex justify-between items-center">
        <h3 className="question text-xl md:text-2xl text-darkNavy font-semibold">
          {question}
        </h3>
        <div
          className={`transform transition-transform duration-300 ${
            clicked ? "rotate-180" : ""
          }`}
        >
          <IoChevronDownSharp className="text-3xl text-mainYellow" />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          clicked ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mt-6 text-normal md:text-xl text-darkNavy font-medium font-Lexend">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
