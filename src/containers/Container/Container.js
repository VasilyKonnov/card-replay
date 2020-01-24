import React from "react";
import classes from "./Container.module.css";
import classNames from "classnames";

const Container = props => {
  const ContainerClassNames = classNames(props.className, classes["Container"]);
  return (
    <div className={ContainerClassNames} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Container;
