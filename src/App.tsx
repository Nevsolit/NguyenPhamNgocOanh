import AboutUs from "./components/AboutUs";
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
    </div>
  );
}

export default App;
