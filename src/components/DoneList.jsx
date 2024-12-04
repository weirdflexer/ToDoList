import React from "react";
import classes from "./DoneList.module.css";
import DoneListItem from "./DoneListItem";

const DoneList = ({ doneList }) => {
  return (
    <>
      <ul className={classes.tdl}>
        <h2 className="toDoList-title">Done - {doneList.length}</h2>
        {doneList.map((item) => (
          <DoneListItem task={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default DoneList;
