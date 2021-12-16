import React from "react";

import CTAButton from "../../components/cta-btn/CTAButton";
import { ellipse, dots, appsGIF, icon1, icon2, icon3 } from "./imports";
import classes from "./Features.module.css";

function Features() {
  return (
    <main className={classes.features}>
      <div className={classes["features__description"]}>
        <h2 className={classes["features__title"]}>
          ﻛﻞ ﻣﺎ ﺗﺤﺘﺎﺟﻪ ﻟﻨﻤﻮ ﻣﺘﺠﺮك ﻓﻰ ﻣﻜﺎن واﺣﺪ
        </h2>
        <h3 className={classes["features__subtitle"]}>
          ﻣﻤﻴﺰات ﺳﻮق ﺗﻄﺒﻴﻘﺎت زد ﺗﺴﺎﻋﺪك ﻓﻲ ﺳﻬﻮﻟﺔ وسرعة اﻟﺎﺳﺘﻔﺎدة ﻣﻦ ﺧﺪﻣﺎت وﺣﻠﻮل
          سوق اﻟﺘﻄﺒﻴﻘﺎت ﻟﻨﻤﻮ ﻣﺘﺠﺮك وﻣﻀﺎﻋﻔﺔ أرﺑﺎﺣﻚ
        </h3>
        <div className={classes["features__item"]}>
          <div className={classes["features__item-icon"]}>
            <img src={icon1} alt="icon1" />
          </div>
          <p>ﺳﻬﻮﻟﺔ ادارة و ﺗﻔﻌﻴﻞ ﺗﻄﺒﻴﻘﺎﺗﻚ ﻣﻦ ﻧﻔﺲ ﻟﻮﺣﺔ ﺗﺤﻜﻢ ﻣﺘﺠﺮك</p>
        </div>
        <div className={classes["features__item"]}>
          <div className={classes["features__item-icon"]}>
            <img src={icon2} alt="icon2" />
          </div>
          <p>دﻋﻢ ﻓﻨﻲ و ﺗﻘﻨﻲ ﻣﺘﻜﺎﻣﻞ ﻣﺘﻮﻓﺮ ﻋﻠﻰ ﻣﺪار اﻟﺴﺎﻋﺔ</p>
        </div>
        <div className={classes["features__item"]}>
          <div className={classes["features__item-icon"]}>
            <img src={icon3} alt="icon3" />
          </div>
          <p>أﺳﻌﺎر ﺗﻨﺎﻓﺴﻴﺔ ﻣﻊ ﺗﺠﺮﺑﺔ ﻣﺠﺎﻧﻴﺔ وﺑﺎﻗﺎت اﺷﺘﺮاك ﻣﺘﻨﻮﻋﺔ</p>
        </div>
        <CTAButton />
      </div>
      <div className={classes["features__media"]}>
        <img
          src={ellipse}
          alt="yellow ellipse"
          className={classes["features__media-ellipse"]}
        />
        <img
          src={dots}
          alt="dots"
          className={classes["features__media-dots"]}
        />
        <img
          src={appsGIF}
          alt="market place"
          className={classes["features__media-video"]}
        />
      </div>
    </main>
  );
}

export default Features;
