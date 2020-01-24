import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import classes from "./MenuButtonOpen.module.css";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const MenuButtonOpen = props => {
  let MenuToggleClasses = classNames(
    props.className,
    classes["MenuButtonOpen"]
  );

  return (
    <Button className={MenuToggleClasses} onClick={props.onClick}>
      <MenuIcon />
    </Button>
  );
};

export default MenuButtonOpen;
