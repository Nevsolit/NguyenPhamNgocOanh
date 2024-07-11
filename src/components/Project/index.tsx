import { dataProject } from "../../constants/content";
import "./style.scss";

const Project: React.FC = () => {
  return (
    <div className="project__container">
      <div className="project__container__wrapper">
        {dataProject.map((item, index) => (
          <div
            className={`${
              index % 2 === 0
                ? "project__container__wrapper__item"
                : "project__container__wrapper__item_second "
            }`}
            key={`project-${index}`}
          >
            <div className="project__container__wrapper__item__image">
              <div className="project__container__wrapper__item__image__picture">
                <img src={item.thumnail} alt="Nguyễn Phạm Ngọc Oanh" />
              </div>
            </div>
            <div className="project__container__wrapper__item__content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
