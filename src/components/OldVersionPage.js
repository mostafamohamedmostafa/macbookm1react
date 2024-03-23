import Nav from "./Nav";
import Hero from "./Hero";
import Monechip from "./Monechip";
import Cpu from "./Cpu";
import Gpu from "./Gpu";
import Battery from "./Battery";
import Machinelearning from "./Machinelearning";
import Macos from "./Macos";
import Retinadisplayintro from "./Retinadisplay";
import Cameraintro from "./Camera";
import MagicKeyboardintro from "./MagicKeyboard";
import Connectivityintro from "./Connectivity";
import Ar from "./Ar";
import "./Oldpagecss.css";

function OldVersionPage() {
  return (
    <div className="OldVersionPage">
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
      <Ar />
    </div>
  );
}

export default OldVersionPage;
