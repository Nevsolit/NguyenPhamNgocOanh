import AboutUs from "./components/AboutUs";
import Content from "./components/content";
import Experience from "./components/Experience";
import Introduce from "./components/Introduce";
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
    </div>
  );
}

export default App;
