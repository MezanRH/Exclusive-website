import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Images from '../Images';
import baner from '../../assets/banar1.png'


const Slide = ({className}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className={className}>
      <div>
        <Images src={baner}/>
      </div>
      <div>
        <Images src={baner}/>
      </div>
      <div>
        <Images src={baner}/>
      </div>
      <div>
        <Images src={baner}/>
      </div>
      <div>
        <Images src={baner}/>
      </div>
      <div>
        <Images src={baner}/>
      </div>
      
    </Slider>
  )
}

export default Slide