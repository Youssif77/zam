import React from "react";
import { BsChevronLeft } from "react-icons/bs";

import classes from "./CTAButton.module.css";

function CTAButton() {
  return (
    <button type="button" className={classes.ctaBtn}>
      <p> ﺗﺼﻔﺢ اﻟﺘﻄﺒﻴﻘﺎت</p>
      <BsChevronLeft className="shake-horizontal" />
    </button>
  );
}

export default CTAButton;
