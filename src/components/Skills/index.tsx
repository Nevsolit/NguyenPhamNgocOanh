import { dataSkills } from "../../constants/content";
import WhileInView from "../customs/WhileInView";
import "./style.scss";

const Skills: React.FC = () => {
  return (
    <div className="skills__container" id="skills">
      <WhileInView className="skills__container__title">
        <h1>Skills</h1>
      </WhileInView>
      <div className="skills__container__wrapper">
        <WhileInView className="skills__container__wrapper__item" delay={2}>
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
        </WhileInView>

        <WhileInView className="skills__container__wrapper__item" delay={3}>
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
        </WhileInView>

        <WhileInView className="skills__container__wrapper__item" delay={4}>
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
        </WhileInView>

        <WhileInView className="skills__container__wrapper__item" delay={5}>
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
        </WhileInView>

        <WhileInView className="skills__container__wrapper__item" delay={6}>
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
        </WhileInView>
      </div>
    </div>
  );
};

export default Skills;
