
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Monechip from "./components/Monechip";
import Cpu from "./components/Cpu";
import Gpu from "./components/Gpu";
import Battery from "./components/Battery";
import Machinelearning from "./components/Machinelearning";
import Macos from "./components/Macos";
import Retinadisplayintro from "./components/Retinadisplay"
import Cameraintro from "./components/Camera";
import MagicKeyboardintro from "./components/MagicKeyboard";
import Connectivityintro from "./components/Connectivity";
import Ar from "./components/Ar";
function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (


    <div className="App">
      
      <Hero />
      <Monechip />
      <Cpu />
      <Gpu />
      <Battery />
      <Machinelearning />
      <Macos />
      <Retinadisplayintro />
      <Cameraintro />
      <MagicKeyboardintro />
      <Connectivityintro />
      <Ar/>

    </div>
  );
}

export default App;
