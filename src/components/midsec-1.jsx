import midlogo from "../../public/midlogo.svg";
import arrowpoint from "../../public/arrowpoint.svg";
import radio from "../../public/radio.svg";
import building from "../../public/building.svg";
// import download from "../../public/Download.svg";
import discount from "../../public/discount.svg";

export default function Midsec1() {
  return (
    <div className="mid1-container sm:h-[90vh] h-[75vh] w-[100%] flex flex-col gap-10 ">
      <div className="sm:ml-[8%] ml-[6%] ">
        <img src={midlogo}></img>
      </div>
      <div className="ml-[8%]">
        <h1 className="sm:text-[4vw] text-[7vw] sm:w-[60%] w-[80%] mid-heading">
          <span className="text-[grey]">Grow</span> Your Business, Sell Services
          Online
        </h1>
      </div>
      <div className="flex flex-col gap-8 ml-[8%]">
        <div className="sm:w-[50%] w-[90%] flex sm:gap-5 gap-2 ">
          <img src={arrowpoint}></img>
          <img src={discount}></img>
          <p className="sm:text-[1.5vw] text-[4vw] text-[#595959] font-medium ">
            No Commissions, Sell Directly to Clients.
          </p>
        </div>
        <div className="flex sm:gap-5 gap-2">
          <img src={arrowpoint}></img>
          <img src={building}></img>
          <p className="sm:text-[1.5vw] text-[4vw] text-[#595959] font-medium ">
            Manage Daily Business Schedule
          </p>
        </div>
        <div className="flex sm:gap-5 gap-2">
          <img src={arrowpoint}></img>
          <img src={radio}></img>
          <p className="sm:text-[1.5vw] text-[4vw] text-[#595959] font-medium ">
            Accept all Payment Modes Online
          </p>
        </div>
      </div>
      <div className="flex flex-row sm:gap-10 gap-2 ml-[8%]">
        <div>
          <a href="https://business.wyvate.com/" target="_blank" rel="noreferrer">
            <button className="h-12 sm:w-[10vw] w-[20vw] bg-[black] rounded-xl text-[white]  hover:bg-[#1a1a1a] transition-all ">
              Sign in
            </button>
          </a>
        </div>
        <div>
          <a href="https://business.wyvate.com/register" target="_blank" rel="noreferrer">
            <button className="h-12 sm:w-[15vw] w-[35vw] border-[2px] rounded-xl border-[black] hover:border-[grey] font-bold hover:bg-black transition-all hover:text-[white] ">
              Register Now
            </button>
          </a>
        </div>
        {/* <div>
          <a href="#">
            <button className="h-12 sm:w-[13vw] w-[20vw] bg-[black] rounded-xl text-[white] flex items-center justify-center gap-3 hover:bg-[#1a1a1a] transition-all mid1-btn">
              <img src={download} alt=".." />
               <p>Download Now</p>
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
}
