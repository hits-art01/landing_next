import React, { FC } from "react";
import Burger from "../../../public/burger.png";
import Logo from "../../../public/Logo.png";
import { Link } from "react-scroll";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__logo">
          <Image src={Logo} alt="" />
        </div>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link
                to="why-us"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu__link"
              >
                Why us?
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu__link"
              >
                Portfolio
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu__link"
              >
                Contacts
              </Link>
            </li>
          </ul>
          <Link
            to="request"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="menu__link"
          >
            <button className="menu__order-btn">To Order</button>
          </Link>
          <div className="menu__burger">
            <Image src={Burger} alt="" className="burger" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
