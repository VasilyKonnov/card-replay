import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./CustomListItem.module.css";
import classNames from "classnames";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";

const CustomListItem = props => {
  const CustomListClassNames = classNames(
    props.className,
    classes["CustomListItem"]
  );
  return (
    <>
      <li className={classes["CustomListClassNames"]}>
        <NavLink to="/">
          <span className={classes["sectionName"]}>{props.sectionName}</span>
          {/* <span className={classes["date"]}>{props.date}</span> */}
        </NavLink>
        <div className={classes["sizeSection"]}>
          <span>{props.sizeSection}</span>
        </div>
        <IconButton className={classes["itemIcon"]}>
          <CreateIcon />
        </IconButton>
      </li>
    </>
  );
};

export default CustomListItem;
