import { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import StudioWeb from "../studio-web/StudioWeb";
import WhyUs from "../why-us/WhyUs";

const Main: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <StudioWeb />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Main;
