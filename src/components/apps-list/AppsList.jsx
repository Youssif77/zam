import React from "react";

import AppsItem from "../apps-Item/AppsItem";
import classes from "./AppsList.module.css";

function AppsList({ apps }) {
  return (
    <div className={classes.appslist}>
      {apps.map((app) => (
        <AppsItem key={app.id} app={app} />
      ))}
    </div>
  );
}

export default AppsList;
