import wyvatelogo from "../../public/wyvatelogo.svg";
import play from "../../public/play.svg";
// import download from "../../public/Download.svg";
import build from "../../public/business.svg";

export default function Navbar({openModal}) {
  return (
    <div className="w-[83%] sm:h-[104px] h-[10vh] left-[8%] flex  items-center  bg-[#ffffff52] backdrop-blur-[10px]  rounded-2xl fixed top-5 m-0 z-[1000] ">
      <div className="w-[40%] pl-5 nav-logo  ">
        <img src={wyvatelogo} alt="logo" />
      </div>
      <div className="flex gap-[18%] sm:w-[50%] w-[100%] relative justify-center items-center sm:mb-[4%] mb-[10%] sm:mr-0 mr-[23%] ">
        <div>
            <button className="sm:w-[20%] w-[20%] sm:h-[50px] h-[5vh] right-[60%] top-[-10%] bg-pri rounded-lg flex items-center justify-center gap-2 font-[50px] text-white font-sans text-[1rem] absolute hover:bg-[black] active:scale-90 transition-all nav-btn " onClick={openModal}>
              <img src={play}></img>
               <p>Demo</p>
            </button>
        </div>
        <div>
          <a href="https://app.wyvate.com" target="_blank" rel="noreferrer">
            <button className="sm:w-[40%] w-[30%] sm:mr-0 mr-[5%] absolute hover:bg-[black] active:scale-90 transition-all  sm:h-[50px] h-[5vh] right-[15%] bg-pri rounded-lg flex items-center justify-center gap-2 font-[50px] text-white font-sans sm:text-[1rem] nav-btn ">
              {/* <img src={download}></img> */}
              <p className="font-extrabold text-[1.5vw]">Get Started</p> 
            </button>
          </a>
        </div>
        <div className="">
          <a href="https://business.wyvate.com" target="_blank" rel="noreferrer">
            <button className="sm:w-[20%] w-[20%] absolute sm:h-[50px] h-[5vh] hover:bg-pri active:scale-90 transition-all right-[-10%] bg-[black] rounded-lg flex items-center justify-center gap-2 font-[50px] text-white font-sans text-[1rem] nav-btn ">
              <img src={build}></img>
               <p>Business</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
