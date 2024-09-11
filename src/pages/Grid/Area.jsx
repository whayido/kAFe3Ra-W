
import style from './Area.module.scss';
import cn from "classnames";
const Area = () => {
  return (
    <>
      <main>
        
        <section className={style.about}>
          {/*  <div className={style.first_container}> */}
          <div className={cn(style.box, style.courses)}>
            <p className={cn(style.title)}>Курсы, проводимые на кафедре:</p>
            <div className={style.items}>
              <p className={style.text_about}>искусственный интеллект</p>
              <p className={style.text_about}>машинное обучение</p>
              <p className={style.text_about}>базы данных</p>
              <p className={style.text_about}>программирование</p>
            </div>
          </div>

          <div className={cn(style.box, style.data)}>
            <p className={cn(style.title)}> Дата основания:</p>
            <p className={style.data_desc}>5.12.2002</p>
          </div>
          <div className={cn(style.box, style.age)}>
            <p className={cn(style.title)}>
              Средний возраст сотрудников кафедры:
            </p>
            <p className={style.age_desc}>36,5 лет</p>
          </div>
          {/*  </div> */}
          {/* <div className={style.second_container}> */}
          <div className={cn(style.box, style.north)}>
            <p className={style.text_about}>
              Передовой центр научных исследований и разработок в области
              информационных технологий на территории
              <span className={style.text_nn}> Крайнего Севера</span>
            </p>

            {/* <img className={style.kryg} src={newnew} /> */}
          </div>
          <div className={cn(style.box, style.NN)}>
            <p className={style.text_about}>
              Сотрудничаем с крупнейшим
              <br /> в мире производителем никеля
              <br /> и палладия компанией
              <span className={style.text_nn}> НорНикель</span>
            </p>

            {/* <img className={style.partners_icon} src={NNikel} /> */}
          </div>
          <div className={cn(style.box, style.norilsk)}>
            {/* <img src={Norilsk} /> */}
            <div className={style.text_wrapper}>Норильск</div>
          </div>

          <div className={cn(style.box, style.isit)}>
            <p className={style.isit_desc}>ИCиТ</p>
          </div>

          <div className={cn(style.box, style.zgy)}>
            {/* <img className={style.img_zgy} src={Zgy} /> */}
            <p className={style.title_title}>
              «Заполярный государственный университет Им Н.М. Федоровского»
            </p>
          </div>
          {/*  </div> */}
        </section>
      </main>
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
          <div className={cn(style.box, style.social_link)}>
            <a
              className={cn(style.box, style.link, style.tg)}
              href="https://t.me/zgu_university"
            >
              {/* <img src={tg} className={style.img_link_tg} /> */}
            </a>

            <a
              className={cn(style.box, style.link, style.vk)}
              href="https://vk.com/zgu_university"
            >
              {/* <img src={vk} className={style.img_link} /> */}
            </a>

            <a
              className={cn(style.box, style.link, style.ok)}
              href="https://ok.ru/group/58461624008889"
            >
              {/* <img src={odno} className={style.img_link_od} /> */}
            </a>
          </div>
        </section>
        <section className={style.footer_end}>
          <p className={style.label}>
            © 2023 ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ
            УЧРЕЖДЕНИЕ ВЫСШЕГО
            <br /> ОБРАЗОВАНИЯ «ЗАПОЛЯРНЫЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ИМ. Н.М.
            ФЕДОРОВСКОГО»
          </p>
          <div className="label_footer">
            <div className={style.creators}>
              <p>Создатели сайта</p>
              <a
                href="https://github.com/sha111tan"
                className={style.creator_b}
              >
                Быков
              </a>
              <a href="https://github.com/whayido" className={style.creator_d}>
                Павлов
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Area;
