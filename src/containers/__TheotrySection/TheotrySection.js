import React from "react";
import classes from "./TheotrySection.module.css";
import classNames from "classnames";

const TheotrySection = props => {
  const TheotrySectionClassNames = classNames(
    props.className,
    classes["TheotrySection"]
  );
  return (
    <div className={TheotrySectionClassNames} onClick={props.onClick}>
      TheotrySection
    </div>
  );
};

export default TheotrySection;
