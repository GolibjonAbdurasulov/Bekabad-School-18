import Button from "../Button";
import { useState } from "react";
import { HeaderLogo } from "../../assets/images/svg";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header__container container">
        <a href="#">
          <div className="header__link">
            <img
              width={100}
              src={HeaderLogo}
              alt="header-logo"
              className="header-intro"
              title="18-maktab logo"
            />
            <p className="nav-school-city">Bekabod shahar</p>
            <p className="nav-school-name">18 - Maktab</p>
          </div>
        </a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                Maktab haqida
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                Bizning kutubxona
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                O'qituvchilar
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                Yangiliklar
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                Kurslar
              </a>
            </li>
          </ul>
        </nav>
        <Button className="nav-reception" type="button">
          Qabulxona
        </Button>
        <Button
          type="button"
          onClick={() => setIsOpenMenu((prevState) => !prevState)}
          className={`header-bars ${isOpenMenu && "header-bars--times"}`}
        >
          <span className="header-bars__stick"></span>
          <span className="header-bars__stick"></span>
          <span className="header-bars__stick"></span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
