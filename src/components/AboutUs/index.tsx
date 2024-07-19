import React from "react";
import "./style.scss";
import { dataAboutUs } from "../../constants/content";
import WhileInView from "../customs/WhileInView";
import { Images } from "../../assets";

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
            <img src={Images.oanh_about} alt="" />
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
