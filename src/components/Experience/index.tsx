import { experienceData } from "../../constants/content";
import "./style.scss";

const Experience: React.FC = () => {
  return (
    <div className="experience__container">
      <div className="experience__container__wrapper">
        <div className="experience__container__wrapper__content">
          <div className="experience__container__wrapper__content__image">
            <div className="experience__container__wrapper__content__image__item">
              <img
                src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/434660529_1121872552189710_7905809463912015063_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=D8dO58vGkeAQ7kNvgFUrhmv&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYA7K3hJpJd7Lji7_VLO8oJmnT4XLGI-BhmFQlhCcXMYOA&oe=66931C39"
                alt="Phạm Thị Ngọc Oanh"
              />
            </div>
            <div className="experience__container__wrapper__content__image__item">
              <img
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/382206624_1019032645807035_5027438540433302417_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=umDZKgonEXUQ7kNvgEm3RTu&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYDawUR6Y8SBVnSZaK5XUNa49D4bEAzNPgaqjp0uq9_IoA&oe=669334B6"
                alt="Phạm Thị Ngọc Oanh"
              />
            </div>
            <div className="experience__container__wrapper__content__image__item">
              <img
                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/357468268_979215306455436_2428388748738147199_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8x01Y2rgysYQ7kNvgHGI8lg&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYDlkoj6nsRpjx0Sxxda97suURsO2lbEXmHAnoZ46aWEWg&oe=66930948"
                alt="Phạm Thị Ngọc Oanh"
              />
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
