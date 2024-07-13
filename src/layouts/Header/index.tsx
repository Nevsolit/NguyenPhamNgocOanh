import IonIcon from "@reacticons/ionicons";
import { Svgs } from "../../assets";
import "./style.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavBarData } from "../../constants/header";
import useClickOutside from "../../hooks/useClickOutSide";

const Header: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const ref = useClickOutside(() => setIsShowMenu(false));

  return (
    <header className="header__container">
      <div className="header__container__wrapper">
        <img
          src={Svgs.logo}
          alt="Nguyễn Phạm Ngọc Oanh"
          className="header__container__wrapper__logo"
        />
        <nav className="header__container__wrapper__navbar">
          {NavBarData.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="header__container__wrapper__navbar__item"
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="header__container__wrapper__network">
          <button
            className="header__container__wrapper__network__menu"
            onClick={() => setIsShowMenu(!isShowMenu)}
          >
            <IonIcon name="menu" />
          </button>
          <a
            href="https://www.facebook.com/ngocoanh.ngpham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="header__container__wrapper__network__facebook"
              onClick={() => setIsShowMenu(!isShowMenu)}
            >
              <IonIcon name="logo-facebook" />
            </button>
          </a>

          <a
            href="https://www.instagram.com/oanh.ng16_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="header__container__wrapper__network__instagram"
              onClick={() => setIsShowMenu(!isShowMenu)}
            >
              <IonIcon name="logo-instagram" />
            </button>
          </a>
        </div>
      </div>

      {isShowMenu && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="header__container__drawer"
          ref={ref}
        >
          <div className="header__container__drawer__head">
            <img
              src={Svgs.logo}
              alt="Nguyễn Phạm Ngọc Oanh"
              className="header__container__wrapper__logo"
            />
          </div>
          <div className="header__container__drawer__content">
            {NavBarData.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="header__container__wrapper__navbar__item"
                onClick={() => setIsShowMenu(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
