import React from "react";
import { IoStarSharp } from "react-icons/io5";

import classes from "./AppsItem.module.css";

function AppsItem({ app }) {
  return (
    <div className={classes.appsitem}>
      <div className={classes["appsitem__logo"]}>
        <img src={app.logo} alt="logo" />
      </div>

      <div className={classes["appsitem__description"]}>
        <div className={classes["appsitem__description-info"]}>
          <p>{app.title}</p>
          <div className={classes["appsitem__description-rating"]}>
            <IoStarSharp />
            <p>{app.rating}</p>
          </div>
        </div>
        <p className={classes["appsitem__description-developer"]}>
          تطوير : <span>{app.developedBy}</span>
        </p>
        <p>{app.description}</p>
      </div>
    </div>
  );
}

export default AppsItem;
