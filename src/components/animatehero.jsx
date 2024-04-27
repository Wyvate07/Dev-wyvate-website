import logoicon from "../../public/logoicon.svg";
import gsap from "gsap";
import { useEffect, useState } from "react";
// import heromob from "../../public/heromob.svg";
import wyvatetext from "../../public/wyvatetext.svg";
// import phoneframe from "../../public/phoneframe.jpg";
// import test1 from "../../public/test8.jpg";
import applelogo from "../../public/apple logo.svg";
import playstorelogo from "../../public/Google Play LOGO.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  const [playAnimation, setPlayAnimation] = useState(true);

  useEffect(() => {
    const heroTimeline = gsap.timeline({
      onComplete: () => {
        setPlayAnimation(false);
      },
    });

    if (playAnimation) {
      heroTimeline.fromTo(
        ".logohero",
        {
          opacity: 0,
          x: -500,
          scale: 0.5,
        },
        {
          delay: 1,
          scale: 1,
          opacity: 1,
          duration: 0.4,
          x: 0,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".logohead",
        {
          opacity: 0,
          x: 500,
          scale: 0.5,
        },
        {
          delay: 1,
          scale: 1,
          opacity: 1,
          duration: 0.4,
          x: 10,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".logopara",
        {
          opacity: 0,

          scale: 5,
        },
        {
          delay: 2,
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
      // gsap.fromTo(
      //   ".backsec",
      //   {
      //     opacity: 0,
      //     x: 1000,
      //   },
      //   {
      //     delay: 3,
      //     opacity: 1,
      //     x: 0,
      //     duration: 0.4,
      //     ease: "power3.out",
      //   }
      // );
      // gsap.fromTo(
      //   ".backsec",
      //   {},
      //   {
      //     delay: 10,
      //     duration: 0.4,
      //     width: "30%",
      //     ease: "power3.out",
      //   }
      // );
      // gsap.fromTo(
      //   ".heromob",
      //   {
      //     opacity: 0,
      //     y: 500,
      //   },
      //   {
      //     delay: 3.5,
      //     opacity: 1,
      //     y: 0,
      //     duration: 0.4,
      //     ease: "power3.out",
      //   }
      // );
      // gsap.fromTo(
      //   ".wholelogo",
      //   {
      //     opacity: 1,
      //   },
      //   {
      //     duration: 0.4,
      //     delay: 9.7,
      //     opacity: 0,
      //     ease: "power3.out",
      //   }
      // );
      gsap.fromTo(
        ".wholelogo",
        {
          
        },
        {
          delay: 3,
          scale:1.5,
          x: 450,
          duration: 0.4,
          
        }
      );
      // gsap.fromTo(
      //   ".backsec span",
      //   {
      //     opacity: 0,
      //   },
      //   {
      //     delay: 4.1,
      //     opacity: 1,
      //     stagger: 0.8,
      //     duration: 0.4,
      //     ease: "power3.out",
      //   }
      // );
      // gsap.fromTo(
      //   ".fullmob",
      //   {},
      //   {
      //     delay: 10,
      //     x: 300,
      //     duration: 0.4,
      //     ease: "power3.out",
      //   }
      // );
      gsap.fromTo(
        ".titlebox",
        {
          width: "0%",
          opacity: 0,
        },
        {
          duration: 0.4,
          delay: 3,
          width: "35%",
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".titlebox h1",
        {
          opacity: 0,
        },
        {
          duration: 0.4,
          delay: 4,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".heropara",
        {
          opacity: 0,
          y: 500,
        },
        {
          y: 0,
          duration: 0.4,
          delay: 3.5,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".herobtn",
        {
          opacity: 0,
        },
        {
          duration: 0.4,
          delay: 5,
          opacity: 1,
        }
      );
      // gsap.fromTo(
      //   ".backsec img",
      //   {
      //     scale: 3,
      //   },
      //   {
      //     scrollTrigger: {
      //       trigger: ".backsec img",
      //       scrub: 1,
      //     },
      //     scale: 1,
      //   }
      // );
    }
  }, [playAnimation]);
  return (
    <div className="w-[100%]  flex-col m-0">
      <div className="w-[100%] sm:h-[144px] h-[16vh] bg-black  ">.</div>
      <div className=" h-[580px] relative anihero overflow-hidden -z-10  ">
        {/* <div className="h-[580px] w-[30%] bg-[#1BCAA2] absolute right-0 backsec  rightdiv border-l-[2px] border-l-[grey] overflow-hidden  ">
          <img
            src={test1}
            alt=".."
            className="h-[100%] w-[100%] -z-50 absolute brightness-150 "
          />
          <div className=" h-[90%] border-[1px] border-[#c2c0c0] rounded-3xl bg-[#ffffff33] backdrop-blur-[3px] drop-shadow-lg w-[80%] absolute left-[10%] top-6 grid grid-cols-2 grid-rows-3 justify-items-center items-center glassphone">
            <span className="h-[90%] w-[90%]  bg-[#ffffff29] backdrop-blur-[5px]  rounded-xl text-[1rem] flex justify-center items-center font-bold ">
              Appointment Scheduling
            </span>
            <span className="h-[90%] w-[90%] bg-[#ffffff29] backdrop-blur-[5px]  rounded-xl left-[52.5%] top-[35%] text-[1rem] flex justify-center items-center font-bold ">
              Offers & Discounts
            </span>
            <span className=" h-[90%] w-[90%] bg-[#ffffff29] backdrop-blur-[5px]   rounded-xl left-[46%] top-[50%] text-[1rem] flex justify-center items-center font-bold ">
              Memberships & Packeges
            </span>
            <span className="h-[90%] w-[90%] bg-[#ffffff29] backdrop-blur-[5px]   rounded-xl left-[52.5%] top-[50%] text-[1rem] flex justify-center items-center font-bold ">
              Events
            </span>
            <span className="h-[90%] w-[90%] bg-[#ffffff29] backdrop-blur-[5px]   rounded-xl left-[46%] top-[65%] text-[1rem] flex justify-center items-center font-bold ">
              Classes
            </span>
            <span className="h-[90%] w-[90%] bg-[#ffffff29] backdrop-blur-[5px]   rounded-xl left-[52.5%] top-[65%] text-[1rem] flex justify-center items-center font-bold ">
              Pre Order & Takeaway
            </span>
          </div>
        </div> */}

        <div className="wholelogo absolute left-[43%] top-[45%] w-1/2  ">
          <div className="h-[100px] w-[100px] rounded-2xl bg-black flex justify-center items-center  logohero ">
            <img src={logoicon} alt=".." className="h-[50%] " />
          </div>
          <img
            src={wyvatetext}
            alt=".."
            className=" h-[50%] w-[50%] absolute left-[3%] top-[4%] logohead"
          />
          <p className="text-[1.3vw] absolute left-[16%] bottom-[15%]  font-bold logopara ">
            Jaha Wait Waha Wyvate
          </p>
        </div>
        {/* <div className=" fullmob">
        <img src={phoneframe} alt=".." className="relative left-[32%] top-[5%] -z-100 w-[41%]  heromob   " />
      <div className="serviceicon ">

        
      </div>
      </div> */}
        <div className=" absolute w-[35%] whitespace-nowrap  h-[13%] bg-pri left-[8%] top-[20%] flex justify-center items-center overflow-hidden titlebox ">
          <h1 className=" text-[2vw] w-[150%] mx-[5%]  font-normal text-[white]  ">
            LOCAL SERVICES MARKETPLACE
          </h1>
        </div>
        <p className="absolute text-[3vw] w-[45%] heropara font-bold top-[35%] left-[8%]">
          Discover & Book Local Services with your Favourite Business in the
          Market
        </p>
      </div>
        <div className=" ml-[8%] absolute z-10 flex flex-row sm:top-[600px] sm:gap-5 gap-[40%] sm:w-0 w-[90%] herobtn   ">
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
            <button className="border-[black] border-[2px] sm:w-[11.0625rem] w-[450%] h-[3.5rem] grid grid-rows-3 grid-flow-col justify-center gap-4 items-center rounded-lg  bg-black transition-all text-[white] midsec2-btn ">
              <img src={playstorelogo} alt=".." className="row-span-3" />
              <p className="col-span-2 text-[9px] pt-7 pr-[33px] ">Get it on</p>
              <h1 className="row-span-2 font-bold pb-3">Google Play</h1>
            </button>
          </a>
        </div>
    </div>
  );
}
