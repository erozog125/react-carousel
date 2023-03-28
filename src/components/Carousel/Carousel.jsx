import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const img1 = "https://res.cloudinary.com/erpersonalprojects/image/upload/v1677238404/samples/ecommerce/Logo_hglus0.jpg";
const img2 = "https://res.cloudinary.com/erpersonalprojects/image/upload/v1674503975/cld-sample-3.jpg";
const img3 = "https://res.cloudinary.com/erpersonalprojects/image/upload/v1674503975/cld-sample-2.jpg";
const img4 = "https://res.cloudinary.com/erpersonalprojects/image/upload/v1674498833/task-project/tareas_a2atm8.jpg";
const img5 = "https://res.cloudinary.com/erpersonalprojects/image/upload/v1674503975/cld-sample-5.jpg";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="img1" />
      </div>
      <div>
          <img src={img2} alt="img2" />
      </div>
      <div>
        <img src={img3} alt="img3" />
      </div>
      <div>
      <img src={img4} alt="img4" />
      </div>
      <div>
      <img src={img5} alt="img5" />
      </div>
    </Slider>
  );
};


