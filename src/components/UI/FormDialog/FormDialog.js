import React from "react";
import classes from "./FormDialog.module.css";
import classNames from "classnames";
import Dialog from "../CustomDialog/CustomDialog";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../Button/Button";

const FormDialog = props => {
  const FormDialogClassNames = classNames(
    props.className,
    classes["FormDialog"]
  );
  return (
    <Dialog open={true}>
      <div className={FormDialogClassNames}>
        <div className={classes["headerDialog"]}>
          <IconButton onClose={props.onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <h3>Добавить раздел</h3>
        <form className={classes["bodyDialog"]}>
          <CustomInput type="text" label="Название раздела" />
          <Button>Добавить</Button>
        </form>
      </div>
    </Dialog>
  );
};

export default FormDialog;
