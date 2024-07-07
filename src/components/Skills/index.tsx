import { dataSkills } from "../../constants/content";
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
            {dataSkills.network.map((network) => (
              <p key={network.label}>
                <span>{network.label} :</span> {network.text}
              </p>
            ))}
          </div>
        </div>

        <div className="skills__container__wrapper__item">
          <div className="skills__container__wrapper__item__head">
            <div className="skills__container__wrapper__item__head__circel">
              <div className="skills__container__wrapper__item__head__circel__box"></div>
              <div className="skills__container__wrapper__item__head__circel__line"></div>
            </div>
            <h2>Software Skills</h2>
          </div>
          <div className="skills__container__wrapper__item__content">
            {dataSkills.softwareSkill.map((skills) => (
              <p key={skills}>{skills}</p>
            ))}
          </div>
        </div>

        <div className="skills__container__wrapper__item">
          <div className="skills__container__wrapper__item__head">
            <div className="skills__container__wrapper__item__head__circel">
              <div className="skills__container__wrapper__item__head__circel__box"></div>
              <div className="skills__container__wrapper__item__head__circel__line"></div>
            </div>
            <h2>Education</h2>
          </div>
          <div className="skills__container__wrapper__item__content">
            {dataSkills.education.map((education) => (
              <div key={education.label}>
                <h1>{education.label}</h1>
                <p>{education.subject}</p>
                <div className="skills__container__wrapper__item__content__time">
                  <span>{education.startAt}</span>
                  <span>{education.endAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__container__wrapper__item">
          <div className="skills__container__wrapper__item__head">
            <div className="skills__container__wrapper__item__head__circel">
              <div className="skills__container__wrapper__item__head__circel__box"></div>
              <div className="skills__container__wrapper__item__head__circel__line"></div>
            </div>
            <h2>Creative Feild</h2>
          </div>
          <div className="skills__container__wrapper__item__content">
            {dataSkills.creativeFeild.map((items) => (
              <div
                className="skills__container__wrapper__item__content__creative"
                key={items}
              >
                {items}
              </div>
            ))}
          </div>
        </div>

        <div className="skills__container__wrapper__item">
          <div className="skills__container__wrapper__item__head">
            <div className="skills__container__wrapper__item__head__circel">
              <div className="skills__container__wrapper__item__head__circel__box"></div>
              <div className="skills__container__wrapper__item__head__circel__line"></div>
            </div>
            <h2>Languages</h2>
          </div>
          <div className="skills__container__wrapper__item__content">
            {dataSkills.language.map((language) => (
              <p key={language}>{language}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
