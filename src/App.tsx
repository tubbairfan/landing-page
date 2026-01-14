import { Navbar } from "./layout/Navbar";
import { HeroSection } from "./screen/HeroSection";
import Container from "./assets/Container.svg";

const App: React.FC = () => {
  return (
    <div
      className="relative h-[900px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${Container})` }}
    >

      {/* Content on top of background */}
      <div className="relative ">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
