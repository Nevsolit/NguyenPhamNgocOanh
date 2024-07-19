import { Images } from "../../assets";
import { experienceData } from "../../constants/content";
import "./style.scss";

const Experience: React.FC = () => {
  return (
    <div className="experience__container" id="experience">
      <div className="experience__container__wrapper">
        <div className="experience__container__wrapper__content">
          <div className="experience__container__wrapper__content__image">
            <div className="experience__container__wrapper__content__image__item">
              <img src={Images.oanh_experience1} alt="Phạm Thị Ngọc Oanh" />
            </div>
            <div className="experience__container__wrapper__content__image__item">
              <img src={Images.oanh_experience2} alt="Phạm Thị Ngọc Oanh" />
            </div>
            <div className="experience__container__wrapper__content__image__item">
              <img src={Images.oanh_experience3} alt="Phạm Thị Ngọc Oanh" />
            </div>
          </div>
          <div className="experience__container__wrapper__content__project">
            <h1>Experience</h1>
            <div className="experience__container__wrapper__content__project__list">
              {experienceData.map((item) => (
                <div
                  className="experience__container__wrapper__content__project__list__item"
                  key={item.title}
                >
                  <div className="experience__container__wrapper__content__project__list__item__time">
                    <div className="experience__container__wrapper__content__project__list__item__time__circel"></div>
                    <div className="experience__container__wrapper__content__project__list__item__time__line"></div>
                    <p>{item.time}</p>
                  </div>
                  <div className="experience__container__wrapper__content__project__list__item__content">
                    <h2>{item.title}</h2>
                    {item.tasks.map((task) => (
                      <p key={task.label}>
                        <span>{task.label} :</span> {task.description}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
