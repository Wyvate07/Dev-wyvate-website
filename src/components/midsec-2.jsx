import midsecimg from "../../public/midsecimg.svg";
import arrowpoint from "../../public/arrowpoint.svg";
import smartphone from "../../public/Smartphone.svg";
import calender from "../../public/Calendar.svg";
import widget from "../../public/Widget Add.svg";
import applelogo from "../../public/apple logo.svg";
import playstorelogo from "../../public/Google Play LOGO.svg";

export default function Midsec2() {
  return (
    <div className="midcontainer2 h-[100vh] relative mb-[10%] ">
      {/* <hr className="w-[100%] h-[20px] absolute right-0 line" /> */}
      <div className="w-[50%] midsec2-img" >
        <img src={midsecimg} alt=".." className="absolute top-[10%] right-[8%]  " />
      </div>
      <div className="flex gap-[8vh] flex-col absolute left-[8%] top-[10%]  ">


        <div className=" left-[8%] top-[25%] sm:w-[70%] w-[80%] font-extrabold   ">
          <h1 className=" sm:text-[4vw] text-[9vw] ">
            <span className="text-[#00CC99]">Go</span> Smart &<br></br> Get Organised
          </h1>
        </div>
        <div className=" sm:top-[60%] top-[40%] left-[8%] flex flex-col sm:gap-12 gap-5 ">
          <div className="flex sm:gap-5 gap-2 flex-row">
            <img src={arrowpoint}></img>
            <img src={calender}></img>
            <p className="sm:text-[2vw] text-[5vw] sm:w-[100%] w-[70%] text-[#595959] font-medium ">
              Schedule anytime & anywhere
            </p>
          </div>
          <div className="flex sm:gap-5 gap-2 flex-row">
            <img src={arrowpoint}></img>
            <img src={smartphone}></img>
            <p className="sm:text-[2vw] text-[5vw] text-[#595959] font-medium ">
              Personalised app
            </p>
          </div>
          <div className="flex sm:gap-5 gap-2 flex-row">
            <img src={arrowpoint}></img>
            <img src={widget}></img>
            <p className="sm:text-[2vw] text-[5vw] text-[#595959] font-medium ">
              Explore More
            </p>
          </div>
        </div>
        <div className=" flex flex-row sm:top-[101%] top-[80%] left-[8%] sm:gap-11 gap-[40%] sm:w-0 w-[90%]  ">
          <a href="#">
            <button className="border-[black] border-[2px] sm:w-[11.0625rem] w-[450%] h-[3.5rem] grid grid-rows-3 grid-flow-col justify-center gap-4 items-center rounded-lg midsec2-btn ">
              <img src={applelogo} alt=".." className="row-span-3" />
              <p className="col-span-2 text-[9px] pt-6 pr-[29px]  ">
                Download on the
              </p>
              <h1 className="row-span-2 font-bold pb-3">App Store</h1>
            </button>
          </a>
          <a href="#">
            <button className="border-[black] border-[2px] sm:w-[11.0625rem] w-[450%] h-[3.5rem] grid grid-rows-3 grid-flow-col justify-center gap-4 items-center rounded-lg  hover:bg-black transition-all hover:text-[white] midsec2-btn ">
              <img src={playstorelogo} alt=".." className="row-span-3" />
              <p className="col-span-2 text-[9px] pt-7 pr-[33px] ">Get it on</p>
              <h1 className="row-span-2 font-bold pb-3">Google Play</h1>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
