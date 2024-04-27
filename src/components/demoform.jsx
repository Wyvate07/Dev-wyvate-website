import { useEffect } from "react";
import demoformimg from "../../public/demofromimg.svg";
import midlogo from "../../public/midlogo.svg";
import cross from "../../public/cross.svg";
import { gsap, Power3 } from "gsap/all";

const Demoform = ({ onClose }) => {
  useEffect(() => {
    const formTimeline = gsap.timeline();
    formTimeline.fromTo(
      ".form-container",
      {
        duration: 0.3,
        scale: 0,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        ease: Power3.easeInOut,
      }
    );
    formTimeline.play();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[10000]">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70"></div>

      <div className="w-[80%] sm:h-[90%] h-[40%] rounded-3xl flex form-container">
        <div className="w-[45%] bg-[#00D084] rounded-l-3xl relative flex flex-col justify-center items-center gap-[5%]">
          <h1 className="text-[2vw] font-extrabold w-[75%] text-white pt-[15%]">
            You are taking a right step for your business.
          </h1>

          <img src={demoformimg} alt=".." className="w-[50%]" />

          <h2 className="text-[1.5vw] w-[75%] text-[white]">
            See how Wyvate can help you grow your business today
          </h2>
          <img src={midlogo} alt=".." className="mr-[25%] w-[50%] pt-[5%]" />
        </div>
        <div className="w-[55%] bg-white rounded-r-3xl relative">
          <button
            onClick={onClose}
            className="h-[5%] w-[5%] absolute top-4 right-4 hover:scale-105 transition-all"
          >
            <img src={cross} alt="" className="mr-[10%]" />
          </button>
          <div className="w-[90%] h-[80%] flex flex-col justify-center items-start gap-[5.5%] m-auto">
            <h1 className="text-[3vw] font-extrabold">Setup Free Demo</h1>
            <h2 className="text-[1.4vw] w-[80%] ">
              Fill in the details and our Product Specialist will reach you out.
            </h2>
            <input
              type="email"
              name="Email"
              placeholder="Full Name*"
              required
              className="h-[10%] w-[80%] border-[grey] border-solid border-[2px] sm:placeholder:text-[1.2rem]  rounded-lg sm:pl-8 pl-3 focus:outline-none focus:drop-shadow-lg placeholder:text-[2.5vw]  "
            />

            {/* <input
                  type="text"
                  name="countryCode"
                  placeholder="+91"
                  className="border-[2px] border-[gray] p-2 rounded-l-lg text-[1.2vw] sm:placeholder:text-[1.2vw] placeholder:text-[2.5vw] h-[10%] focus:outline-none absolute  "
                />
               */}

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Mobile Number*"
              className=" h-[10%] w-[80%] border-[grey] border-solid border-[2px] sm:placeholder:text-[1.2rem] rounded-lg sm:pl-8 pl-3 focus:outline-none focus:drop-shadow-lg placeholder:text-[2.5vw]  "
            />

            <input
              type="email"
              name="Email"
              placeholder="E-Mail Address*"
              required
              className="h-[10%] w-[80%] border-[grey] border-solid border-[2px] sm:placeholder:text-[1.2rem] placeholder:text-[2.5vw] rounded-lg sm:pl-8 pl-3 focus:outline-none focus:drop-shadow-lg"
            />
            <p className="w-[80%] text-[.9vw]">
              By clicking On continue I hereby provide my consent to receive
              emails, phone calls, messages and other communications from Wyvate
              to understand about Wyvate Services, offerings, promotions and
              other related information.
            </p>
          </div>
          <a href="#">
            <button
              type="button"
              className="h-[8%] sm:w-[25%] w-[30%] bg-[#00D084] absolute right-[23%] bottom-10 rounded-full sm:text-[1.1vw] text-[2vw] font-bold text-[white] hover:scale-105 transition-all "
            >
              Continue
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demoform;
