import Header from "./components/Header";
import About from "./components/About";
import AWS from "./components/AWS";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    function setSectionHeight() {
      const vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    setSectionHeight();
    window.addEventListener("resize", setSectionHeight);

    return () => {
      window.removeEventListener("resize", setSectionHeight);
    };
  }, []);

  return (
    <>
      <Header />
      <About />
      <Projects />
      <AWS />
      <Footer />
    </>
  );
}

export default App;
