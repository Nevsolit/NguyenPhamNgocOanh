import "./style.scss";

const Skills: React.FC = () => {
  return (
    <div className="skills__container">
      <div className="skills__container__wrapper">
        <div className="skills__container__wrapper__item">
          <div className="skills__container__wrapper__item__head">
            <div className="skills__container__wrapper__item__head__circel">
              <div className="skills__container__wrapper__item__head__circel__box"></div>
              <div className="skills__container__wrapper__item__head__circel__line"></div>
            </div>
            <h2>Network</h2>
          </div>
          <div className="skills__container__wrapper__item__content">
            <p>
              <span>Instagram :</span> https://www.instagram.com
            </p>
            <p>
              <span>Instagram :</span> https://www.instagram.com
            </p>
            <p>
              <span>Instagram :</span> https://www.instagram.com
            </p>
            <p>
              <span>Instagram :</span> https://www.instagram.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
