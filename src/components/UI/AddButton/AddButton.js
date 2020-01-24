import React from "react";
import classes from "./AddButton.module.css";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const AddButton = props => {
  const AddButtonClassNames = classNames(props.className, classes["AddButton"]);
  return (
    <div className={AddButtonClassNames} onClick={props.onClick}>
      <IconButton>
        <AddIcon />
      </IconButton>
      <p className={classes["button-text"]}>{props.buttonText}</p>
    </div>
  );
};

export default AddButton;
