import "./style.scss";

const Experience: React.FC = () => {
  return (
    <div className="experience__container">
      <div className="experience__container__wrapper">
        <div className="experience__container__wrapper__content">
          <div className="experience__container__wrapper__content__image">
            <div className="experience__container__wrapper__content__image__item"></div>
            <div className="experience__container__wrapper__content__image__item"></div>
            <div className="experience__container__wrapper__content__image__item"></div>
          </div>
          <div className="experience__container__wrapper__content__project">
            <h1>Experience</h1>
            <div className="experience__container__wrapper__content__project__list">
              <div className="experience__container__wrapper__content__project__list__item">
                <div className="experience__container__wrapper__content__project__list__item__time">
                  <div className="experience__container__wrapper__content__project__list__item__time__circel"></div>
                  <div className="experience__container__wrapper__content__project__list__item__time__line"></div>
                  <p>2021 - 2022</p>
                </div>
                <div className="experience__container__wrapper__content__project__list__item__conetent">
                  <h2>But I must explain to you how all this mistaken idea</h2>
                  <p>
                    <span>Project introduction :</span> At vero eos et accusamus
                    et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident,
                    similique sunt in culpa qui officia deserunt mollitia animi,
                    id est laborum et dolorum fuga. Et harum quidem rerum
                    facilis est et expedita distinctio. Nam libero tempore, cum
                    soluta nobis est eligendi optio cumque nihil impedit quo
                    minus id quod
                  </p>
                  <p>
                    <span>Task :</span> At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti.
                  </p>
                  <p>
                    <span>Link :</span> https://www.pinterest.com/.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
