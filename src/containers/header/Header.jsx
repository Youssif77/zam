import React from "react";

import CTAButton from "../../components/header-btn/CTAButton";
import { ellipse, dots, marketPlaceGIF } from "./imports";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes["header__title"]}>
        طور متجرك ووسع افاق تجارتك مع سوق تطبيقات زاد
      </h1>
      <h3 className={classes["header__subtitle"]}>
        طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو
        أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي
      </h3>
      <CTAButton />
      <div className={classes["header__preview"]}>
        <img
          src={ellipse}
          alt="yellow ellipse"
          className={classes["header__preview-ellipse"]}
        />
        <img
          src={dots}
          alt="dots"
          className={classes["header__preview-dots"]}
        />
        <img
          src={marketPlaceGIF}
          alt="market place"
          className={classes["header__preview-video"]}
        />
      </div>
    </header>
  );
}

export default Header;
