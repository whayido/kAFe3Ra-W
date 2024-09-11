import style from "./Footer.module.scss";
import tg from "../../assets/img/link/telegram.svg";
import vk from "../../assets/img/link/vk.svg";
import odno from "../../assets/img/link/odno.svg";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <section className={style.container}>
          <div className={style.left_container}>
            <div className={style.sub}>
              <p className={style.title_blok}>Подпишись мяу</p>
              <div className={style.subb}>
                <input
                  placeholder="Почта"
                  className={style.input_footer}
                ></input>
                <button className={style.btn_footer}>Подписаться</button>
              </div>
            </div>
            <div className={style.links}>
              <p className={style.title_blok}>Полезные ссылки</p>
              <div className={style.links_a}>
                <div className={style.first_blok}>
                  <a
                    className={style.text}
                    href="https://polaruniversity.ru/obuchayushchimsya"
                  >
                    обучающимся
                  </a>
                  <a
                    className={style.text}
                    href="https://polaruniversity.ru/postupayushchim/"
                  >
                    поступающим
                  </a>
                  <a
                    className={style.text}
                    href="https://polaruniversity.ru/vypuskniku/"
                  >
                    выпускникам
                  </a>
                  <a
                    className={style.text}
                    href="https://polaruniversity.ru/sotrudniku/"
                  >
                    сотрудникам
                  </a>
                  <a
                    className={style.text}
                    href="https://polaruniversity.ru/partneram/"
                  >
                    партнерам
                  </a>
                </div>
                <div className={style.second_blok}>
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
                  <a
                    className={style.text}
                    href="https://polaruniversity.ru/news/"
                  >
                    новости
                  </a>
                  <a
                    className={style.text}
                    href="https://polaruniversity.ru/nauka/"
                  >
                    наука
                  </a>
                </div>
                <div className={style.three_blok}>
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
            </div>
          </div>
          <div className={style.rigth_container}>
            <div className={style.contact}>
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
            <div className={style.social_link_container}>
              <a className={style.link_tg} href="https://t.me/zgu_university">
                <img src={tg} className={style.img_link_tg} />
              </a>

              <a className={style.link_vk} href="https://vk.com/zgu_university">
                <img src={vk} className={style.img_link} />
              </a>

              <a
                className={style.link_od}
                href="https://ok.ru/group/58461624008889"
              >
                <img src={odno} className={style.img_link_od} />
              </a>
            </div>
          </div>
        </section>
        <section className={style.footer_end}>
          <p className={style.label}>
            &copy; 2023 ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ
            УЧРЕЖДЕНИЕ ВЫСШЕГО
            <br /> ОБРАЗОВАНИЯ «ЗАПОЛЯРНЫЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ИМ. Н.М.
            ФЕДОРОВСКОГО»
          </p>
          <div className="label_footer">
            <div className={style.creators}>
              <p>Создатель сайта</p>
            
              <a href="https://github.com/whayido" className={style.creator_d}>
                Павлов
              </a>
              <p>версия сайта 0.0.2</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
