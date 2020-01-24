import React from "react";
import classes from "./Card.module.css";
import classNames from "classnames";

const Card = props => {
  const CardClassNames = classNames(props.className, classes["Card"]);
  return (
    <div className={CardClassNames} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
