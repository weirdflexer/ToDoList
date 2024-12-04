import React from "react";
import ToDoListItem from "./ToDoListItem";
import classes from "./ToDoList.module.css";

const ToDoList = ({ toDoList, remove, style, done }) => {
  return (
    <>
      <h2 className="toDoList-title">Task to do - {toDoList.length}</h2>
      <ul className={classes.tdl}>
        {toDoList.map((item) => (
          <ToDoListItem
            style={style}
            task={item}
            key={item.id}
            remove={remove}
            done={done}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
