import React, { useState } from "react";
import style from "./Staff.module.scss";
import Screen from "../../assets/img/media/staff_photo.svg";
import FadeIn from "../../components/FadeIn";
import ArrowR from "../../assets/img/media/arrow-link.svg";
import ArrowL from "../../assets/img/media/arrow-link2.svg";
const StaffCard = ({ name, img, post, link, degree, surname }) => {
  return (
    <div>
      <div className={style.staff_card}>
        <div className={style.staff_name}>
          <p className={style.name}>{name}</p>
          <p className={style.surname}>{surname}</p>
        </div>

        <div className={style.box_img}>
          <img src={img} alt={name} className={style.staff_img} />
          <div className={style.box_blur}>{post}</div>
        </div>
      </div>
    </div>
  );
};

const StaffList = () => {
  const data = {
    staff: [
      {
        id: 1,
        name: "Беляев",
        surname: "Игорь Сергеевич",
        img: "/src/assets/img/staff/Belyev.png",
        post: "доцент",
        link: "47-39-18",
        degree: "кандидат экономических наук",
      },
      {
        id: 2,
        name: "Дыптан",
        surname: "Елена Арнольдовна",
        img: "/src/assets/img/staff/Dyptan.png",
        post: "старший преподаватель",
        link: "7(3919)473918",
      },
      {
        id: 3,
        name: "Петров",
        surname: "Алексей Михайлович",
        img: "/src/assets/img/staff/Petrov.png",
        post: "доцент",
        link: "47-39-18",
      },
      {
        id: 4,
        name: "Фаддеенков",
        surname: "Андрей Владимирович",
        img: "/src/assets/img/staff/Fadeenkov.png",
        post: "доцент",
        link: "47-39-18",
        degree: "кандидат технических наук",
      },
      {
        id: 5,
        name: "Попкова",
        surname: "Алла Алексеевна",
        img: "/src/assets/img/staff/Popkova.png",
        post: "доцент",
        link: "47-39-18",
        degree: "кандидат технических наук",
      },

      {
        id: 7,
        name: "Бодрякова",
        surname: "Людмила Николаевна",
        img: "/src/assets/img/staff/Bodryakova.png",
        post: "доцент",
        link: "47-39-18",
      },
    ],
  };

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);

  const handlePrevious = () => {
    setStartIndex(startIndex - 3);
    setEndIndex(endIndex - 3);
  };

  const handleNext = () => {
    setStartIndex(startIndex + 3);
    setEndIndex(endIndex + 3);
  };

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
            {data.staff.slice(startIndex, endIndex + 1).map((item, index) => (
              <StaffCard
                key={index}
                name={item.name}
                surname={item.surname}
                img={item.img}
                post={item.post}
                link={item.link}
                degree={item.degree}
              />
            ))}
          </div>
          <div>
            {startIndex > 0 && (
              <img
                src={ArrowR}
                onClick={handlePrevious}
                className={style.arrowr}
              ></img>
            )}
            {endIndex < data.staff.length - 1 && (
              <img
                src={ArrowL}
                onClick={handleNext}
                className={style.arrowl}
              ></img>
            )}
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default StaffList;
