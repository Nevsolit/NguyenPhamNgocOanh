import React from "react";
import "./style.scss";
import { dataAboutUs } from "../../constants/content";
import WhileInView from "../customs/WhileInView";

const AboutUs: React.FC = () => {
  return (
    <div className="about_us__container" id="aboutMe">
      <div className="about_us__container__wrapper">
        <div className="about_us__container__wrapper__image">
          <WhileInView>
            <h1 className="about_us__container__wrapper__image__title ">
              About Us
            </h1>
          </WhileInView>
          <WhileInView className="about_us__container__wrapper__image__content">
            <img
              src={
                "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/381426815_1019032675807032_7628043312991855483_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bffroIQWPHoQ7kNvgG5A6iY&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYAP17tTuoy4p1WouX7KK3OglWqQLTFtlrdfCiQ34qBhLg&oe=66983AA0"
              }
              alt=""
            />
          </WhileInView>
        </div>
        <div className="about_us__container__wrapper__content">
          <WhileInView delay={2}>
            <h1 className="about_us__container__wrapper__content__title">
              About Us
            </h1>
          </WhileInView>
          <WhileInView delay={3}>
            <p>{dataAboutUs.aboutUs}</p>
          </WhileInView>
          <WhileInView
            className="about_us__container__wrapper__content__contact"
            delay={4}
          >
            <p>{dataAboutUs.email}</p>
            <p>{dataAboutUs.phone}</p>
          </WhileInView>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
