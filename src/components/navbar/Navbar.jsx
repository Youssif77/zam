import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/zid-logo.svg";
import classes from "./Navbar.module.css";

const Menu = () => (
  <>
    <p>
      <a href="#الرئيسية">الرئيسية</a>
    </p>
    <p>
      <a href="#التصنيفات">التصنيفات</a>
    </p>
    <p>
      <a href="#التطبيقات">التطبيقات</a>
    </p>
    <p>
      <a href="#طور_التطبيق">طور التطبيق</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar__links"]}>
        <div className={classes["navbar__links-logo"]}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes["navbar__links-container"]}>
          <Menu />
        </div>
      </div>
      <div className={classes["navbar__menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${classes["navbar__menu_container"]} scale-up-center`}
          >
            <div className={classes["navbar__menu_container-links"]}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
