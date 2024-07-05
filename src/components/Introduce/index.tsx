import { Images } from "../../assets";
import "./styles.scss";

const Introduce: React.FC = () => {
  return (
    <div className="introduce__container">
      <div className="introduce__container__wrapper">
        <div className="introduce__container__banner">
          <div className="introduce__container__banner__image">
            <img src={Images.oanh_introduce_1} alt="" />
          </div>
          <div className="introduce__container__banner__image">
            <img src={Images.oanh_introduce_2} alt="" />
          </div>
          <div className="introduce__container__banner__image">
            <img src={Images.oanh_introduce_1} alt="" />
          </div>
          <div className="introduce__container__banner__image">
            <img src={Images.oanh_introduce_2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
