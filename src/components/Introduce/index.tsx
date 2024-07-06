import { Images } from "../../assets";
import "./styles.scss";

const Introduce: React.FC = () => {
  return (
    <div className="introduce__container">
      <div className="introduce__container__wrapper">
        <div className="introduce__container__wrapper__banner">
          <div className="introduce__container__wrapper__banner__image">
            <img src={Images.oanh_introduce_1} alt="" />
          </div>
          <div className="introduce__container__wrapper__banner__image">
            <img src={Images.oanh_introduce_2} alt="" />
          </div>
          <div className="introduce__container__wrapper__banner__image">
            <img src={Images.oanh_introduce_1} alt="" />
          </div>
          <div className="introduce__container__wrapper__banner__image">
            <img src={Images.oanh_introduce_2} alt="" />
          </div>
        </div>
        <div className="introduce__container__wrapper__info">
          <h1>Porfolio</h1>
          <p>Digital Malketing - Nguyễn Phạm Ngọc Oanh</p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
