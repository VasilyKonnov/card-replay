import React from "react";
import classes from "./TheotrySections.module.css";
import classNames from "classnames";

const TheotrySections = props => {
  const TheotrySectionsClassNames = classNames(
    props.className,
    classes["TheotrySections"]
  );
  return (
    <div className={TheotrySectionsClassNames} onClick={props.onClick}>
      TheotrySections
    </div>
  );
};

export default TheotrySections;
