import React from "react";
import style from "./Staff.module.scss";
import Screen from "../../assets/img/media/staff_photo.svg";
import FadeIn from "../../components/FadeIn";
/* import ArrowR from "../../assets/img/media/arrow-link.svg";
import ArrowL from "../../assets/img/media/arrow-link2.svg"; */
import Belyaev from "../../assets/img/staff/Belyev.png";
import Petrov from "../../assets/img/staff/Petrov.png";
import Dyptan from "../../assets/img/staff/Dyptan.png";
import Popkova from "../../assets/img/staff/Popkova.png";
import Faddeenkov from "../../assets/img/staff/Fadeenkov.png";
import Bodryakova from "../../assets/img/staff/Bodryakova.png";
const StaffCard = () => {
  return (
    <div className={style.page}>
      <section>
        <div className="image">
          <img className={style.img_staff} src={Screen} />

          <div className={style.box_desc}>
            <p className={style.desc}>
              <span className={style.text_blue}>{"<h1> "}</span>
              На кафедре работают высококвалифицированные преподаватели и
              научные сотрудники, которые постоянно ведут исследования в
              различных областях it и публикуют свои научные работы в ведущие
              международных журналах
              <span className={style.text_blue}>{"  </h1>"}</span>
            </p>
          </div>
        </div>
      </section>
      <section className={style.avg}>
        <FadeIn delay={0.2} direction="right" padding fullwidth>
          <p className={style.title}>Преподаватели кафедры</p>
          <div className={style.staff_box}>
            <div>
              <div className={style.staff_card}>
                <div className={style.staff_name}>
                  <p className={style.name}>Беляев</p>
                  <p className={style.surname}>Игорь Сергеевич</p>
                </div>

                <div className={style.box_img}>
                  <img src={Belyaev} alt={name} className={style.staff_img} />
                  <div className={style.box_blur}>доцент</div>
                </div>
              </div>
            </div>
            <div>
              <div className={style.staff_card}>
                <div className={style.staff_name}>
                  <p className={style.name}>Петров</p>
                  <p className={style.surname}>Алексей Михайлович</p>
                </div>

                <div className={style.box_img}>
                  <img src={Petrov} alt={name} className={style.staff_img} />
                  <div className={style.box_blur}>доцент</div>
                </div>
              </div>
            </div>
            <div>
              <div className={style.staff_card}>
                <div className={style.staff_name}>
                  <p className={style.name}>Дыптан</p>
                  <p className={style.surname}>Елена Арнольдовна</p>
                </div>

                <div className={style.box_img}>
                  <img src={Dyptan} alt={name} className={style.staff_img} />
                  <div className={style.box_blur}>старший преподаватель</div>
                </div>
              </div>
            </div>
            <div>
              <div className={style.staff_card}>
                <div className={style.staff_name}>
                  <p className={style.name}>Фаддеенков</p>
                  <p className={style.surname}>Андрей Владимирович</p>
                </div>

                <div className={style.box_img}>
                  <img
                    src={Faddeenkov}
                    alt={name}
                    className={style.staff_img}
                  />
                  <div className={style.box_blur}>доцент</div>
                </div>
              </div>
            </div>
            <div>
              <div className={style.staff_card}>
                <div className={style.staff_name}>
                  <p className={style.name}>Попкова</p>
                  <p className={style.surname}>Алла Алексеевна</p>
                </div>

                <div className={style.box_img}>
                  <img src={Popkova} alt={name} className={style.staff_img} />
                  <div className={style.box_blur}>доцент</div>
                </div>
              </div>
            </div>
            <div>
              <div className={style.staff_card}>
                <div className={style.staff_name}>
                  <p className={style.name}>Бодрякова</p>
                  <p className={style.surname}>Людмила Николаевна</p>
                </div>

                <div className={style.box_img}>
                  <img
                    src={Bodryakova}
                    alt={name}
                    className={style.staff_img}
                  />
                  <div className={style.box_blur}>доцент</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default StaffCard;
