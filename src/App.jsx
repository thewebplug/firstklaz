import logo from "./logo.svg";
import "./App.scss";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useLayoutEffect, useRef } from "react";

function App() {
  const scrollRef = useRef(null);
  const pathname = useLocation();




  return (
    <div className="App" 
    // data-scroll-container
    >
      <Routes>
        <Route path="/" element={<Home scroll={scrollRef.current} />} />
        <Route path="*" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
