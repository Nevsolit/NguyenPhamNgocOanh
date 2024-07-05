import { Svgs } from "../../assets";
import Drawer from "../../components/customs/Drawer";
import "./style.scss";

const Header: React.FC = () => {
  return (
    <header className="header__container">
      <div className="header__container__wrapper">
        <img
          src={Svgs.logo}
          alt="Nguyễn Phạm Ngọc Oanh"
          className="header__container__wrapper__logo"
        />
        <nav className="header__container__wrapper__navbar">
          <a href="">Home</a>
          <a href="">About me</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Experience</a>
        </nav>
        <div className="header__container__wrapper__network">
          <Drawer />
        </div>
      </div>
    </header>
  );
};

export default Header;
