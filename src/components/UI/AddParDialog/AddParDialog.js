import React, { Component } from "react";
import classes from "./AddParDialog.module.css";
import classNames from "classnames";

import CustomDialog from "../CustomDialog/CustomDialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../Button/Button";

export default class AddParDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    console.log("Что мы принимаем в open", this.props.open);
    const open = this.props.open;

    const FormDialogClassNames = classNames(
      this.props.className,
      classes["FormDialog"]
    );
    return (
      <CustomDialog open={open} onClose={this.props.onClose}>
        <div className={FormDialogClassNames}>
          <div className={classes["headerDialog"]}>
            <IconButton onClick={this.props.onClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <h3>Добавить раздел</h3>
          <form className={classes["bodyDialog"]}>
            <CustomInput type="text" label="Название раздела" autoFocus />
            <Button>Добавить</Button>
          </form>
        </div>
      </CustomDialog>
    );
  }
}
