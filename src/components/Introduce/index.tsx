import WhileInView from "../customs/WhileInView";
import "./styles.scss";

const Introduce: React.FC = () => {
  return (
    <div className="introduce__container" id="home">
      <div className="introduce__container__wrapper">
        <div className="introduce__container__wrapper__banner">
          <WhileInView className="introduce__container__wrapper__banner__image">
            <img
              src={
                "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/357558749_979215253122108_583265778034842901_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5ZOqyphNtIMQ7kNvgGaEUss&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYBWIFn4hBMOgUjCQfWT7osxinGZGurEn0mgIP75WeLHdQ&oe=6698357D"
              }
              alt=""
            />
          </WhileInView>
          <WhileInView className="introduce__container__wrapper__banner__image">
            <img
              src={
                "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/352395167_265102392722068_1179332208525653650_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=L3WVyPiixRQQ7kNvgForGLW&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYD0W-cFzU5ddv5NR0G8ZTEkAnNxQs7qhsFy0CkUJ1FYmg&oe=66984D5D"
              }
              alt=""
            />
          </WhileInView>
          <WhileInView className="introduce__container__wrapper__banner__image">
            <img
              src={
                "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/338358553_606075114759481_35764100996871559_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xWjIELBtndoQ7kNvgGqc9Au&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYDINTgRqiCLd1AUrIOaAQZoOxYQZGKBfLye87TPzpCEEQ&oe=66983CC5"
              }
              alt=""
            />
          </WhileInView>
          <WhileInView className="introduce__container__wrapper__banner__image">
            <img
              src={
                "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/330339310_2103130599896945_8987731783387767682_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dOvszLM2FBsQ7kNvgGzT5WD&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYCoYksR1lzRIjVvjdowJ1iKCBh4FK_KZbQsXn0EFy3J6g&oe=66983AD1"
              }
              alt=""
            />
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
