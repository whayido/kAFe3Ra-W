import style from "./Home.module.scss";
import Zgy from "../../assets/img/media/zgy.svg";
import tg from "../../assets/img/link/telegram.svg";
import vk from "../../assets/img/link/vk.svg";
import circle1 from "../../assets/img/fill/9.gif";
import circle2 from "../../assets/img/fill/4.gif";
import arrow from "../../assets/img/media/arrow-link.svg";
import box from "../../assets/img/media/greenbox.svg";
import social from "../../assets/img/media/group.svg";
import NN from "../../assets/img/media/NN-grey.png";
import NNikel from "../../assets/img/media/NN.svg";
import Norilsk from "../../assets/img/media/Norilsk.svg";
import Aph from "../../assets/img/media/aph.png";
import Laptop from "../../assets/img/media/laptop.svg";
import newnew from "../../assets/img/fill/9.gif";
import FadeIn from "../../components/FadeIn";
import Grid from "../../components/Dots/Grid";
const Home = () => {
  return (
    <>
      <main className={style.Home}>
        <Grid />
        <FadeIn delay={0.2} direction="right" padding fullwidth>
          <section className={style.first_screen}>
            <div className={style.rows_blok_first}>
              <div className={style.title_div}>
                <p className={style.title}>Кафедра «Информационные </p>
                <p className={style.title}>
                  системы
                  <img src={circle1} className={style.circle} />
                  и технологии
                  <img src={circle2} className={style.circle} />»
                </p>
              </div>
              <div className={style.social_link}>
                <a
                  href="https://t.me/zgu_university"
                  className={style.link_header_tg}
                >
                  <img className={style.tg} alt="tg" src={tg} />
                </a>
                <a
                  href="https://vk.com/zgu_university"
                  className={style.link_header_vk}
                >
                  <img className={style.vk} alt="vk" src={vk} />
                </a>
              </div>
            </div>

            <div className={style.rows_blok}>
              <a href="#about" className={style.container_kaf}>
                <p className={style.title_blok}>О кафедре</p>

                <p className={style.text}>
                  Высококачественное образование
                  <br /> в области IT и участие в проектах Крайнего Севера
                </p>
                <div className={style.bottom}>
                  <img src={box} className={style.boxxi} />
                  <img src={arrow} className={style.arrow_link} />
                </div>
              </a>

              <a href="#nap" className={style.container_nap}>
                <p className={style.title_blok}>Направления</p>
                <p className={style.text}>
                  Инновационные программы
                  <br /> для будущих IT-специалистов
                </p>

                <div className={style.bottom_desc}>
                  <img src={social} className={style.img_social} />

                  <img src={arrow} className={style.arrow_link} />
                </div>
                <div className="div-2" />
              </a>
              <div className={style.container_par}>
                <p className={style.title_blok}>Партнеры</p>
                <p className={style.text}>
                  Взаимодействие с ведущими
                  <br /> компаниями и организациями
                  <br /> Норильска
                </p>
                <div className={style.img_parther}>
                  <a href="https://www.nornickel.ru/">
                    <img className={style.parther} src={NN} />
                  </a>
                  <a href="https://norilsk-city.ru/">
                    <img className={style.parther} src={Norilsk} />
                  </a>
                  <a href="https://arnorilsk.ru/">
                    <img className={style.parther} src={Aph} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
        <FadeIn delay={0.3} direction="right" padding fullwidth>
          <section id="about" className={style.about}>
            <p className={style.title_two}>О кафедре</p>
            <div className={style.container_about}>
              <div className={style.kyrs}>
                <p className={style.title_kyrs}>
                  Курсы, проводимые на кафедре:
                </p>
                <div className={style.items}>
                  <p className={style.text_about}>искусственный интеллект</p>
                  <p className={style.text_about}>машинное обучение</p>
                  <p className={style.text_about}>базы данных</p>
                  <p className={style.text_about}>программирование</p>
                </div>
              </div>

              <div className={style.data}>
                <p className={style.title_ocn}> Дата основания:</p>
                <p className={style.text_about_ocn}>5.12.2002</p>
              </div>
              <div className={style.age}>
                <p className={style.title_age}>
                  Средний возраст сотрудников кафедры:
                </p>
                <p className={style.text_about_age}>36,5 лет</p>
              </div>
            </div>
            <div className={style.container_about2}>
              <div className={style.blok_new}>
                <p className={style.text_about}>
                  Передовой центр научных исследований и разработок в области
                  информационных технологий на территории
                  <span className={style.text_nn}> Крайнего Севера</span>
                </p>

                <img className={style.kryg} src={newnew} />
              </div>
              <div className={style.blok_NN}>
                <p className={style.text_about}>
                  Сотрудничаем с крупнейшим
                  <br /> в мире производителем никеля
                  <br /> и палладия компанией
                  <span className={style.text_nn}> НорНикель</span>,<br /> что
                  позволяет студентам получать практические навыки работы
                </p>

                <img className={style.partners_icon} src={NNikel} />
              </div>
              <div className={style.blok_norilsk}>
                <img src={Norilsk} />
                <div className={style.text_wrapper}>Норильск</div>
              </div>
            </div>
            <div className={style.container_about3}>
              <div className={style.blok_isit}>
                <p className={style.isit}>ИCиТ</p>
              </div>

              <div className={style.blok_zgy}>
                <img className={style.img_zgy} src={Zgy} />
                <p className={style.title_title}>
                  «Заполярный государственный университет Им Н.М. Федоровского»
                </p>
              </div>
            </div>
          </section>
        </FadeIn>
        <section id="nap" className={style.position}>
          <FadeIn delay={0.2} direction="right" padding fullwidth>
            <p className={style.title_two}>Образовательные программы</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="right" padding fullwidth>
            <div className={style.box}>
              <div className={style.box_container}>
                <div className={style.img_baki_ie}>
                  <p className={style.title_baki}>
                    Прикладная
                    <br /> информатика (ИЭ)
                  </p>
                  <div className={style.box_baki}>
                    <p className={style.text_text_ui}>Бакалавриат</p>
                    <p className={style.text_text_ui}>09.03.03</p>
                  </div>
                </div>

                <div className={style.box_info}>
                  <div className={style.info_baki}>
                    <p className={style.text_baki}>очная</p>
                    <p className={style.text_text}>Форма обучения</p>
                  </div>
                  <div className={style.info_baki}>
                    <p className={style.text_baki}>4 года</p>
                    <p className={style.text_text}>Срок обучения</p>
                  </div>
                  <div className={style.info_baki}>
                    <p className={style.text_baki}>145</p>
                    <p className={style.text_text}>Проходной балл</p>
                  </div>
                </div>
                <div className={style.baki_more}>
                  <a className={style.text_baki}>
                    <img src={arrow} className={style.arrow_more} />
                  </a>
                </div>
              </div>
              <div className={style.box_container}>
                <div className={style.img_baki_is}>
                  <p className={style.title_baki_is}>
                    Информационные системы
                    <br /> и технологии (ИС)
                  </p>
                  <div className={style.box_baki}>
                    <p className={style.text_text_ui}>Бакалавриат</p>
                    <p className={style.text_text_ui}>09.03.02</p>
                  </div>
                </div>

                <div className={style.box_info}>
                  <div className={style.info_baki}>
                    <p className={style.text_baki}>очная</p>
                    <p className={style.text_text}>Форма обучения</p>
                  </div>
                  <div className={style.info_baki}>
                    <p className={style.text_baki}>4 года</p>
                    <p className={style.text_text}>Срок обучения</p>
                  </div>
                  <div className={style.info_baki}>
                    <p className={style.text_baki}>145</p>
                    <p className={style.text_text}>Проходной балл</p>
                  </div>
                </div>

                <div className={style.baki_more}>
                  <div className={style.text_baki}>
                    <img src={arrow} className={style.arrow_more} />
                  </div>
                </div>
              </div>
              <div className={style.box_container}>
                <div className={style.img_baki_magi}>
                  <p className={style.title_baki}>Прикладная информатика</p>
                  <div className={style.box_baki}>
                    <p className={style.text_text_ui}>Магистратура</p>
                    <p className={style.text_text_ui}>09.04.03</p>
                  </div>
                </div>

                <div className={style.box_info_magi}>
                  <div className={style.info_baki_magi}>
                    <p className={style.text_baki}>очная, заочная</p>
                    <p className={style.text_text}>Форма обучения</p>
                  </div>
                  <div className={style.info_baki_magi}>
                    <p className={style.text_baki}>2 / 2,5 года</p>
                    <p className={style.text_text}>Срок обучения</p>
                  </div>
                </div>

                <div className={style.baki_more}>
                  <a className={style.text_baki}>
                    <img src={arrow} className={style.arrow_more_magi} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
          <img src={Laptop} className={style.img_about} />
        </section>
        {/* <button className={`${style.button} ${style.filled}`}>2</button> */}
      </main>
    </>
  );
};

export default Home;
