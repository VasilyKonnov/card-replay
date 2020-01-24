import React from "react";
import classes from "./MainContainer.module.css";
import classNames from "classnames";

const MainContainer = props => {
  const MainContainerClassNames = classNames(
    props.className,
    classes["MainContainer"]
  );
  return (
    <div className={MainContainerClassNames} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default MainContainer;
