import React from "react";
import classes from "./ToDoListItem.module.css";

const ToDoListItem = ({ task, remove, done }) => {
  return (
    <div className={classes.tdlItem}>
      <div className={classes.content}>
        {task.description}
        <div className={classes.buttons}>
          <button
            className={classes.doneButton}
            onClick={() => done(task)}
          ></button>
          <button
            className={classes.deleteButton}
            onClick={() => remove(task.id)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ToDoListItem;
