import { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import StudioWeb from "../studio-web/StudioWeb";
import WhyUs from "../why-us/WhyUs";
import Portfolio from "../portfolio/Portfolio";
import Tariffs from "../tariffs/Tariffs";
import Request from "../request/Request";

const Main: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <StudioWeb />
      <WhyUs />
      <Portfolio />
      <Tariffs />
      <Request />
      <Footer />
    </div>
  );
};

export default Main;
