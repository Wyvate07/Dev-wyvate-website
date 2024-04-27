import triangle from "../../public/triangle.svg";
import dotframe from "../../public/dotframe.svg";
// import cardmask from "../../public/cardmask.svg";

export default function Footer1() {
  return (
    <div className="sm:h-[65vh] h-[25vh] relative ">
      <hr className="w-[80%] absolute left-[10%] " />
      <img
        src={triangle}
        alt=".."
        className=" absolute top-[30%] left-[4%] "
      />
      <img
        src={dotframe}
        alt=".."
        className=" absolute right-[3%] sm:top-[40%] top-[20%] sm:w-[10vw] w-[20%] "
      />
      <div className=" sm:h-[55vh] h-[20vh] w-[83%] left-[8%] absolute  top-[8%] rounded-[2.625rem] card ">
        <div className="">
          <h1 className=" absolute z-10 sm:top-[25%] top-[30%] left-[10%] text-[white] text-[3vw] font-bold ">
            Try Wyvate for Free
          </h1>
          <p className=" absolute top-[48%] text-[white] z-10 w-[60%] left-[10%] sm:text-[1.3vw] text-[2vw] font-light ">
            Elevate your business with our cutting-edge SaaS platform Try Wyvate
            Free and witness the difference in productivity
          </p>
        </div>
      </div>
      <div className=" sm:h-[55vh] h-[20vh] w-[83%] left-[8%] absolute  top-[8%] rounded-[2.625rem] bg-[#030303A8] cardmask "></div>
      <a href="https://business.wyvate.com/register" target="_blank" rel="noreferrer">
        <button className=" sm:w-[13%] w-[18%] sm:h-[10%] h-[20%] bg-[#09C27E] text-[white] absolute sm:right-[20%] right-[15%] sm:top-[47%] top-[40%] rounded-lg pr-[1%] pl-[1%] "><p className="sm:text-[1vw] text-[3vw] ">Start Free Trail Now</p> </button>
      </a>
    </div>
  );
}
