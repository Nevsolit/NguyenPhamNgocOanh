import { experienceData } from "../../constants/content";
import "./style.scss";

const Experience: React.FC = () => {
  return (
    <div className="experience__container" id="experience">
      <div className="experience__container__wrapper">
        <div className="experience__container__wrapper__content">
          <div className="experience__container__wrapper__content__image">
            <div className="experience__container__wrapper__content__image__item">
              <img
                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/376823636_1012874673089499_5525791454420561587_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sCNt27n9USUQ7kNvgHeTeXX&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYCD-SNLc5eDTxFFOw94x_6RDeibuZk21ih4SQ1azW66zg&oe=66998BF6"
                alt="Phạm Thị Ngọc Oanh"
              />
            </div>
            <div className="experience__container__wrapper__content__image__item">
              <img
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/357391303_979215593122074_8536965025429422289_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Pmbng4IpgvcQ7kNvgEbe9RH&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYCRRDuO025lu_IqHPscJap3tNnFYfz9wwHGD5yJoArsfA&oe=66999E47"
                alt="Phạm Thị Ngọc Oanh"
              />
            </div>
            <div className="experience__container__wrapper__content__image__item">
              <img
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/357472190_979215279788772_3817772993204507598_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MB7qXNfXPxgQ7kNvgFttQQK&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYDpK8obG5HBmM21JFswYPhJZl3Ag-aIpaWIBTFpm2NuDA&oe=66998648"
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
