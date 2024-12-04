import React, { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import classes from "./NewTaskField.module.css";

const NewTaskField = ({ create }) => {
  const [task, setTask] = useState("");

  function addNewTask(e) {
    e.preventDefault();
    if (task) create(task);
    setTask("");
  }

  return (
    <form className={classes.field}>
      <Input value={task} onChange={(e) => setTask(e.target.value)} />
      <Button onClick={addNewTask} />
    </form>
  );
};

export default NewTaskField;
