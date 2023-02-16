import React, { FC } from "react";
import Image from "next/image";
import Stick from "../../../public/Rectangle 3.png";

const StudioWeb: FC = () => {
  return (
    <div className="studio-web">
      <div className="studio-web__container _container">
        <div className="studio-web__content">
          <div className="studio-web__title">
            <div className="studio-web__main">WEBSITE DEVELOPMENT</div>
            <div className="studio-web__subtitle">FOR YOUR BUSINESS</div>
          </div>
          <div className="studio-web__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            placeat. Illo earum adipisci esse nemo assumenda porro voluptate
            deleniti expedita?
          </div>
          <div className="studio-web__link">
            <button className="studio-web__btn">More</button>
          </div>
        </div>
      </div>
      <div className="stick">
        <div className="stick-cont">
          <Image src={Stick} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StudioWeb;
