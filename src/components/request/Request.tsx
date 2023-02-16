import React, { FC, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Request: FC = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="request" id="request">
      <div className="request__container _container">
        <div data-aos="fade-right" className="request__content">
          <div className="request__title">Leave a request</div>
          <form autoComplete="off" className="request__form">
            <div className="request__input-cont">
              <div className="request__input-title">Your name</div>
              <input
                autoComplete="off"
                type="text"
                className="request__input"
              />
            </div>
            <div className="request__input-cont">
              <div className="request__input-title">Your telephone number</div>
              <input type="number" className="request__input" />
            </div>
            <div className="request__input-cont">
              <div className="request__input-title">Budget for the website</div>
              <input type="text" className="request__input" />
            </div>
            <div className="request__input-cont">
              <div className="request__input-title">Your E-MAIL address</div>
              <input type="email" className="request__input" />
            </div>
            <div className="request__input-cont">
              <div className="request__input-title">
                Your comment (optional)
              </div>
              <input type="text" className="request__input" />
            </div>
            <div className="request__form-button">
              <button className="request__button">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;
