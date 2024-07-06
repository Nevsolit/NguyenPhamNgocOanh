import React from "react";
import "./style.scss";
import { Images } from "../../assets";
import { dataAboutUs } from "../../constants/content";

const AboutUs: React.FC = () => {
  return (
    <div className="about_us__container">
      <div className="about_us__container__wrapper">
        <div className="about_us__container__wrapper__image">
          <h1 className="about_us__container__wrapper__image__title ">
            About Us
          </h1>
          <div className="about_us__container__wrapper__image__content">
            <img src={Images.oanh_introduce_1} alt="" />
          </div>
        </div>
        <div className="about_us__container__wrapper__content">
          <h1 className="about_us__container__wrapper__content__title">
            About Us
          </h1>
          <p>{dataAboutUs.aboutUs}</p>
          <div className="about_us__container__wrapper__content__contact">
            <p>{dataAboutUs.email}</p>
            <p>{dataAboutUs.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
