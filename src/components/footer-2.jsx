import { useRef } from "react";
import footerlogo from "../../public/footerlogo.svg";
import whatsapp from "../../public/whatsapp.svg";
import yt from "../../public/yt.svg";
import fb from "../../public/fb.svg";
// import printer from "../../public/printer.svg";
import location from "../../public/location.svg";
import phone from "../../public/phone.svg";
import email from "../../public/email.svg";
import cross from "../../public/cross.svg";

export default function Footer2() {
  const dialogRef = useRef(null);

  const show = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const close = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div className="relative h-[90%] sm:w-[100%]">
      <div className="h-[.5rem] w-[100%] bg-[#09C27E] "></div>
      <div className="h-[100%] bg-black flex flex-col  ">
        <div className="flex flex-col items-center justify-center gap-8 mt-[8%]  ">
          <img src={footerlogo} alt=".." />
          <p className="text-[white] w-[50%] text-center font-thin footer-para ">
          Wyvate is a SaaS based startup aimed at building a marketplace that helps clients search, discover and book appointments, classes, events & buy memberships and packages from multiple service providers in the local market.

At the same time it allows businesses/service providers to widely sell their offerings online, manage business schedules and promote offers/deals using our marketing tools and much more
           
          </p>
        </div>
        <div className="flex gap-5 justify-center sm:mt-[3%] mt-[10%] ">
          <a href="https://api.whatsapp.com/send?phone=919555688600">
            <img src={whatsapp} alt=".." />
          </a>
          <a href="#">
            <img src={yt} alt=".." />
          </a>
          <a
            href="https://www.facebook.com/Wyvate/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fb} alt=".." />
          </a>
        </div>
        <div className="text-[white] flex gap-[10%] sm:flex-row flex-col items-center justify-center sm:mt-[3%] mt-[10%] ">
          <div className="grid grid-rows-3 grid-flow-col">
            <img
              src={phone}
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-thin ">Tele</span>
            <p className="row-span-2 col-span-2">+91 9555688600</p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col">
            <img
              src={email}
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-thin ">Mail</span>
            <p className="row-span-2 col-span-2">connect@wyvate.com</p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col ">
            <img
              src={location}
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-thin ">Address</span>
            <p className="row-span-2 col-span-2 text-[.7rem] ">
            417, Suncity Business Tower, <br /> Golf Course Rd, Suncity, Sector 54, <br /> Gurugram, Haryana 122011
            </p>
          </div>
          {/* <div className="grid grid-rows-3 grid-flow-col ">
            <img
              src={printer}
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-thin ">Fax</span>
            <p className="row-span-2 col-span-2">+1-212-9876543</p>
          </div> */}
        </div>
        <div></div>
        <div className="flex sm:gap-[23%] gap-10 justify-center mt-[5%] mb-[5%] font-thin text-[grey] text-[15px]  ">
          <div className="text-white flex sm:flex-row flex-col sm:gap-20">
            <a href="#">
              <span>About Us</span>
            </a>
            
              <button onClick={show}>Contact</button>
    
            <a href="/privacypolicy" target="_blank" rel="noreferrer">
              <span>Privicy Policy</span>
            </a>
            {/* <a href="#">
              <span>Sitemap</span>
            </a> */}
            <a href="/terms" target="_blank" rel="noreferrer">
              <span>Terms of Use</span>
            </a>
          </div>
          <div className="text-white">
            <span>© 2000-2021, All Rights Reserved</span>
          </div>
        </div>
      </div>
      <dialog   ref={dialogRef} className="h-[30%] w-[30%] rounded-lg font-bold p-[2%] backdrop:bg-black backdrop:opacity-70  ">
  <button autoFocus onClick={close} ><img src={cross} alt="" /></button>
  <p> <span className="text-[2rem] font-extrabold text-pri ">Contact:</span> <br /> <span className="text-[1.5rem] font-extrabold text-pri">Phone:-</span> +91 9555688600 <br /> <span className="text-[1.5rem] font-extrabold text-pri">E-Mail:-</span> connect@wyvate.com</p>
</dialog>
    </div>
  );
}
