import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Item.module.css";
import classNames from "classnames";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";

const Item = props => {
  const ItemClassNames = classNames(props.className, classes["Item"]);
  return (
    <li className={ItemClassNames}>
      <NavLink to={props.link}>
        <span className={classes["sectionName"]}>{props.sectionName}</span>
        {/* Если буду использовать дату в списке */}
        {/* <span className={classes["date"]}>{props.date}</span> */}
      </NavLink>
      <div className={classes["sizeSection"]}>
        <span>{props.sizeSection}</span>
      </div>
      <IconButton className={classes["itemIcon"]} onClick={props.onClick}>
        <CreateIcon />
      </IconButton>
    </li>
  );
};

export default Item;
