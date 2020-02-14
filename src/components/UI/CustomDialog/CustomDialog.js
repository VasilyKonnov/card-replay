import React from "react";
import classes from "./CustomDialog.module.css";
import StyledDialog from "./StyledDialog/StyledDialog";
import classNames from "classnames";

const CustomDialog = props => {
  const CustomDialogClassNames = classNames(
    props.className,
    classes["CustomDialog"]
  );
  return <StyledDialog className={CustomDialogClassNames} {...props} />;
};

export default CustomDialog;
