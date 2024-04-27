import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FaArrowRight  from "../../public/rightarrow.svg";
import FaArrowLeft  from "../../public/leftarrow.svg";
import { useState } from "react";
import gym from "../../public/gym.svg"
import salon from "../../public/salon.svg"
import tatto from "../../public/tatto.svg"
import music from "../../public/music.svg"
import takeaway from "../../public/takeaway.svg"
import zumba from "../../public/zumba.svg"
import bakery from "../../public/bakery.svg"
import foodcourt from "../../public/foodcourt.svg"
import dance from "../../public/dance.svg"


const images = [ gym, salon, bakery,tatto, takeaway, music, zumba, foodcourt, dance];
export default function SimpleSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={FaArrowRight}></img>
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={FaArrowLeft}></img>
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);

  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    autoplay: true,
    draggable:true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) =>{ 
      setImageIndex(next)    },
  };
  return (
    <div className="sm:w-[70%] w-[80%] sm:left-[14.5%] left-[9.5%] sm:h-[40vh] h-[40vh] relative">
      <Slider {...settings}>
        {images.map((img, idx) => {
          let slide = 'slide';

          if (idx === imageIndex) {
            slide = 'activeSlide';
          } else if (
            idx === imageIndex - 1 || idx === imageIndex + 1 ||
            idx === (imageIndex === 0 ? images.length - 1:imageIndex+1) ||
            idx ===(imageIndex === images.length-1 ? 0 : imageIndex-1)
          ) {
            slide = 'adjacentSlide';
          }

          return (
            // rounded-3xl h-[280px] p-[10px] = box style
            <div key={idx} className={` sliderimgbox ${slide}`}>
              <img
                src={img}
                alt={img}
                className={idx === 9 ? 'h-[400px] w-[400px]' : 'h-[350px] w-[350px] pb-[40%]'}
              />
              
            </div>
            
          );
        })}
      </Slider>
    </div>
  );
}