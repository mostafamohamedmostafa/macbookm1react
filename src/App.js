import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav";
import { Link, Route, Routes } from "react-router-dom";

import OldVersionPage from "./components/OldVersionPage";
import NewVersionPage from "./components/NewVersionPage";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="OldVersionPage" element={<OldVersionPage />} />
        <Route path="NewVersionPage" element={<NewVersionPage />} />
      </Routes>
    </div>
  );
}

export default App;
