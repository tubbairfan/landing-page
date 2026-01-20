import { Navbar } from "../../components/Navbar";
import { HeroSection } from "./HeroSection";
import {Partner} from "./Partner"
import {Stats} from "./Stats"
import Container from "../../assets/Container.svg";
import bg2 from "../../assets/bg2.svg"
import { Subscribe } from "./Journey";
import { Products } from "./Products";

export const Landing_page: React.FC = () => {
  return (

    <>
      <div className="absolute inset-0 bg-gray-100  h-[600px]">
        <div
          className="relative h-[400px] bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${Container})` }}
        >
        </div>
        <div
          className="relative h-[200px] bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${bg2})` }}
        >
        </div>
      </div>
      <div className="relative ">
        <Navbar />
        <HeroSection />
      </div>
      <Partner/>
      <Stats/>
      <Subscribe/>
      <Products/>
    </>


  );
};

