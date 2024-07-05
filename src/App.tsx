import Introduce from "./components/Introduce";
import Header from "./layouts/Header";
import "./styles/App.scss";

function App() {
  return (
    <div className="app__container">
      <Header />
      <Introduce />
    </div>
  );
}

export default App;
