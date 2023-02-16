import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import LeftArrow from "../../../public/LeftArrow.png";
import RightArrow from "../../../public/RightArrow.png";

const Tariffs: FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  interface CatalogueValues {
    title: string;
    text: string;
    price: number | string;
  }

  const catalogue: CatalogueValues[] = [
    {
      title: "Catalogue",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero quia rerum dolor nemo praesentium, vel ex quidem magnam delectus? Lorem ipsum dolor sit amet, consecteturadipisicing elit. Odio dolore quibusdam iusto molestiae ut nihil laborum odit mollitia aut delectus",
      price: "??.???$",
    },
    {
      title: "Landing",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero quia rerum dolor nemo praesentium, vel ex quidem magnam delectus? Lorem ipsum dolor sit amet, consecteturadipisicing elit. Odio dolore quibusdam iusto molestiae ut nihil laborum odit mollitia aut delectus",
      price: "??.???$",
    },
    {
      title: "Online shop",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero quia rerum dolor nemo praesentium, vel ex quidem magnam delectus? Lorem ipsum dolor sit amet, consecteturadipisicing elit. Odio dolore quibusdam iusto molestiae ut nihil laborum odit mollitia aut delectus",
      price: "??.???$",
    },
    {
      title: "Individual",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero quia rerum dolor nemo praesentium, vel ex quidem magnam delectus? Lorem ipsum dolor sit amet, consecteturadipisicing elit. Odio dolore quibusdam iusto molestiae ut nihil laborum odit mollitia aut delectus",
      price: "??.???$",
    },
  ];

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className="RightArrow" onClick={onClick}>
        <Image src={RightArrow} alt="" />
      </button>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className="LeftArrow" onClick={onClick}>
        <Image src={LeftArrow} alt="" />
      </button>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 890,
        settings: {
          className: "center",
          slidesToShow: 2.332,
          slidesToScroll: 1,
          centerPadding: "-0px",
          centerMode: true,
          //   initialSlide: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1.66,
          slidesToScroll: 1,
          centerPadding: "0px",
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.83,
          slidesToScroll: 1,
          centerPadding: "-80px",
          initialSlide: 0,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current: number, next: number) => setSlideIndex(next),
  };

  return (
    <div className="tariffs">
      <div className="tariffs__container _container">
        <div data-aos="fade-up" className="tariffs__content">
          <div className="tariffs__title">Tariffs</div>
          <div className="tariffs__slider-wrap slider">
            <Slider {...settings}>
              {catalogue.map((item, index) => (
                <div
                  className={
                    index === slideIndex
                      ? "slider__item active"
                      : " slider__item"
                  }
                  key={item.title}
                >
                  <div className="slider__content">
                    <div className="slider__title">{item.title}</div>
                    <div className="slider__text">{item.text}</div>
                    <div className="slider__footer">
                      <div className="slider__price">{item.price}</div>
                      <div className="slider__button">More</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
