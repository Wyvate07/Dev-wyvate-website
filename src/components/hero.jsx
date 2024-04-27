import mobilehero from "../../public/mobilehero.svg";
// import { gsap } from "gsap/gsap-core";
// import { useEffect,} from "react";

export default function Hero() {
    // useEffect(() => {
    //     gsap.set('.herotext', { y: '100%' });
    
    //     const tl = gsap.timeline({ repeat: -1 });
    
    //     tl.fromTo('.herotext',{
    //         y:"130%",
    //     }, 
    //     {
    //         delay:.8,
    //       duration:3,
    //       ease: 'power4.out',
    //       y: '-40%',
    //       stagger:0 ,
    //     })
    //       .to('.herotext', {
    //         duration:3,
    //         ease: 'power4.out',
    //         y: '-200%',
    //         stagger: 0,
    //       })
    //     //   .to('.herotext', {
    //     //     duration:1,
    //     //     ease: 'power2.inOut',
    //     //     y: '-70%',
    //     //     stagger: 2,
    //     //   })
    //       .to('.changing-text h1', {
    //         duration: 3,
    //         delay: 0,
    //       });
    //   }, []);
    
  return (
    <div className="w-[100%]  flex-col m-0">
      <div className="w-[100%] sm:h-[144px] h-[16vh] bg-black  top-stack ">
        .
      </div>
      <div className=" w-[100%] sm:h-[580px] h-[50vh] hero ">
            </div>
            <div className=" ">
                <h1 className="w-[50%] sm:text-[4vw] text-[6vw] font-sans font-extrabold absolute top-[30%] left-[8%] text-[#FFFFFF] drop-shadow-lg ">Discover & Book Local Services with your Favourite Businesses</h1>  
            </div>
            <div className="hero-mob">
                <img src={mobilehero} className="absolute top-[30%]  right-[9%]  "></img>
            </div>
      {/* <div className="h-[80vh] w-full flex ">
        <div className="w-[55%] flex  justify-center flex-col ml-[10%] gap-2 ">
          <h1 className="text-[3vw] font-semibold ">WYVATE</h1>
          <p className=" text-[1.3vw] ">
            Discover & Book Local Services with your Favourite Businesses
          </p>
          <div className="h-[2%] w-[1%] absolute bg-pri rounded-full top-[60%] left-[30%] "></div>
          <div className="h-[2%] w-[1%] absolute bg-pri rounded-full top-[40%] left-[20%] "></div>
          <div className="h-[2%] w-[1%] absolute bg-sec rounded-full top-[30%] left-[10%] "></div>
          <div className="h-[2%] w-[1%] absolute bg-sec rounded-full top-[70%] left-[20%] "></div>
          <div className="h-[2%] w-[1%] absolute bg-tri rounded-full top-[50%] left-[40%] "></div>
          <div className="h-[2%] w-[1%] absolute bg-tri rounded-full top-[30%] left-[50%] "></div>
        </div>
        <div className="w-[45%] hero relative  ">
          <div className="absolute w-[100%] h-[20vh] bg-[#ffffff14] bottom-0 backdrop-blur-[10px]  flex justify-center items-center rounded-t-2xl overflow-hidden  ">
            <div className="flex flex-col items-start  h-[10vh]  justify-center gap-[80px] pt-[13%]   herotext  ">
              <div>
                <h1 className="text-[1.5vw] font-semibold ml-10 text-[white] ">
                  first text
                </h1>
                <p className="ml-10 text-[white]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur in fuga{" "}
                </p>
              </div>
              <div>
                <h1 className="text-[1.5vw] font-semibold ml-10 text-[white] ">
                  second text
                </h1>
                <p className="ml-10 text-[white]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur in fuga{" "}
                </p>
              </div>
              <div>
                <h1 className="text-[1.5vw] font-semibold ml-10 text-[white] ">
                  third text
                </h1>
                <p className="ml-10 text-[white]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur in fuga{" "}
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
