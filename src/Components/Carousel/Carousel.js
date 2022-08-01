import React, { useEffect } from 'react';
import img0 from '../../assets/image1.png';
import img1 from '../../assets/images2.jpg';
import img2 from '../../assets/images4.jpg';
import './Carousel.css';

const Carousel = () => {
  const images = [img0, img1, img2];
  images.map((img, i) => (
    <div className="item">
      <img src={`${img}`} alt={`img${i}`} />
    </div>
  ));

  useEffect(() => {
    const doms = {
      carousel: document.querySelector('.carousel'),
      indicators: document.querySelectorAll('.indicator span'),
    };

    const moveImgTo = (index) => {
      doms.carousel.style.transform = `translateX(-${index}00%)`;
      const active = document.querySelector('.indicator span.active');
      active.classList.remove('active');
      doms.indicators[index].classList.add('active');
    };

    doms.indicators.forEach(function (item, i) {
      item.onclick = function () {
        moveImgTo(i);
      };
    });
  });

  return (
    <div className="container">
      <div className="carousel">
        {images.map((img, i) => (
          <div className="item">
            <img src={`${img}`} alt={`img${i}`} />
          </div>
        ))}
      </div>
      <div className="indicator">
        {images.map((img, i) =>
          i === 0 ? <span className="active"></span> : <span></span>
        )}
      </div>
    </div>
  );
};
export default Carousel;
