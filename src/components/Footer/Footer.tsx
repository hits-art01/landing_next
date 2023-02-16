import React, { FC } from "react";
import Image from "next/image";
import TgImg from "../../../public/TGimg.png";
import GmailImg from "../../../public/GmailImg.png";
import MobImg from "../../../public/Mobileimg.png";

const Footer: FC = () => {
  return (
    <div className="footer" id="contacts">
      <div className="footer__container _container">
        <div className="footer__content">
          <div className="footer__title">Contacts</div>
          <div className="footer__contacts">
            <div className="footer__contact">
              <Image className="footer__logo" src={MobImg} alt="" />
            </div>
            <div className="footer__contact">
              <Image className="footer__logo" src={TgImg} alt="" />
            </div>
            <div className="footer__contact">
              <Image className="footer__logo" src={GmailImg} alt="" />
            </div>
          </div>
          <div className="footer__subtitle">© 2019–2023`</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
