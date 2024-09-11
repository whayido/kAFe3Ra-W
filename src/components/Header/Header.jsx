import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Search from "../../assets/img/header/Search.svg";
import User from "../../assets/img/header/User.svg";
import Zgy from "../../assets/img/media/zgy.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <a href="https://polaruniversity.ru" className="link-zgy">
          <img src={Zgy} className="img-zgy" />
        </a>

        <section className="navbar">
          <nav>
            <Link to={"/"} className="logo_header">
              ИCиТ
            </Link>
            <NavLink to={"/сотрудники"} className="link-header">
              Сотрудники
            </NavLink>
            <NavLink to={"/расписание"} className="link-header">
              Расписание
            </NavLink>
            <NavLink to={"/информация"} className="link-header">
              Информация
            </NavLink>
            <img src={Search} className="img_nav" />
            <img src={User} className="img_nav" />
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;
