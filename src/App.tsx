import { Navbar } from "./layout/Navbar";
import { HeroSection } from "./screen/HeroSection";
import Container from "./assets/Container.svg";

const App: React.FC = () => {
  return (
    <div
      className="relative h-500px bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${Container})` }}
    >

      <div className="relative ">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
