import { Navbar } from "./layout/Navbar";
import { HeroSection } from "./screen/HeroSection";
import Container from "./assets/Container.svg";
import bg2 from "./assets/bg2.svg"
const App: React.FC = () => {
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
    </>


  );
};

export default App;
