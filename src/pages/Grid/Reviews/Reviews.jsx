import style from "./Reviews.module.scss";
import cn from "classnames";

const Reviews = () => {
  return (
    <>
      <footer className={style.footer}>
        <section className={style.container}>
          <div className={cn(style.box, style.subscribe)}>
            <p className={style.title_blok}>Подпишись мяу</p>
            <div className={style.subb}>
              <input placeholder="Почта" className={style.input_footer}></input>
              <button className={style.btn_footer}>Подписаться</button>
            </div>
          </div>
          <div className={cn(style.box, style.useful_links)}>
            <p className={style.title_blok}>Полезные ссылки</p>
            <div className={style.link_a}>
              <a
                className={style.text}
                href="https://polaruniversity.ru/obuchayushchimsya"
              >
                обучающимся
              </a>
              <a
                className={style.text}
                href="https://polaruniversity.ru/sotrudniku/"
              >
                сотрудникам
              </a>

              <a
                className={style.text}
                href="https://polaruniversity.ru/vypuskniku/"
              >
                выпускникам
              </a>
              <a
                className={style.text}
                href="https://polaruniversity.ru/postupayushchim/"
              >
                поступающим
              </a>
              <a
                className={style.text}
                href="https://polaruniversity.ru/partneram/"
              >
                партнерам
              </a>

              <a
                className={style.text}
                href="https://polaruniversity.ru/about/"
              >
                университет
              </a>
              <a
                className={style.text}
                href="https://polaruniversity.ru/obrazovanie/"
              >
                образование
              </a>
              <a className={style.text} href="https://polaruniversity.ru/news/">
                новости
              </a>
              <a
                className={style.text}
                href="https://polaruniversity.ru/nauka/"
              >
                наука
              </a>

              <a
                className={style.text}
                href="https://polaruniversity.ru/protivodeystvie-korruptsiy/"
              >
                противодействие коррупции
              </a>
              <a
                className={style.text}
                href="https://polaruniversity.ru/tsentr-trudoustroystva/"
              >
                трудоустройство
              </a>
              <a className={style.text} href="https://obrnadzor.gov.ru/">
                рособрнадзор
              </a>
              <a
                className={style.text}
                href="https://polaruniversity.ru/antiterror/"
              >
                антитеррор
              </a>
            </div>
          </div>

          <div className={cn(style.box, style.contacts)}>
            <p className={style.title_blok}>Контакты</p>

            <a href="mailto:FEEU@norvuz.ru" className={style.text}>
              Email: FEEU@norvuz.ru
            </a>
            <p className={style.text}>
              Для корреспонденции: 663310, Красноярский край, г. Норильск
              <br /> ул. 50 лет Октября, 7, НГИИ,
              <br /> ФЭЭиУ, аудитория 305а
            </p>
            <a href="tel:+73919473906" className={style.text}>
              Телефон: 8 (3919) 47-39-06
            </a>
          </div>

          <a
            className={cn(style.box, style.link, style.tg)}
            href="https://t.me/zgu_university"
          ></a>

          <a
            className={cn(style.box, style.link, style.vk)}
            href="https://vk.com/zgu_university"
          ></a>

          <a
            className={cn(style.box, style.link, style.ok)}
            href="https://ok.ru/group/58461624008889"
          ></a>
        </section>
      </footer>
    </>
  );
};

export default Reviews;
