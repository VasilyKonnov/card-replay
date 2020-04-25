import React from "react";
import classes from "./SearchCreate.module.css";
import classNames from "classnames";

const SearchCreate = (props) => {
  const SearchCreateClassNames = classNames(
    props.className,
    classes["SearchCreate"]
  );
  return <div className={SearchCreateClassNames} onClick={props.onClick} />;
};

export default SearchCreate;
