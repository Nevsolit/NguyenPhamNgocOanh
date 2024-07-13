import { useEffect, useState } from "react";
import AboutUs from "./components/AboutUs";
import Content from "./components/content";
import WhileInView from "./components/customs/WhileInView";
import Experience from "./components/Experience";
import Introduce from "./components/Introduce";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Header from "./layouts/Header";
import "./styles/App.scss";
import Welcome from "./components/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const welcome = sessionStorage.getItem("welcome");

  console.log(welcome);

  useEffect(() => {
    if (!welcome) {
      setShowWelcome(true);
      setTimeout(() => {
        sessionStorage.setItem("welcome", "true");
        setShowWelcome(false);
      }, 3000); // 3000 ms = 3 s
    }
  }, []);

  if (showWelcome) {
    return <Welcome />;
  }

  return (
    <div className="app__container">
      <Header />
      <Introduce />
      <AboutUs />
      <Skills />
      <div className="app__container__section">
        <WhileInView className="bg-transparent">
          <h1>DIGITAL MARKETING</h1>
        </WhileInView>
      </div>
      <Experience />
      <div className="app__container__section">
        <WhileInView className="bg-transparent">
          <h1>CONTENT</h1>
        </WhileInView>
      </div>
      <Content />
      <Project />
      <footer className="app__container__footer">
        <div className="app__container__footer__wrapper">
          Copyright © 2024 Nev studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
