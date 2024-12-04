import React from "react";
import classes from "./DoneListItem.module.css";

const DoneListItem = ({ task }) => {
  return (
    <div className={classes.tdlItem}>
      <div className={classes.content}>{task.description}</div>
    </div>
  );
};

export default DoneListItem;
