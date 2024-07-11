import AboutUs from "./components/AboutUs";
import Content from "./components/content";
import Experience from "./components/Experience";
import Introduce from "./components/Introduce";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Header from "./layouts/Header";
import "./styles/App.scss";

function App() {
  return (
    <div className="app__container">
      <Header />
      <Introduce />
      <AboutUs />
      <Skills />
      <div className="app__container__section">
        <h1>DIGITAL MARKETING</h1>
      </div>
      <Experience />
      <div className="app__container__section">
        <h1>CONTENT</h1>
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
