import React from "react";
import ButtonMui from "@material-ui/core/Button";
import classes from "./Button.module.css";
import classNames from "classnames";

const Button = props => {
  let buttonClassNames = classNames(
    classes[props.className],
    classes["Button"],
    props.className
  );
  return (
    <ButtonMui
      onClick={props.onClick}
      className={buttonClassNames}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonMui>
  );
};

export default Button;
