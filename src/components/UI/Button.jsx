import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return <button className={classes.btn} {...props}></button>;
};

export default Button;
