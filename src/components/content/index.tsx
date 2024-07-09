import { contentData } from "../../constants/content";
import "./style.scss";

const Content: React.FC = () => {
  return (
    <div className="content__container">
      <div className="content__container__wrapper">
        {contentData.map((item, index) => (
          <div className="content__container__wrapper__item" key={index}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
