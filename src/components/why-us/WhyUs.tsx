import React, { FC, useEffect } from "react";
import WhyUs_2 from "../../../public/WhyUs_2.png";
import WhyUs_3 from "../../../public/WhyUs_3.png";
import WhyUs_4 from "../../../public/WhyUs_4.png";
import WhyUs_1 from "../../../public/WhyUs_1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-scroll";

const WhyUs: FC = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="why-us" id="why-us">
      <div className="why-us__container _container">
        <div className="why-us__content">
          <div data-aos="fade-right" className="why-us__title">
            <div className="why-us__maintext">Reasons to work with us</div>
            <div className="why-us__subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Facere eligendi placeat quae corrupti ullam quidem eius{" "}
              <br />
              labore explicabo mollitia voluptas.
            </div>
            <div className="why-us__button-wrap">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <button className="why-us__button">Portfolio</button>
              </Link>
            </div>
          </div>
          <div className="why-us__item-wrap">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="why-us__item item"
            >
              <div className="item__content">
                <div className="item__title">Acceptable prices</div>
                <div className="item__subtitle">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid, labore?
                </div>
                <div className="item__img">
                  <Image src={WhyUs_1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="why-us__item-wrap">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="why-us__item item"
            >
              <div className="item__content">
                <div className="item__title">We`re on time for the job!</div>
                <div className="item__subtitle">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid, labore?
                </div>
                <div className="item__img">
                  <Image className="bright" src={WhyUs_2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="why-us__item-wrap">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="why-us__item item"
            >
              <div className="item__content">
                <div className="item__title">A team of specialists</div>
                <div className="item__subtitle">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid, labore?
                </div>
                <div className="item__img">
                  <Image className="bright" src={WhyUs_3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="why-us__item-wrap">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="why-us__item item"
            >
              <div className="item__content">
                <div className="item__title">Consultation before ordering</div>
                <div className="item__subtitle">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid, labore?
                </div>
                <div className="item__img">
                  <Image className="bright" src={WhyUs_4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
