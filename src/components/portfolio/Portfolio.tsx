import React, { FC, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import SliderImg from "../../../public/SliderImg.png";
import Image from "next/image";

const Portfolio: FC = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 180,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1134 },
      items: 1,
      partialVisibilityGutter: 180,
    },
    tablet: {
      breakpoint: { max: 1134, min: 464 },
      items: 1,
      partialVisibilityGutter: -10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__container _container">
        <div className="portfolio__content">
          <div data-aos="fade-right" className="portfolio__text">
            <div className="portfolio__title">Our portfolio</div>
            <div className="portfolio__subtitle">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
              Maxime reiciendis earum, fuga excepturi <br />
              ducimus ratione!
            </div>
            <div className="portfolio__link">
              <button className="portfolio__btn">Computer versions</button>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="portfolio__slider-wrap">
          <Carousel
            responsive={responsive}
            focusOnSelect={true}
            containerClass="carousel-container"
            infinite={true}
            partialVisible={true}
          >
            <div className="slider__img">
              <Image className="slider-image" src={SliderImg} alt="" />
            </div>
            <div className="slider__img">
              <Image className="slider-image" src={SliderImg} alt="" />
            </div>
            <div className="slider__img">
              <Image className="slider-image" src={SliderImg} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
