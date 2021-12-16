import React from "react";
import { BsChevronLeft } from "react-icons/bs";

import appLogo from "../../assets/applogo.svg";
import AppsList from "../../components/apps-list/AppsList";
import classes from "./Apps.module.css";

const DUMYY_APPS = [
  {
    id: "a1",
    title: "قمرة",
    developedBy: "عمر ابراهيم",
    rating: 5,
    logo: appLogo,
    description:
      "ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ",
  },
  {
    id: "a2",
    title: "قمرة",
    developedBy: "عمر ابراهيم",
    rating: 5,
    logo: appLogo,
    description:
      "ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ",
  },
  {
    id: "a3",
    title: "قمرة",
    developedBy: "عمر ابراهيم",
    rating: 5,
    logo: appLogo,
    description:
      "ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ",
  },
  {
    id: "a4",
    title: "قمرة",
    developedBy: "عمر ابراهيم",
    rating: 5,
    logo: appLogo,
    description:
      "ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ",
  },
];

function Apps() {
  return (
    <section className={classes.apps}>
      <h2 className={classes["apps__title"]}>اﻟﺘﻄﺒﻴﻘﺎت اﻟﻤﻤﻴﺰة</h2>
      <h3 className={classes["apps__subtitle"]}>
        ﺗﻄﺒﻴﻘﺎت ﺗﻘﺪم ﺣﻠﻮل وﺧﺪﻣﺎت ﻣﻤﻴﺰة ﻧﻮﺻﻲ ﺑﺘﺠﺮﺑﺘﻬﺎ
      </h3>
      <AppsList apps={DUMYY_APPS} />
      <button type="button" className={classes["apps__btn"]}>
        <p>جميع اﻟﺘﻄﺒﻴﻘﺎت</p>
        <BsChevronLeft className="shake-horizontal" />
      </button>
    </section>
  );
}

export default Apps;
