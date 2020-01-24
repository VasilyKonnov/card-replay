import React from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import classes from "./MenuButtonClose.module.css";
import classNames from "classnames";

const MenuButtonClose = props => {
  const MenuButtonCloseClassNames = classNames(
    props.className,
    classes["MenuButtonClose"]
  );
  return (
    <Button className={MenuButtonCloseClassNames} onClick={props.onClick}>
      <CloseIcon />
    </Button>
  );
};

export default MenuButtonClose;
