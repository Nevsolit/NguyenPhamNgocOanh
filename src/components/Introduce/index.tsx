import { Images } from "../../assets";
import WhileInView from "../customs/WhileInView";
import "./styles.scss";

const Introduce: React.FC = () => {
  return (
    <div className="introduce__container" id="home">
      <div className="introduce__container__wrapper">
        <div className="introduce__container__wrapper__banner">
          <WhileInView className="introduce__container__wrapper__banner__image">
            <img src={Images.oanh_introduce_1} alt="" />
          </WhileInView>
          <WhileInView className="introduce__container__wrapper__banner__image">
            <img src={Images.oanh_introduce_2} alt="" />
          </WhileInView>
          <WhileInView className="introduce__container__wrapper__banner__image">
            <img src={Images.oanh_introduce_3} alt="" />
          </WhileInView>
          <WhileInView className="introduce__container__wrapper__banner__image">
            <img src={Images.oanh_introduce_4} alt="" />
          </WhileInView>
        </div>
        <div className="introduce__container__wrapper__info">
          <WhileInView delay={2}>
            <h1>Portfolio</h1>
          </WhileInView>
          <WhileInView delay={3}>
            <p>Digital Malketing - Nguyễn Phạm Ngọc Oanh</p>
          </WhileInView>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
