import React, { Component } from 'react';
import Slider from 'react-slick';
import './SimpleSlider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: true,
    };
    return (
      <div className="SimpleSlider">
        <Slider {...settings}>
          <div className="imageContainer">
            {/* <button type="button" class="slick-prev"></button> */}
            <img className="sliderImg" src="/images/picture1.jpg" alt="사진" />
          </div>
          {SLIDER.map((slider) => {
            return (
              <div>
                <img src={slider.img} key={slider.idx} alt="슬라이더 이미지" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

const SLIDER = [
  { img: '/images/picture2.jpg' },
  { img: '/images/picture3.jpg' },
  { img: '/images/picture4.jpg' },
  { img: '/images/picture5.jpg' },
];
